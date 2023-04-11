import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Area120tablesTablesRowsBatchCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesTablesRowsBatchCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesTablesRowsBatchCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesTablesRowsBatchCreateSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesTablesRowsBatchCreateSecurity extends SpeakeasyBase {
    option1?: Area120tablesTablesRowsBatchCreateSecurityOption1;
    option2?: Area120tablesTablesRowsBatchCreateSecurityOption2;
    option3?: Area120tablesTablesRowsBatchCreateSecurityOption3;
    option4?: Area120tablesTablesRowsBatchCreateSecurityOption4;
}
export declare class Area120tablesTablesRowsBatchCreateRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    batchCreateRowsRequest?: shared.BatchCreateRowsRequest;
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
     * Required. The parent table where the rows will be created. Format: tables/{table}
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
export declare class Area120tablesTablesRowsBatchCreateResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    batchCreateRowsResponse?: shared.BatchCreateRowsResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
