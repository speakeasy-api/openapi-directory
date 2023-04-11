import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DfareportingReportsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * The scope that defines which results are returned.
 */
export declare enum DfareportingReportsListScopeEnum {
    All = "ALL",
    Mine = "MINE"
}
/**
 * The field by which to sort the list.
 */
export declare enum DfareportingReportsListSortFieldEnum {
    Id = "ID",
    LastModifiedTime = "LAST_MODIFIED_TIME",
    Name = "NAME"
}
/**
 * Order of sorted results.
 */
export declare enum DfareportingReportsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingReportsListRequest extends SpeakeasyBase {
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
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The value of the nextToken from the previous result page.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * The Campaign Manager 360 user profile ID.
     */
    profileId: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The scope that defines which results are returned.
     */
    scope?: DfareportingReportsListScopeEnum;
    /**
     * The field by which to sort the list.
     */
    sortField?: DfareportingReportsListSortFieldEnum;
    /**
     * Order of sorted results.
     */
    sortOrder?: DfareportingReportsListSortOrderEnum;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DfareportingReportsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    reportList?: shared.ReportList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
