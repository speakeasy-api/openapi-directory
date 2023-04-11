import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IntegrationsProjectsLocationsSfdcInstancesListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class IntegrationsProjectsLocationsSfdcInstancesListRequest extends SpeakeasyBase {
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
     * Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/v2/list-filters.
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
     * The size of entries in the response. If unspecified, defaults to 100.
     */
    pageSize?: number;
    /**
     * The token returned in the previous response.
     */
    pageToken?: string;
    /**
     * Required. The client, which owns this collection of SfdcInstances.
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
     * The mask which specifies fields that need to be returned in the SfdcInstance's response.
     */
    readMask?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class IntegrationsProjectsLocationsSfdcInstancesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleCloudIntegrationsV1alphaListSfdcInstancesResponse?: shared.GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
