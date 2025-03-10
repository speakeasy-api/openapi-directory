import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ComputeRegionDisksAddResourcePoliciesSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeRegionDisksAddResourcePoliciesSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeRegionDisksAddResourcePoliciesSecurity extends SpeakeasyBase {
    option1?: ComputeRegionDisksAddResourcePoliciesSecurityOption1;
    option2?: ComputeRegionDisksAddResourcePoliciesSecurityOption2;
}
export declare class ComputeRegionDisksAddResourcePoliciesRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    regionDisksAddResourcePoliciesRequest?: shared.RegionDisksAddResourcePoliciesRequest;
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
     * The disk name for this request.
     */
    disk: string;
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
     * The name of the region for this request.
     */
    region: string;
    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported ( 00000000-0000-0000-0000-000000000000).
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
     * Legacy name for parameter that has been superseded by `quotaUser`.
     */
    userIp?: string;
}
export declare class ComputeRegionDisksAddResourcePoliciesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    operation?: shared.Operation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
