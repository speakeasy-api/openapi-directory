import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListNetworkServerList: readonly ["https://supersim.twilio.com"];
export declare class ListNetworkSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListNetworkRequest extends SpeakeasyBase {
    /**
     * The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the Network resources to read.
     */
    isoCountry?: string;
    /**
     * The 'mobile country code' of a country. Network resources with this `mcc` in their `identifiers` will be read.
     */
    mcc?: string;
    /**
     * The 'mobile network code' of a mobile operator network. Network resources with this `mnc` in their `identifiers` will be read.
     */
    mnc?: string;
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
export declare class ListNetworkListNetworkResponseMeta extends SpeakeasyBase {
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
export declare class ListNetworkListNetworkResponse extends SpeakeasyBase {
    meta?: ListNetworkListNetworkResponseMeta;
    networks?: shared.SupersimV1Network[];
}
export declare class ListNetworkResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listNetworkResponse?: ListNetworkListNetworkResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
