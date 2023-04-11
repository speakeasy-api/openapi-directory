import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Area120tablesTablesRowsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesTablesRowsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesTablesRowsCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesTablesRowsCreateSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesTablesRowsCreateSecurity extends SpeakeasyBase {
    option1?: Area120tablesTablesRowsCreateSecurityOption1;
    option2?: Area120tablesTablesRowsCreateSecurityOption2;
    option3?: Area120tablesTablesRowsCreateSecurityOption3;
    option4?: Area120tablesTablesRowsCreateSecurityOption4;
}
/**
 * Optional. Column key to use for values in the row. Defaults to user entered name.
 */
export declare enum Area120tablesTablesRowsCreateViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    ColumnIdView = "COLUMN_ID_VIEW"
}
export declare class Area120tablesTablesRowsCreateRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    row?: shared.Row;
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
     * Required. The parent table where this row will be created. Format: tables/{table}
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
    /**
     * Optional. Column key to use for values in the row. Defaults to user entered name.
     */
    view?: Area120tablesTablesRowsCreateViewEnum;
}
export declare class Area120tablesTablesRowsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    row?: shared.Row;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
