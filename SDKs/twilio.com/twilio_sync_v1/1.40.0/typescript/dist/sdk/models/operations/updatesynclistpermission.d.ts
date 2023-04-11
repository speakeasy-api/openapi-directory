import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSyncListPermissionServerList: readonly ["https://sync.twilio.com"];
export declare class UpdateSyncListPermissionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSyncListPermissionUpdateSyncListPermissionRequest extends SpeakeasyBase {
    /**
     * Whether the identity can delete the Sync List. Default value is `false`.
     */
    manage: boolean;
    /**
     * Whether the identity can read the Sync List and its Items. Default value is `false`.
     */
    read: boolean;
    /**
     * Whether the identity can create, update, and delete Items in the Sync List. Default value is `false`.
     */
    write: boolean;
}
export declare class UpdateSyncListPermissionRequest extends SpeakeasyBase {
    /**
     * The application-defined string that uniquely identifies the User's Sync List Permission resource to update.
     */
    identity: string;
    /**
     * The SID of the Sync List with the Sync List Permission resource to update. Can be the Sync List resource's `sid` or its `unique_name`.
     */
    listSid: string;
    requestBody?: UpdateSyncListPermissionUpdateSyncListPermissionRequest;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync List Permission resource to update.
     */
    serviceSid: string;
}
export declare class UpdateSyncListPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    syncV1ServiceSyncListSyncListPermission?: shared.SyncV1ServiceSyncListSyncListPermission;
}
