import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FirestoreProjectsDatabasesDocumentsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirestoreProjectsDatabasesDocumentsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirestoreProjectsDatabasesDocumentsPatchSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesDocumentsPatchSecurityOption1;
    option2?: FirestoreProjectsDatabasesDocumentsPatchSecurityOption2;
}
export declare class FirestoreProjectsDatabasesDocumentsPatchRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    document?: shared.Document;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
     */
    currentDocumentExists?: boolean;
    /**
     * When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned.
     */
    currentDocumentUpdateTime?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The list of field paths in the mask. See Document.fields for a field path syntax reference.
     */
    maskFieldPaths?: string[];
    /**
     * The resource name of the document, for example `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     */
    name: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The list of field paths in the mask. See Document.fields for a field path syntax reference.
     */
    updateMaskFieldPaths?: string[];
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class FirestoreProjectsDatabasesDocumentsPatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    document?: shared.Document;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
