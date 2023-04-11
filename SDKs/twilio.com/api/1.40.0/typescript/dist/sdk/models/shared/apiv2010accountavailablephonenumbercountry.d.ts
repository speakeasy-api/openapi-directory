import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class ApiV2010AccountAvailablePhoneNumberCountry extends SpeakeasyBase {
    /**
     * Whether all phone numbers available in the country are new to the Twilio platform. `true` if they are and `false` if all numbers are not in the Twilio Phone Number Beta program.
     */
    beta?: boolean;
    /**
     * The name of the country.
     */
    country?: string;
    /**
     * The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country.
     */
    countryCode?: string;
    /**
     * A list of related AvailablePhoneNumber resources identified by their URIs relative to `https://api.twilio.com`.
     */
    subresourceUris?: Record<string, any>;
    /**
     * The URI of the Country resource, relative to `https://api.twilio.com`.
     */
    uri?: string;
}
