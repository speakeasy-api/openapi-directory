import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSyncDocumentPermissionServerList: readonly ["https://preview.twilio.com"];
export declare class ListSyncDocumentPermissionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSyncDocumentPermissionRequest extends SpeakeasyBase {
    /**
     * Identifier of the Sync Document. Either a SID or a unique name.
     */
    documentSid: string;
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
export declare class ListSyncDocumentPermissionListSyncDocumentPermissionResponseMeta extends SpeakeasyBase {
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
export declare class ListSyncDocumentPermissionListSyncDocumentPermissionResponse extends SpeakeasyBase {
    meta?: ListSyncDocumentPermissionListSyncDocumentPermissionResponseMeta;
    permissions?: shared.PreviewSyncServiceDocumentDocumentPermission[];
}
export declare class ListSyncDocumentPermissionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSyncDocumentPermissionResponse?: ListSyncDocumentPermissionListSyncDocumentPermissionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
