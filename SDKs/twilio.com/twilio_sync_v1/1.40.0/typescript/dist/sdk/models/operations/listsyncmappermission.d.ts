import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListSyncMapPermissionServerList: readonly ["https://sync.twilio.com"];
export declare class ListSyncMapPermissionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListSyncMapPermissionRequest extends SpeakeasyBase {
    /**
     * The SID of the Sync Map with the Permission resources to read. Can be the Sync Map resource's `sid` or its `unique_name`.
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
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map Permission resources to read. Can be the Service's `sid` value or `default`.
     */
    serviceSid: string;
}
export declare class ListSyncMapPermissionListSyncMapPermissionResponseMeta extends SpeakeasyBase {
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
export declare class ListSyncMapPermissionListSyncMapPermissionResponse extends SpeakeasyBase {
    meta?: ListSyncMapPermissionListSyncMapPermissionResponseMeta;
    permissions?: shared.SyncV1ServiceSyncMapSyncMapPermission[];
}
export declare class ListSyncMapPermissionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listSyncMapPermissionResponse?: ListSyncMapPermissionListSyncMapPermissionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
