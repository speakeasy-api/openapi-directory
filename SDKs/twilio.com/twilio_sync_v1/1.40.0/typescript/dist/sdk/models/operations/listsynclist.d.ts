import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSyncListServerList: readonly ["https://sync.twilio.com"];
export declare class ListSyncListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSyncListRequest extends SpeakeasyBase {
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
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync List resources to read.
     */
    serviceSid: string;
}
export declare class ListSyncListListSyncListResponseMeta extends SpeakeasyBase {
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
export declare class ListSyncListListSyncListResponse extends SpeakeasyBase {
    lists?: shared.SyncV1ServiceSyncList[];
    meta?: ListSyncListListSyncListResponseMeta;
}
export declare class ListSyncListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSyncListResponse?: ListSyncListListSyncListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
