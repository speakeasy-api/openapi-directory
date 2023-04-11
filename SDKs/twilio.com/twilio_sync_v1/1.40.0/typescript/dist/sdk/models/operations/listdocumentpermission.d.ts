import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListDocumentPermissionServerList: readonly ["https://sync.twilio.com"];
export declare class ListDocumentPermissionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListDocumentPermissionRequest extends SpeakeasyBase {
    /**
     * The SID of the Sync Document with the Document Permission resources to read. Can be the Document resource's `sid` or its `unique_name`.
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
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Document Permission resources to read.
     */
    serviceSid: string;
}
export declare class ListDocumentPermissionListDocumentPermissionResponseMeta extends SpeakeasyBase {
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
export declare class ListDocumentPermissionListDocumentPermissionResponse extends SpeakeasyBase {
    meta?: ListDocumentPermissionListDocumentPermissionResponseMeta;
    permissions?: shared.SyncV1ServiceDocumentDocumentPermission[];
}
export declare class ListDocumentPermissionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listDocumentPermissionResponse?: ListDocumentPermissionListDocumentPermissionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
