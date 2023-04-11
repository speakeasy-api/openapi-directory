import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSyncListPermissionServerList: readonly ["https://sync.twilio.com"];
export declare class DeleteSyncListPermissionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSyncListPermissionRequest extends SpeakeasyBase {
    /**
     * The application-defined string that uniquely identifies the User's Sync List Permission resource to delete.
     */
    identity: string;
    /**
     * The SID of the Sync List with the Sync List Permission resource to delete. Can be the Sync List resource's `sid` or its `unique_name`.
     */
    listSid: string;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync List Permission resource to delete.
     */
    serviceSid: string;
}
export declare class DeleteSyncListPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
