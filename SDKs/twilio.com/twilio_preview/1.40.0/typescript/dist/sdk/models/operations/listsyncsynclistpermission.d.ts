import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSyncSyncListPermissionServerList: readonly ["https://preview.twilio.com"];
export declare class ListSyncSyncListPermissionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSyncSyncListPermissionRequest extends SpeakeasyBase {
    /**
     * Identifier of the Sync List. Either a SID or a unique name.
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
    serviceSid: string;
}
export declare class ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta extends SpeakeasyBase {
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
export declare class ListSyncSyncListPermissionListSyncSyncListPermissionResponse extends SpeakeasyBase {
    meta?: ListSyncSyncListPermissionListSyncSyncListPermissionResponseMeta;
    permissions?: shared.PreviewSyncServiceSyncListSyncListPermission[];
}
export declare class ListSyncSyncListPermissionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSyncSyncListPermissionResponse?: ListSyncSyncListPermissionListSyncSyncListPermissionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
