import { SpeakeasyBase } from "../../../internal/utils";
import { AdWordsLocationExtensions } from "./adwordslocationextensions";
import { BusinessHours } from "./businesshours";
import { Categories, CategoriesInput } from "./categories";
import { LatLng } from "./latlng";
import { Metadata } from "./metadata";
import { MoreHours } from "./morehours";
import { OpenInfo, OpenInfoInput } from "./openinfo";
import { PhoneNumbers } from "./phonenumbers";
import { PostalAddress } from "./postaladdress";
import { Profile } from "./profile";
import { RelationshipData } from "./relationshipdata";
import { ServiceAreaBusiness } from "./serviceareabusiness";
import { ServiceItem } from "./serviceitem";
import { SpecialHours } from "./specialhours";
/**
 * A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
 */
export declare class LocationInput extends SpeakeasyBase {
    /**
     * Additional information that is surfaced in AdWords.
     */
    adWordsLocationExtensions?: AdWordsLocationExtensions;
    /**
     * A collection of categories that describes the business. During updates, both fields must be set. Clients are prohibited from individually updating the primary or additional categories using the update mask.
     */
    categories?: CategoriesInput;
    /**
     * Optional. A collection of free-form strings to allow you to tag your business. These labels are NOT user facing; only you can see them. Must be between 1-255 characters per label.
     */
    labels?: string[];
    /**
     * Immutable. The language of the location. Set during creation and not updateable.
     */
    languageCode?: string;
    /**
     * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
     */
    latlng?: LatLng;
    /**
     * Optional. More hours for a business's different departments or specific customers.
     */
    moreHours?: MoreHours[];
    /**
     * Google identifier for this location in the form: `locations/{location_id}`.
     */
    name?: string;
    /**
     * Information related to the opening state of the business.
     */
    openInfo?: OpenInfoInput;
    /**
     * A collection of phone numbers for the business. During updates, both fields must be set. Clients may not update just the primary or additional phone numbers using the update mask. International phone format is preferred, such as "+1 415 555 0132", see more in (https://developers.google.com/style/phone-numbers#international-phone-numbers).
     */
    phoneNumbers?: PhoneNumbers;
    /**
     * All information pertaining to the location's profile.
     */
    profile?: Profile;
    /**
     * Represents the time periods that this location is open for business. Holds a collection of TimePeriod instances.
     */
    regularHours?: BusinessHours;
    /**
     * Information of all parent and children locations related to this one.
     */
    relationshipData?: RelationshipData;
    /**
     * Service area businesses provide their service at the customer's location (for example, a locksmith or plumber).
     */
    serviceArea?: ServiceAreaBusiness;
    /**
     * Optional. List of services supported by merchants. A service can be haircut, install water heater, etc. Duplicated service items will be removed automatically.
     */
    serviceItems?: ServiceItem[];
    /**
     * Represents a set of time periods when a location's operational hours differ from its normal business hours.
     */
    specialHours?: SpecialHours;
    /**
     * Optional. External identifier for this location, which must be unique within a given account. This is a means of associating the location with your own records.
     */
    storeCode?: string;
    /**
     * Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478
     */
    storefrontAddress?: PostalAddress;
    /**
     * Required. Location name should reflect your business's real-world name, as used consistently on your storefront, website, and stationery, and as known to customers. Any additional information, when relevant, can be included in other fields of the resource (for example, `Address`, `Categories`). Don't add unnecessary information to your name (for example, prefer "Google" over "Google Inc. - Mountain View Corporate Headquarters"). Don't include marketing taglines, store codes, special characters, hours or closed/open status, phone numbers, website URLs, service/product information, location/address or directions, or containment information (for example, "Chase ATM in Duane Reade").
     */
    title?: string;
    /**
     * Optional. A URL for this business. If possible, use a URL that represents this individual business location instead of a generic website/URL that represents all locations, or the brand.
     */
    websiteUri?: string;
}
/**
 * A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
 */
export declare class Location extends SpeakeasyBase {
    /**
     * Additional information that is surfaced in AdWords.
     */
    adWordsLocationExtensions?: AdWordsLocationExtensions;
    /**
     * A collection of categories that describes the business. During updates, both fields must be set. Clients are prohibited from individually updating the primary or additional categories using the update mask.
     */
    categories?: Categories;
    /**
     * Optional. A collection of free-form strings to allow you to tag your business. These labels are NOT user facing; only you can see them. Must be between 1-255 characters per label.
     */
    labels?: string[];
    /**
     * Immutable. The language of the location. Set during creation and not updateable.
     */
    languageCode?: string;
    /**
     * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
     */
    latlng?: LatLng;
    /**
     * Additional non-user-editable information about the location.
     */
    metadata?: Metadata;
    /**
     * Optional. More hours for a business's different departments or specific customers.
     */
    moreHours?: MoreHours[];
    /**
     * Google identifier for this location in the form: `locations/{location_id}`.
     */
    name?: string;
    /**
     * Information related to the opening state of the business.
     */
    openInfo?: OpenInfo;
    /**
     * A collection of phone numbers for the business. During updates, both fields must be set. Clients may not update just the primary or additional phone numbers using the update mask. International phone format is preferred, such as "+1 415 555 0132", see more in (https://developers.google.com/style/phone-numbers#international-phone-numbers).
     */
    phoneNumbers?: PhoneNumbers;
    /**
     * All information pertaining to the location's profile.
     */
    profile?: Profile;
    /**
     * Represents the time periods that this location is open for business. Holds a collection of TimePeriod instances.
     */
    regularHours?: BusinessHours;
    /**
     * Information of all parent and children locations related to this one.
     */
    relationshipData?: RelationshipData;
    /**
     * Service area businesses provide their service at the customer's location (for example, a locksmith or plumber).
     */
    serviceArea?: ServiceAreaBusiness;
    /**
     * Optional. List of services supported by merchants. A service can be haircut, install water heater, etc. Duplicated service items will be removed automatically.
     */
    serviceItems?: ServiceItem[];
    /**
     * Represents a set of time periods when a location's operational hours differ from its normal business hours.
     */
    specialHours?: SpecialHours;
    /**
     * Optional. External identifier for this location, which must be unique within a given account. This is a means of associating the location with your own records.
     */
    storeCode?: string;
    /**
     * Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478
     */
    storefrontAddress?: PostalAddress;
    /**
     * Required. Location name should reflect your business's real-world name, as used consistently on your storefront, website, and stationery, and as known to customers. Any additional information, when relevant, can be included in other fields of the resource (for example, `Address`, `Categories`). Don't add unnecessary information to your name (for example, prefer "Google" over "Google Inc. - Mountain View Corporate Headquarters"). Don't include marketing taglines, store codes, special characters, hours or closed/open status, phone numbers, website URLs, service/product information, location/address or directions, or containment information (for example, "Chase ATM in Duane Reade").
     */
    title?: string;
    /**
     * Optional. A URL for this business. If possible, use a URL that represents this individual business location instead of a generic website/URL that represents all locations, or the brand.
     */
    websiteUri?: string;
}
