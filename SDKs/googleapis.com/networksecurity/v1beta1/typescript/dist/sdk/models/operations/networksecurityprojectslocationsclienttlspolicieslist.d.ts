import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NetworksecurityProjectsLocationsClientTlsPoliciesListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class NetworksecurityProjectsLocationsClientTlsPoliciesListRequest extends SpeakeasyBase {
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
     * Maximum number of ClientTlsPolicies to return per call.
     */
    pageSize?: number;
    /**
     * The value returned by the last `ListClientTlsPoliciesResponse` Indicates that this is a continuation of a prior `ListClientTlsPolicies` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. The project and location from which the ClientTlsPolicies should be listed, specified in the format `projects/* /locations/{location}`.
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
export declare class NetworksecurityProjectsLocationsClientTlsPoliciesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listClientTlsPoliciesResponse?: shared.ListClientTlsPoliciesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
