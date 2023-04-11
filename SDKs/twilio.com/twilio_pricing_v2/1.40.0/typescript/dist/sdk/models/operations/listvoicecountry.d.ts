import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListVoiceCountryServerList: readonly ["https://pricing.twilio.com"];
export declare class ListVoiceCountrySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListVoiceCountryRequest extends SpeakeasyBase {
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
export declare class ListVoiceCountryListVoiceCountryResponseMeta extends SpeakeasyBase {
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
export declare class ListVoiceCountryListVoiceCountryResponse extends SpeakeasyBase {
    countries?: shared.PricingV2VoiceVoiceCountry[];
    meta?: ListVoiceCountryListVoiceCountryResponseMeta;
}
export declare class ListVoiceCountryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listVoiceCountryResponse?: ListVoiceCountryListVoiceCountryResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
