import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListTrunkingCountryServerList: readonly ["https://pricing.twilio.com"];
export declare class ListTrunkingCountrySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListTrunkingCountryRequest extends SpeakeasyBase {
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
export declare class ListTrunkingCountryListTrunkingCountryResponseMeta extends SpeakeasyBase {
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
export declare class ListTrunkingCountryListTrunkingCountryResponse extends SpeakeasyBase {
    countries?: shared.PricingV2TrunkingCountry[];
    meta?: ListTrunkingCountryListTrunkingCountryResponseMeta;
}
export declare class ListTrunkingCountryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listTrunkingCountryResponse?: ListTrunkingCountryListTrunkingCountryResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
