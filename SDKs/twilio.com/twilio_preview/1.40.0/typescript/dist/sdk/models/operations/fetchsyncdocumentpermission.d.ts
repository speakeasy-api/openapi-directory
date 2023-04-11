import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSyncDocumentPermissionServerList: readonly ["https://preview.twilio.com"];
export declare class FetchSyncDocumentPermissionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSyncDocumentPermissionRequest extends SpeakeasyBase {
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
export declare class FetchSyncDocumentPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewSyncServiceDocumentDocumentPermission?: shared.PreviewSyncServiceDocumentDocumentPermission;
}
