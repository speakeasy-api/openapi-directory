import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VmmigrationProjectsLocationsSourcesUtilizationReportsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Optional. The level of details of each report. Defaults to BASIC.
 */
export declare enum VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnum {
    UtilizationReportViewUnspecified = "UTILIZATION_REPORT_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class VmmigrationProjectsLocationsSourcesUtilizationReportsListRequest extends SpeakeasyBase {
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
     * Optional. The filter request.
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
     * Optional. the order by fields for the result.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of reports to return. The service may return fewer than this value. If unspecified, at most 500 reports will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Required. A page token, received from a previous `ListUtilizationReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUtilizationReports` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The Utilization Reports parent.
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
     * Optional. The level of details of each report. Defaults to BASIC.
     */
    view?: VmmigrationProjectsLocationsSourcesUtilizationReportsListViewEnum;
}
export declare class VmmigrationProjectsLocationsSourcesUtilizationReportsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listUtilizationReportsResponse?: shared.ListUtilizationReportsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
