import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSyncMapPermissionServerList: readonly ["https://sync.twilio.com"];
export declare class DeleteSyncMapPermissionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSyncMapPermissionRequest extends SpeakeasyBase {
    /**
     * The application-defined string that uniquely identifies the User's Sync Map Permission resource to delete.
     */
    identity: string;
    /**
     * The SID of the Sync Map with the Sync Map Permission resource to delete. Can be the Sync Map resource's `sid` or its `unique_name`.
     */
    mapSid: string;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map Permission resource to delete. Can be the Service's `sid` value or `default`.
     */
    serviceSid: string;
}
export declare class DeleteSyncMapPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
