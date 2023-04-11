import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ApiV2010AccountAddress extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that is responsible for the Address resource.
     */
    accountSid?: string;
    /**
     * The city in which the address is located.
     */
    city?: string;
    /**
     * The name associated with the address.This property has a maximum length of 16 4-byte characters, or 21 3-byte characters.
     */
    customerName?: string;
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: string;
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: string;
    /**
     * Whether emergency calling has been enabled on this number.
     */
    emergencyEnabled?: boolean;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The ISO country code of the address.
     */
    isoCountry?: string;
    /**
     * The postal code of the address.
     */
    postalCode?: string;
    /**
     * The state or region of the address.
     */
    region?: string;
    /**
     * The unique string that that we created to identify the Address resource.
     */
    sid?: string;
    /**
     * The number and street address of the address.
     */
    street?: string;
    /**
     * The additional number and street address of the address.
     */
    streetSecondary?: string;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`.
     */
    uri?: string;
    /**
     * Whether the address has been validated to comply with local regulation. In countries that require valid addresses, an invalid address will not be accepted. `true` indicates the Address has been validated. `false` indicate the country doesn't require validation or the Address is not valid.
     */
    validated?: boolean;
    /**
     * Whether the address has been verified to comply with regulation. In countries that require valid addresses, an invalid address will not be accepted. `true` indicates the Address has been verified. `false` indicate the country doesn't require verified or the Address is not valid.
     */
    verified?: boolean;
}
