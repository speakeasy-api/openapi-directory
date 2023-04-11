import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DoubleclickbidmanagerQueriesReportsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DoubleclickbidmanagerQueriesReportsListRequest extends SpeakeasyBase {
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
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Name of a field used to order results. The default sorting order is ascending. To specify descending order for a field, append a " desc" suffix. For example "key.reportId desc". Sorting is only supported for the following fields: * `key.reportId`
     */
    orderBy?: string;
    /**
     * Maximum number of results per page. Must be between `1` and `100`. Defaults to `100` if unspecified.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous list call. Provide this to retrieve the subsequent page of reports.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Required. ID of the query with which the reports are associated.
     */
    queryId: string;
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
export declare class DoubleclickbidmanagerQueriesReportsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listReportsResponse?: shared.ListReportsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
