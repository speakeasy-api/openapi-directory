import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ComputeRegionUrlMapsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeRegionUrlMapsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeRegionUrlMapsDeleteSecurity extends SpeakeasyBase {
    option1?: ComputeRegionUrlMapsDeleteSecurityOption1;
    option2?: ComputeRegionUrlMapsDeleteSecurityOption2;
}
export declare class ComputeRegionUrlMapsDeleteRequest extends SpeakeasyBase {
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
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Project ID for this request.
     */
    project: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Name of the region scoping this request.
     */
    region: string;
    /**
     * begin_interface: MixerMutationRequestBuilder Request ID to support idempotency.
     */
    requestId?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * Name of the UrlMap resource to delete.
     */
    urlMap: string;
    /**
     * Legacy name for parameter that has been superseded by `quotaUser`.
     */
    userIp?: string;
}
export declare class ComputeRegionUrlMapsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    operation?: shared.Operation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
