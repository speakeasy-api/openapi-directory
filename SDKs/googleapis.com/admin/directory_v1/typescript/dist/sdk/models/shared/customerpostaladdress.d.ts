import { SpeakeasyBase } from "../../../internal/utils";
export declare class CustomerPostalAddress extends SpeakeasyBase {
    /**
     * A customer's physical address. The address can be composed of one to three lines.
     */
    addressLine1?: string;
    /**
     * Address line 2 of the address.
     */
    addressLine2?: string;
    /**
     * Address line 3 of the address.
     */
    addressLine3?: string;
    /**
     * The customer contact's name.
     */
    contactName?: string;
    /**
     * This is a required property. For `countryCode` information see the [ISO 3166 country code elements](https://www.iso.org/iso/country_codes.htm).
     */
    countryCode?: string;
    /**
     * Name of the locality. An example of a locality value is the city of `San Francisco`.
     */
    locality?: string;
    /**
     * The company or company division name.
     */
    organizationName?: string;
    /**
     * The postal code. A postalCode example is a postal zip code such as `10009`. This is in accordance with - http: //portablecontacts.net/draft-spec.html#address_element.
     */
    postalCode?: string;
    /**
     * Name of the region. An example of a region value is `NY` for the state of New York.
     */
    region?: string;
}
