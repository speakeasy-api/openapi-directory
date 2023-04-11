import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListOriginationUrlServerList: readonly ["https://trunking.twilio.com"];
export declare class ListOriginationUrlSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListOriginationUrlRequest extends SpeakeasyBase {
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
     * The SID of the Trunk from which to read the OriginationUrl.
     */
    trunkSid: string;
}
export declare class ListOriginationUrlListOriginationUrlResponseMeta extends SpeakeasyBase {
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
export declare class ListOriginationUrlListOriginationUrlResponse extends SpeakeasyBase {
    meta?: ListOriginationUrlListOriginationUrlResponseMeta;
    originationUrls?: shared.TrunkingV1TrunkOriginationUrl[];
}
export declare class ListOriginationUrlResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listOriginationUrlResponse?: ListOriginationUrlListOriginationUrlResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
