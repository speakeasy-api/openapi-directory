import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON template for address of a customer.
 */
export declare class Address extends SpeakeasyBase {
    /**
     * A customer's physical address. An address can be composed of one to three lines. The `addressline2` and `addressLine3` are optional.
     */
    addressLine1?: string;
    /**
     * Line 2 of the address.
     */
    addressLine2?: string;
    /**
     * Line 3 of the address.
     */
    addressLine3?: string;
    /**
     * The customer contact's name. This is required.
     */
    contactName?: string;
    /**
     * For `countryCode` information, see the ISO 3166 country code elements. Verify that country is approved for resale of Google products. This property is required when creating a new customer.
     */
    countryCode?: string;
    /**
     * Identifies the resource as a customer address. Value: `customers#address`
     */
    kind?: string;
    /**
     * An example of a `locality` value is the city of `San Francisco`.
     */
    locality?: string;
    /**
     * The company or company division name. This is required.
     */
    organizationName?: string;
    /**
     * A `postalCode` example is a postal zip code such as `94043`. This property is required when creating a new customer.
     */
    postalCode?: string;
    /**
     * An example of a `region` value is `CA` for the state of California.
     */
    region?: string;
}
