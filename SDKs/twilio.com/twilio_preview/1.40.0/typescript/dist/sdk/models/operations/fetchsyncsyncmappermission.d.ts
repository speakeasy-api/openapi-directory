import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSyncSyncMapPermissionServerList: readonly ["https://preview.twilio.com"];
export declare class FetchSyncSyncMapPermissionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSyncSyncMapPermissionRequest extends SpeakeasyBase {
    /**
     * Arbitrary string identifier representing a user associated with an FPA token, assigned by the developer.
     */
    identity: string;
    /**
     * Identifier of the Sync Map. Either a SID or a unique name.
     */
    mapSid: string;
    serviceSid: string;
}
export declare class FetchSyncSyncMapPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewSyncServiceSyncMapSyncMapPermission?: shared.PreviewSyncServiceSyncMapSyncMapPermission;
}
