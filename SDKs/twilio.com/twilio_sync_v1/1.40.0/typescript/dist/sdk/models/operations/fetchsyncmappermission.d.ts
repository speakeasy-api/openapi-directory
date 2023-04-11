import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSyncMapPermissionServerList: readonly ["https://sync.twilio.com"];
export declare class FetchSyncMapPermissionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSyncMapPermissionRequest extends SpeakeasyBase {
    /**
     * The application-defined string that uniquely identifies the User's Sync Map Permission resource to fetch.
     */
    identity: string;
    /**
     * The SID of the Sync Map with the Sync Map Permission resource to fetch. Can be the Sync Map resource's `sid` or its `unique_name`.
     */
    mapSid: string;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map Permission resource to fetch. Can be the Service's `sid` value or `default`.
     */
    serviceSid: string;
}
export declare class FetchSyncMapPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    syncV1ServiceSyncMapSyncMapPermission?: shared.SyncV1ServiceSyncMapSyncMapPermission;
}
