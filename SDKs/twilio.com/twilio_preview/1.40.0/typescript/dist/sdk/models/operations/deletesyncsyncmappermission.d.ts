import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSyncSyncMapPermissionServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteSyncSyncMapPermissionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSyncSyncMapPermissionRequest extends SpeakeasyBase {
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
export declare class DeleteSyncSyncMapPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
