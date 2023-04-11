import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListDialingPermissionsCountryServerList: readonly ["https://voice.twilio.com"];
export declare class ListDialingPermissionsCountrySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListDialingPermissionsCountryRequest extends SpeakeasyBase {
    /**
     * Filter to retrieve the country permissions by specifying the continent
     */
    continent?: string;
    /**
     * Filter the results by specified [country codes](https://www.itu.int/itudoc/itu-t/ob-lists/icc/e164_763.html)
     */
    countryCode?: string;
    /**
     * Filter to retrieve the country permissions with dialing to high-risk special service numbers enabled. Can be: `true` or `false`
     */
    highRiskSpecialNumbersEnabled?: boolean;
    /**
     * Filter to retrieve the country permissions with dialing to high-risk [toll fraud](https://www.twilio.com/learn/voice-and-video/toll-fraud) numbers enabled. Can be: `true` or `false`.
     */
    highRiskTollfraudNumbersEnabled?: boolean;
    /**
     * Filter to retrieve the country permissions by specifying the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
     */
    isoCode?: string;
    /**
     * Filter to retrieve the country permissions with dialing to low-risk numbers enabled. Can be: `true` or `false`.
     */
    lowRiskNumbersEnabled?: boolean;
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
}
export declare class ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListDialingPermissionsCountryListDialingPermissionsCountryResponse extends SpeakeasyBase {
    content?: shared.VoiceV1DialingPermissionsDialingPermissionsCountry[];
    meta?: ListDialingPermissionsCountryListDialingPermissionsCountryResponseMeta;
}
export declare class ListDialingPermissionsCountryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listDialingPermissionsCountryResponse?: ListDialingPermissionsCountryListDialingPermissionsCountryResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
