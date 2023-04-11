import { SpeakeasyBase } from "../../../internal/utils";
import { AdWordsLocationExtensions } from "./adwordslocationextensions";
import { Attribute } from "./attribute";
import { BusinessHours } from "./businesshours";
import { Category, CategoryInput } from "./category";
import { LatLng } from "./latlng";
import { LocationKey } from "./locationkey";
import { LocationState, LocationStateInput } from "./locationstate";
import { Metadata } from "./metadata";
import { MoreHours } from "./morehours";
import { OpenInfo } from "./openinfo";
import { PostalAddress } from "./postaladdress";
import { PriceList } from "./pricelist";
import { Profile } from "./profile";
import { RelationshipData } from "./relationshipdata";
import { ServiceAreaBusiness } from "./serviceareabusiness";
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
     * Additional categories to describe your business. Categories help your customers find accurate, specific results for services they're interested in. To keep your business information accurate and live, make sure that you use as few categories as possible to describe your overall core business. Choose categories that are as specific as possible, but representative of your main business.
     */
    additionalCategories?: CategoryInput[];
    /**
     * Up to two phone numbers (mobile or landline, no fax) at which your business can be called, in addition to your primary phone number.
     */
    additionalPhones?: string[];
    /**
     * Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an i18n-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478
     */
    address?: PostalAddress;
    /**
     * Attributes for this location.
     */
    attributes?: Attribute[];
    /**
     * A collection of free-form strings to allow you to tag your business. These labels are NOT user facing; only you can see them. Limited to 255 characters (per label).
     */
    labels?: string[];
    /**
     * The language of the location. Set during creation and not updateable.
     */
    languageCode?: string;
    /**
     * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the WGS84 standard. Values must be within normalized ranges.
     */
    latlng?: LatLng;
    /**
     * Alternate/surrogate key references for a location.
     */
    locationKey?: LocationKey;
    /**
     * Location name should reflect your business's real-world name, as used consistently on your storefront, website, and stationery, and as known to customers. Any additional information, when relevant, can be included in other fields of the resource (for example, `Address`, `Categories`). Don't add unnecessary information to your name (for example, prefer "Google" over "Google Inc. - Mountain View Corporate Headquarters"). Don't include marketing taglines, store codes, special characters, hours or closed/open status, phone numbers, website URLs, service/product information, location/address or directions, or containment information (for example, "Chase ATM in Duane Reade").
     */
    locationName?: string;
    /**
     * Contains a set of booleans that reflect the [state of a Location.](https://support.google.com/business/answer/3480862)
     */
    locationState?: LocationStateInput;
    /**
     * Additional non-user-editable information about the location.
     */
    metadata?: Metadata;
    /**
     * More hours for a business's different departments or specific customers.
     */
    moreHours?: MoreHours[];
    /**
     * Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}` In the context of matches, this field will not be populated.
     */
    name?: string;
    /**
     * Information related to the opening state of the business.
     */
    openInfo?: OpenInfo;
    /**
     * Price list information for this location.
     */
    priceLists?: PriceList[];
    /**
     * A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see [categories.list](https://developers.google.com/my-business/reference/rest/v4/categories/list).
     */
    primaryCategory?: CategoryInput;
    /**
     * A phone number that connects to your individual business location as directly as possible. Use a local phone number instead of a central, call center helpline number whenever possible.
     */
    primaryPhone?: string;
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
     * Represents a set of time periods when a location's operational hours differ from its normal business hours.
     */
    specialHours?: SpecialHours;
    /**
     * External identifier for this location, which must be unique inside a given account. This is a means of associating the location with your own records.
     */
    storeCode?: string;
    /**
     * A URL for this business. If possible, use a URL that represents this individual business location instead of a generic website/URL that represents all locations, or the brand.
     */
    websiteUrl?: string;
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
     * Additional categories to describe your business. Categories help your customers find accurate, specific results for services they're interested in. To keep your business information accurate and live, make sure that you use as few categories as possible to describe your overall core business. Choose categories that are as specific as possible, but representative of your main business.
     */
    additionalCategories?: Category[];
    /**
     * Up to two phone numbers (mobile or landline, no fax) at which your business can be called, in addition to your primary phone number.
     */
    additionalPhones?: string[];
    /**
     * Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an i18n-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478
     */
    address?: PostalAddress;
    /**
     * Attributes for this location.
     */
    attributes?: Attribute[];
    /**
     * A collection of free-form strings to allow you to tag your business. These labels are NOT user facing; only you can see them. Limited to 255 characters (per label).
     */
    labels?: string[];
    /**
     * The language of the location. Set during creation and not updateable.
     */
    languageCode?: string;
    /**
     * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the WGS84 standard. Values must be within normalized ranges.
     */
    latlng?: LatLng;
    /**
     * Alternate/surrogate key references for a location.
     */
    locationKey?: LocationKey;
    /**
     * Location name should reflect your business's real-world name, as used consistently on your storefront, website, and stationery, and as known to customers. Any additional information, when relevant, can be included in other fields of the resource (for example, `Address`, `Categories`). Don't add unnecessary information to your name (for example, prefer "Google" over "Google Inc. - Mountain View Corporate Headquarters"). Don't include marketing taglines, store codes, special characters, hours or closed/open status, phone numbers, website URLs, service/product information, location/address or directions, or containment information (for example, "Chase ATM in Duane Reade").
     */
    locationName?: string;
    /**
     * Contains a set of booleans that reflect the [state of a Location.](https://support.google.com/business/answer/3480862)
     */
    locationState?: LocationState;
    /**
     * Additional non-user-editable information about the location.
     */
    metadata?: Metadata;
    /**
     * More hours for a business's different departments or specific customers.
     */
    moreHours?: MoreHours[];
    /**
     * Google identifier for this location in the form: `accounts/{account_id}/locations/{location_id}` In the context of matches, this field will not be populated.
     */
    name?: string;
    /**
     * Information related to the opening state of the business.
     */
    openInfo?: OpenInfo;
    /**
     * Price list information for this location.
     */
    priceLists?: PriceList[];
    /**
     * A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see [categories.list](https://developers.google.com/my-business/reference/rest/v4/categories/list).
     */
    primaryCategory?: Category;
    /**
     * A phone number that connects to your individual business location as directly as possible. Use a local phone number instead of a central, call center helpline number whenever possible.
     */
    primaryPhone?: string;
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
     * Represents a set of time periods when a location's operational hours differ from its normal business hours.
     */
    specialHours?: SpecialHours;
    /**
     * External identifier for this location, which must be unique inside a given account. This is a means of associating the location with your own records.
     */
    storeCode?: string;
    /**
     * A URL for this business. If possible, use a URL that represents this individual business location instead of a generic website/URL that represents all locations, or the brand.
     */
    websiteUrl?: string;
}
