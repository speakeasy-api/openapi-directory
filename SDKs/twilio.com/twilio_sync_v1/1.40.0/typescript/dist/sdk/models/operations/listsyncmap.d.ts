import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSyncMapServerList: readonly ["https://sync.twilio.com"];
export declare class ListSyncMapSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSyncMapRequest extends SpeakeasyBase {
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
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map resources to read.
     */
    serviceSid: string;
}
export declare class ListSyncMapListSyncMapResponseMeta extends SpeakeasyBase {
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
export declare class ListSyncMapListSyncMapResponse extends SpeakeasyBase {
    maps?: shared.SyncV1ServiceSyncMap[];
    meta?: ListSyncMapListSyncMapResponseMeta;
}
export declare class ListSyncMapResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSyncMapResponse?: ListSyncMapListSyncMapResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
