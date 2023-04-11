import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateDocumentPermissionServerList: readonly ["https://sync.twilio.com"];
export declare class UpdateDocumentPermissionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateDocumentPermissionUpdateDocumentPermissionRequest extends SpeakeasyBase {
    /**
     * Whether the identity can delete the Sync Document. Default value is `false`.
     */
    manage: boolean;
    /**
     * Whether the identity can read the Sync Document. Default value is `false`.
     */
    read: boolean;
    /**
     * Whether the identity can update the Sync Document. Default value is `false`.
     */
    write: boolean;
}
export declare class UpdateDocumentPermissionRequest extends SpeakeasyBase {
    /**
     * The SID of the Sync Document with the Document Permission resource to update. Can be the Document resource's `sid` or its `unique_name`.
     */
    documentSid: string;
    /**
     * The application-defined string that uniquely identifies the User's Document Permission resource to update.
     */
    identity: string;
    requestBody?: UpdateDocumentPermissionUpdateDocumentPermissionRequest;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Document Permission resource to update.
     */
    serviceSid: string;
}
export declare class UpdateDocumentPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    syncV1ServiceDocumentDocumentPermission?: shared.SyncV1ServiceDocumentDocumentPermission;
}
