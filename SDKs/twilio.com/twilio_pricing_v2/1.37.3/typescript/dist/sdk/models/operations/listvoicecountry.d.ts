import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListVoiceCountryServerList: readonly ["https://pricing.twilio.com"];
export declare class ListVoiceCountryQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListVoiceCountrySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
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
export declare class ListVoiceCountryListVoiceCountryResponse extends SpeakeasyBase {
    countries?: shared.PricingV2VoiceVoiceCountry[];
    meta?: ListVoiceCountryListVoiceCountryResponseMeta;
}
export declare class ListVoiceCountryRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListVoiceCountryQueryParams;
    security: ListVoiceCountrySecurity;
}
export declare class ListVoiceCountryResponse extends SpeakeasyBase {
    contentType: string;
    listVoiceCountryResponse?: ListVoiceCountryListVoiceCountryResponse;
    statusCode: number;
}
