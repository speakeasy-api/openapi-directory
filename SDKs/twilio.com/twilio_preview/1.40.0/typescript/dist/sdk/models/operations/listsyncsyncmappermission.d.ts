import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSyncSyncMapPermissionServerList: readonly ["https://preview.twilio.com"];
export declare class ListSyncSyncMapPermissionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSyncSyncMapPermissionRequest extends SpeakeasyBase {
    /**
     * Identifier of the Sync Map. Either a SID or a unique name.
     */
    mapSid: string;
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
export declare class ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta extends SpeakeasyBase {
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
export declare class ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse extends SpeakeasyBase {
    meta?: ListSyncSyncMapPermissionListSyncSyncMapPermissionResponseMeta;
    permissions?: shared.PreviewSyncServiceSyncMapSyncMapPermission[];
}
export declare class ListSyncSyncMapPermissionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSyncSyncMapPermissionResponse?: ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
