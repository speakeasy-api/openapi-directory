import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DataplexProjectsLocationsLakesListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataplexProjectsLocationsLakesListRequest extends SpeakeasyBase {
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
     * Optional. Filter request.
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
     * Optional. Order by fields for the result.
     */
    orderBy?: string;
    /**
     * Optional. Maximum number of Lakes to return. The service may return fewer than this value. If unspecified, at most 10 lakes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous ListLakes call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListLakes must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the lake location, of the form: projects/{project_number}/locations/{location_id} where location_id refers to a GCP region.
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
export declare class DataplexProjectsLocationsLakesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleCloudDataplexV1ListLakesResponse?: shared.GoogleCloudDataplexV1ListLakesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
