import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MigrationcenterProjectsLocationsImportJobsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Optional. The level of details of each import job. Default value is BASIC.
 */
export declare enum MigrationcenterProjectsLocationsImportJobsListViewEnum {
    ImportJobViewUnspecified = "IMPORT_JOB_VIEW_UNSPECIFIED",
    ImportJobViewBasic = "IMPORT_JOB_VIEW_BASIC",
    ImportJobViewFull = "IMPORT_JOB_VIEW_FULL"
}
export declare class MigrationcenterProjectsLocationsImportJobsListRequest extends SpeakeasyBase {
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
     * Filtering results.
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
     * Field to sort by. See https://google.aip.dev/132#ordering for more details.
     */
    orderBy?: string;
    /**
     * Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     */
    pageToken?: string;
    /**
     * Required. Parent value for `ListImportJobsRequest`.
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
     * Optional. The level of details of each import job. Default value is BASIC.
     */
    view?: MigrationcenterProjectsLocationsImportJobsListViewEnum;
}
export declare class MigrationcenterProjectsLocationsImportJobsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listImportJobsResponse?: shared.ListImportJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
