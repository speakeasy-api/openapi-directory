import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSyncSyncMapPermissionServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateSyncSyncMapPermissionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest extends SpeakeasyBase {
    /**
     * Boolean flag specifying whether the identity can delete the Sync Map.
     */
    manage: boolean;
    /**
     * Boolean flag specifying whether the identity can read the Sync Map.
     */
    read: boolean;
    /**
     * Boolean flag specifying whether the identity can create, update and delete Items of the Sync Map.
     */
    write: boolean;
}
export declare class UpdateSyncSyncMapPermissionRequest extends SpeakeasyBase {
    /**
     * Arbitrary string identifier representing a human user associated with an FPA token, assigned by the developer.
     */
    identity: string;
    /**
     * Identifier of the Sync Map. Either a SID or a unique name.
     */
    mapSid: string;
    requestBody?: UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest;
    /**
     * The unique SID identifier of the Sync Service Instance.
     */
    serviceSid: string;
}
export declare class UpdateSyncSyncMapPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewSyncServiceSyncMapSyncMapPermission?: shared.PreviewSyncServiceSyncMapSyncMapPermission;
}
