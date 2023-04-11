import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Area120tablesTablesRowsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesTablesRowsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesTablesRowsListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesTablesRowsListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesTablesRowsListSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesTablesRowsListSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class Area120tablesTablesRowsListSecurity extends SpeakeasyBase {
    option1?: Area120tablesTablesRowsListSecurityOption1;
    option2?: Area120tablesTablesRowsListSecurityOption2;
    option3?: Area120tablesTablesRowsListSecurityOption3;
    option4?: Area120tablesTablesRowsListSecurityOption4;
    option5?: Area120tablesTablesRowsListSecurityOption5;
    option6?: Area120tablesTablesRowsListSecurityOption6;
}
/**
 * Optional. Column key to use for values in the row. Defaults to user entered name.
 */
export declare enum Area120tablesTablesRowsListViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    ColumnIdView = "COLUMN_ID_VIEW"
}
export declare class Area120tablesTablesRowsListRequest extends SpeakeasyBase {
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
     * Optional. Filter to only include resources matching the requirements. For more information, see [Filtering list results](https://support.google.com/area120-tables/answer/10503371).
     */
    filter?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Optional. Sorting order for the list of rows on createTime/updateTime.
     */
    orderBy?: string;
    /**
     * The maximum number of rows to return. The service may return fewer than this value. If unspecified, at most 50 rows are returned. The maximum value is 1,000; values above 1,000 are coerced to 1,000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListRows` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRows` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent table. Format: tables/{table}
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
    view?: Area120tablesTablesRowsListViewEnum;
}
export declare class Area120tablesTablesRowsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listRowsResponse?: shared.ListRowsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
