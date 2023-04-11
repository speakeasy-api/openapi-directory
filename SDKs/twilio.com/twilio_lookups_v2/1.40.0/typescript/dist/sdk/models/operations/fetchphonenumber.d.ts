import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchPhoneNumberServerList: readonly ["https://lookups.twilio.com"];
export declare class FetchPhoneNumberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchPhoneNumberRequest extends SpeakeasyBase {
    /**
     * User’s country, up to two characters. This query parameter is only used (optionally) for identity_match package requests.
     */
    addressCountryCode?: string;
    /**
     * User’s first address line. This query parameter is only used (optionally) for identity_match package requests.
     */
    addressLine1?: string;
    /**
     * User’s second address line. This query parameter is only used (optionally) for identity_match package requests.
     */
    addressLine2?: string;
    /**
     * User’s city. This query parameter is only used (optionally) for identity_match package requests.
     */
    city?: string;
    /**
     * The [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) used if the phone number provided is in national format.
     */
    countryCode?: string;
    /**
     * User’s date of birth, in YYYYMMDD format. This query parameter is only used (optionally) for identity_match package requests.
     */
    dateOfBirth?: string;
    /**
     * A comma-separated list of fields to return. Possible values are caller_name, sim_swap, call_forwarding, live_activity, line_type_intelligence, identity_match.
     */
    fields?: string;
    /**
     * User’s first name. This query parameter is only used (optionally) for identity_match package requests.
     */
    firstName?: string;
    /**
     * User’s last name. This query parameter is only used (optionally) for identity_match package requests.
     */
    lastName?: string;
    /**
     * User’s national ID, such as SSN or Passport ID. This query parameter is only used (optionally) for identity_match package requests.
     */
    nationalId?: string;
    /**
     * The phone number to lookup in E.164 or national format. Default country code is +1 (North America).
     */
    phoneNumber: string;
    /**
     * User’s postal zip code. This query parameter is only used (optionally) for identity_match package requests.
     */
    postalCode?: string;
    /**
     * User’s country subdivision, such as state, province, or locality. This query parameter is only used (optionally) for identity_match package requests.
     */
    state?: string;
}
export declare class FetchPhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    lookupsV2PhoneNumber?: shared.LookupsV2PhoneNumber;
}
