import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteDocumentPermissionServerList: readonly ["https://sync.twilio.com"];
export declare class DeleteDocumentPermissionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteDocumentPermissionRequest extends SpeakeasyBase {
    /**
     * The SID of the Sync Document with the Document Permission resource to delete. Can be the Document resource's `sid` or its `unique_name`.
     */
    documentSid: string;
    /**
     * The application-defined string that uniquely identifies the User's Document Permission resource to delete.
     */
    identity: string;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Document Permission resource to delete.
     */
    serviceSid: string;
}
export declare class DeleteDocumentPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
