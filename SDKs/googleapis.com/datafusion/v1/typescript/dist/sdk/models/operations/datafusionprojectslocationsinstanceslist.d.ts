import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DatafusionProjectsLocationsInstancesListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DatafusionProjectsLocationsInstancesListRequest extends SpeakeasyBase {
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
     * List filter.
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
     * Sort results. Supported values are "name", "name desc", or "" (unsorted).
     */
    orderBy?: string;
    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value to use if there are additional results to retrieve for this list request.
     */
    pageToken?: string;
    /**
     * Required. The project and location for which to retrieve instance information in the format projects/{project}/locations/{location}. If the location is specified as '-' (wildcard), then all regions available to the project are queried, and the results are aggregated.
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
export declare class DatafusionProjectsLocationsInstancesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listInstancesResponse?: shared.ListInstancesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
