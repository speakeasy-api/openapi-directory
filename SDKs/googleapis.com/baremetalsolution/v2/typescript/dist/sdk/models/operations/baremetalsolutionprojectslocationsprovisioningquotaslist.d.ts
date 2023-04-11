import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BaremetalsolutionProjectsLocationsProvisioningQuotasListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BaremetalsolutionProjectsLocationsProvisioningQuotasListRequest extends SpeakeasyBase {
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
     * Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default. Notice that page_size field is not supported and won't be respected in the API request for now, will be updated when pagination is supported.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results from the server.
     */
    pageToken?: string;
    /**
     * Required. Parent value for ListProvisioningQuotasRequest.
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
export declare class BaremetalsolutionProjectsLocationsProvisioningQuotasListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listProvisioningQuotasResponse?: shared.ListProvisioningQuotasResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
