import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSyncSyncListServerList: readonly ["https://preview.twilio.com"];
export declare class ListSyncSyncListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSyncSyncListRequest extends SpeakeasyBase {
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
    serviceSid: string;
}
export declare class ListSyncSyncListListSyncSyncListResponseMeta extends SpeakeasyBase {
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
export declare class ListSyncSyncListListSyncSyncListResponse extends SpeakeasyBase {
    lists?: shared.PreviewSyncServiceSyncList[];
    meta?: ListSyncSyncListListSyncSyncListResponseMeta;
}
export declare class ListSyncSyncListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSyncSyncListResponse?: ListSyncSyncListListSyncSyncListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
