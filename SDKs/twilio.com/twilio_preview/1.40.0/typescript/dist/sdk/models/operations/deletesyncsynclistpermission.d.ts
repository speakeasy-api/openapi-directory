import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSyncSyncListPermissionServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteSyncSyncListPermissionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSyncSyncListPermissionRequest extends SpeakeasyBase {
    /**
     * Arbitrary string identifier representing a user associated with an FPA token, assigned by the developer.
     */
    identity: string;
    /**
     * Identifier of the Sync List. Either a SID or a unique name.
     */
    listSid: string;
    serviceSid: string;
}
export declare class DeleteSyncSyncListPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
