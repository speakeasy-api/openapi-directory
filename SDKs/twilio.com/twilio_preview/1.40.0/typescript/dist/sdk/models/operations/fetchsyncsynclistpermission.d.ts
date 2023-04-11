import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSyncSyncListPermissionServerList: readonly ["https://preview.twilio.com"];
export declare class FetchSyncSyncListPermissionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSyncSyncListPermissionRequest extends SpeakeasyBase {
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
export declare class FetchSyncSyncListPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewSyncServiceSyncListSyncListPermission?: shared.PreviewSyncServiceSyncListSyncListPermission;
}
