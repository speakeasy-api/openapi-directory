import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Area120tablesTablesRowsBatchDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesTablesRowsBatchDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesTablesRowsBatchDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesTablesRowsBatchDeleteSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesTablesRowsBatchDeleteSecurity extends SpeakeasyBase {
    option1?: Area120tablesTablesRowsBatchDeleteSecurityOption1;
    option2?: Area120tablesTablesRowsBatchDeleteSecurityOption2;
    option3?: Area120tablesTablesRowsBatchDeleteSecurityOption3;
    option4?: Area120tablesTablesRowsBatchDeleteSecurityOption4;
}
export declare class Area120tablesTablesRowsBatchDeleteRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    batchDeleteRowsRequest?: shared.BatchDeleteRowsRequest;
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
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Required. The parent table shared by all rows being deleted. Format: tables/{table}
     */
    parent: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class Area120tablesTablesRowsBatchDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    empty?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
