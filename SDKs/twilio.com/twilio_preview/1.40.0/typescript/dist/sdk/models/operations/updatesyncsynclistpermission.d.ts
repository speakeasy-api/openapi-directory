import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSyncSyncListPermissionServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateSyncSyncListPermissionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest extends SpeakeasyBase {
    /**
     * Boolean flag specifying whether the identity can delete the Sync List.
     */
    manage: boolean;
    /**
     * Boolean flag specifying whether the identity can read the Sync List.
     */
    read: boolean;
    /**
     * Boolean flag specifying whether the identity can create, update and delete Items of the Sync List.
     */
    write: boolean;
}
export declare class UpdateSyncSyncListPermissionRequest extends SpeakeasyBase {
    /**
     * Arbitrary string identifier representing a human user associated with an FPA token, assigned by the developer.
     */
    identity: string;
    /**
     * Identifier of the Sync List. Either a SID or a unique name.
     */
    listSid: string;
    requestBody?: UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest;
    /**
     * The unique SID identifier of the Sync Service Instance.
     */
    serviceSid: string;
}
export declare class UpdateSyncSyncListPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewSyncServiceSyncListSyncListPermission?: shared.PreviewSyncServiceSyncListSyncListPermission;
}
