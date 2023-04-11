import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSyncDocumentPermissionServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateSyncDocumentPermissionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest extends SpeakeasyBase {
    /**
     * Boolean flag specifying whether the identity can delete the Sync Document.
     */
    manage: boolean;
    /**
     * Boolean flag specifying whether the identity can read the Sync Document.
     */
    read: boolean;
    /**
     * Boolean flag specifying whether the identity can update the Sync Document.
     */
    write: boolean;
}
export declare class UpdateSyncDocumentPermissionRequest extends SpeakeasyBase {
    /**
     * Identifier of the Sync Document. Either a SID or a unique name.
     */
    documentSid: string;
    /**
     * Arbitrary string identifier representing a human user associated with an FPA token, assigned by the developer.
     */
    identity: string;
    requestBody?: UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest;
    /**
     * The unique SID identifier of the Sync Service Instance.
     */
    serviceSid: string;
}
export declare class UpdateSyncDocumentPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewSyncServiceDocumentDocumentPermission?: shared.PreviewSyncServiceDocumentDocumentPermission;
}
