import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FirestoreProjectsDatabasesIndexesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirestoreProjectsDatabasesIndexesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirestoreProjectsDatabasesIndexesGetSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesIndexesGetSecurityOption1;
    option2?: FirestoreProjectsDatabasesIndexesGetSecurityOption2;
}
export declare class FirestoreProjectsDatabasesIndexesGetRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
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
     * The name of the index. For example: `projects/{project_id}/databases/{database_id}/indexes/{index_id}`
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
     * Reads the version of the document at the given time. This may not be older than 270 seconds.
     */
    readTime?: string;
    /**
     * Reads the document in a transaction.
     */
    transaction?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class FirestoreProjectsDatabasesIndexesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleFirestoreAdminV1beta1Index?: shared.GoogleFirestoreAdminV1beta1Index;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
