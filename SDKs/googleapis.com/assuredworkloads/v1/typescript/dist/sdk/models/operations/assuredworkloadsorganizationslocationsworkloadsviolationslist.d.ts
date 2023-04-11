import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListRequest extends SpeakeasyBase {
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
     * Optional. A custom filter for filtering by the Violations properties.
     */
    filter?: string;
    /**
     * The end of the time window.
     */
    intervalEndTime?: string;
    /**
     * The start of the time window.
     */
    intervalStartTime?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Optional. Page size.
     */
    pageSize?: number;
    /**
     * Optional. Page token returned from previous request.
     */
    pageToken?: string;
    /**
     * Required. The Workload name. Format `organizations/{org_id}/locations/{location}/workloads/{workload}`.
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
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleCloudAssuredworkloadsV1ListViolationsResponse?: shared.GoogleCloudAssuredworkloadsV1ListViolationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
