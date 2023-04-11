import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSyncListPermissionServerList: readonly ["https://sync.twilio.com"];
export declare class ListSyncListPermissionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSyncListPermissionRequest extends SpeakeasyBase {
    /**
     * The SID of the Sync List with the Sync List Permission resources to read. Can be the Sync List resource's `sid` or its `unique_name`.
     */
    listSid: string;
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
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync List Permission resources to read.
     */
    serviceSid: string;
}
export declare class ListSyncListPermissionListSyncListPermissionResponseMeta extends SpeakeasyBase {
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
export declare class ListSyncListPermissionListSyncListPermissionResponse extends SpeakeasyBase {
    meta?: ListSyncListPermissionListSyncListPermissionResponseMeta;
    permissions?: shared.SyncV1ServiceSyncListSyncListPermission[];
}
export declare class ListSyncListPermissionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSyncListPermissionResponse?: ListSyncListPermissionListSyncListPermissionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
