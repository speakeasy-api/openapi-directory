import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchDocumentPermissionServerList: readonly ["https://sync.twilio.com"];
export declare class FetchDocumentPermissionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchDocumentPermissionRequest extends SpeakeasyBase {
    /**
     * The SID of the Sync Document with the Document Permission resource to fetch. Can be the Document resource's `sid` or its `unique_name`.
     */
    documentSid: string;
    /**
     * The application-defined string that uniquely identifies the User's Document Permission resource to fetch.
     */
    identity: string;
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Document Permission resource to fetch.
     */
    serviceSid: string;
}
export declare class FetchDocumentPermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    syncV1ServiceDocumentDocumentPermission?: shared.SyncV1ServiceDocumentDocumentPermission;
}
