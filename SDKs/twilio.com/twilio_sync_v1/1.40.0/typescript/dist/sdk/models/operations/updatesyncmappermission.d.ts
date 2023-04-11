import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSyncMapPermissionServerList: readonly ["https://sync.twilio.com"];
export declare class UpdateSyncMapPermissionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSyncMapPermissionUpdateSyncMapPermissionRequest extends SpeakeasyBase {
    /**
     * Whether the identity can delete the Sync Map. Default value is `false`.
     */
    manage: boolean;
    /**
     * Whether the identity can read the Sync Map and its Items. Default value is `false`.
     */
    read: boolean;
    /**
     * Whether the identity can create, update, and delete Items in the Sync Map. Default value is `false`.
     */
    write: boolean;
}
export declare class UpdateSyncMapPermissionRequest extends SpeakeasyBase {
    /**
     * The application-defined string that uniquely identifies the User's Sync Map Permission resource to update.
     */
    identity: string;
    /**
     * The SID of the Sync Map with the Sync Map Permission resource to update. Can be the Sync Map resource's `sid` or its `unique_name`.
     */
    mapSid: string;
    requestBody?: UpdateSyncMapPermissionUpdateSyncMapPermissionRequest;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map Permission resource to update. Can be the Service's `sid` value or `default`.
     */
    serviceSid: string;
}
export declare class UpdateSyncMapPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    syncV1ServiceSyncMapSyncMapPermission?: shared.SyncV1ServiceSyncMapSyncMapPermission;
}
