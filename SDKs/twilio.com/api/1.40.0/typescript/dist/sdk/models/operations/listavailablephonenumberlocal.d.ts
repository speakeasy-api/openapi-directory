import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListAvailablePhoneNumberLocalServerList: readonly ["https://api.twilio.com"];
export declare class ListAvailablePhoneNumberLocalSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListAvailablePhoneNumberLocalRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) requesting the AvailablePhoneNumber resources.
     */
    accountSid: string;
    /**
     * The area code of the phone numbers to read. Applies to only phone numbers in the US and Canada.
     */
    areaCode?: number;
    /**
     * Whether to read phone numbers that are new to the Twilio platform. Can be: `true` or `false` and the default is `true`.
     */
    beta?: boolean;
    /**
     * The pattern on which to match phone numbers. Valid characters are `*`, `0-9`, `a-z`, and `A-Z`. The `*` character matches any single digit. For examples, see [Example 2](https://www.twilio.com/docs/phone-numbers/api/availablephonenumberlocal-resource?code-sample=code-find-phone-numbers-by-number-pattern) and [Example 3](https://www.twilio.com/docs/phone-numbers/api/availablephonenumberlocal-resource?code-sample=code-find-phone-numbers-by-character-pattern). If specified, this value must have at least two characters.
     */
    contains?: string;
    /**
     * The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country from which to read phone numbers.
     */
    countryCode: string;
    /**
     * The search radius, in miles, for a `near_` query.  Can be up to `500` and the default is `25`. Applies to only phone numbers in the US and Canada.
     */
    distance?: number;
    /**
     * Whether to exclude phone numbers that require an [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`.
     */
    excludeAllAddressRequired?: boolean;
    /**
     * Whether to exclude phone numbers that require a foreign [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`.
     */
    excludeForeignAddressRequired?: boolean;
    /**
     * Whether to exclude phone numbers that require a local [Address](https://www.twilio.com/docs/usage/api/address). Can be: `true` or `false` and the default is `false`.
     */
    excludeLocalAddressRequired?: boolean;
    /**
     * Whether the phone numbers can receive faxes. Can be: `true` or `false`.
     */
    faxEnabled?: boolean;
    /**
     * Limit results to a specific local access and transport area ([LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area)). Given a phone number, search within the same [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) as that number. Applies to only phone numbers in the US and Canada.
     */
    inLata?: string;
    /**
     * Limit results to a particular locality or city. Given a phone number, search within the same Locality as that number.
     */
    inLocality?: string;
    /**
     * Limit results to a particular postal code. Given a phone number, search within the same postal code as that number. Applies to only phone numbers in the US and Canada.
     */
    inPostalCode?: string;
    /**
     * Limit results to a specific rate center, or given a phone number search within the same rate center as that number. Requires `in_lata` to be set as well. Applies to only phone numbers in the US and Canada.
     */
    inRateCenter?: string;
    /**
     * Limit results to a particular region, state, or province. Given a phone number, search within the same region as that number. Applies to only phone numbers in the US and Canada.
     */
    inRegion?: string;
    /**
     * Whether the phone numbers can receive MMS messages. Can be: `true` or `false`.
     */
    mmsEnabled?: boolean;
    /**
     * Given a latitude/longitude pair `lat,long` find geographically close numbers within `distance` miles. Applies to only phone numbers in the US and Canada.
     */
    nearLatLong?: string;
    /**
     * Given a phone number, find a geographically close number within `distance` miles. Distance defaults to 25 miles. Applies to only phone numbers in the US and Canada.
     */
    nearNumber?: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
    /**
     * Whether the phone numbers can receive text messages. Can be: `true` or `false`.
     */
    smsEnabled?: boolean;
    /**
     * Whether the phone numbers can receive calls. Can be: `true` or `false`.
     */
    voiceEnabled?: boolean;
}
/**
 * OK
 */
export declare class ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse extends SpeakeasyBase {
    availablePhoneNumbers?: shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberLocal[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListAvailablePhoneNumberLocalResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listAvailablePhoneNumberLocalResponse?: ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
