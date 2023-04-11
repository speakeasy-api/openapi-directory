import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSyncDocumentPermissionServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteSyncDocumentPermissionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSyncDocumentPermissionRequest extends SpeakeasyBase {
    /**
     * Identifier of the Sync Document. Either a SID or a unique name.
     */
    documentSid: string;
    /**
     * Arbitrary string identifier representing a user associated with an FPA token, assigned by the developer.
     */
    identity: string;
    serviceSid: string;
}
export declare class DeleteSyncDocumentPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
