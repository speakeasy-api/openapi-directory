import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Area120tablesTablesRowsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesTablesRowsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesTablesRowsPatchSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesTablesRowsPatchSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesTablesRowsPatchSecurity extends SpeakeasyBase {
    option1?: Area120tablesTablesRowsPatchSecurityOption1;
    option2?: Area120tablesTablesRowsPatchSecurityOption2;
    option3?: Area120tablesTablesRowsPatchSecurityOption3;
    option4?: Area120tablesTablesRowsPatchSecurityOption4;
}
/**
 * Optional. Column key to use for values in the row. Defaults to user entered name.
 */
export declare enum Area120tablesTablesRowsPatchViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    ColumnIdView = "COLUMN_ID_VIEW"
}
export declare class Area120tablesTablesRowsPatchRequest extends SpeakeasyBase {
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
     * The resource name of the row. Row names have the form `tables/{table}/rows/{row}`. The name is ignored when creating a row.
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
     * The list of fields to update.
     */
    updateMask?: string;
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
    view?: Area120tablesTablesRowsPatchViewEnum;
}
export declare class Area120tablesTablesRowsPatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    row?: shared.Row;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
