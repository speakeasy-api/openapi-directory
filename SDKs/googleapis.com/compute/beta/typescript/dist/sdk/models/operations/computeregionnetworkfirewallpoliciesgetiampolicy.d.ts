import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ComputeRegionNetworkFirewallPoliciesGetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeRegionNetworkFirewallPoliciesGetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeRegionNetworkFirewallPoliciesGetIamPolicySecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeRegionNetworkFirewallPoliciesGetIamPolicySecurity extends SpeakeasyBase {
    option1?: ComputeRegionNetworkFirewallPoliciesGetIamPolicySecurityOption1;
    option2?: ComputeRegionNetworkFirewallPoliciesGetIamPolicySecurityOption2;
    option3?: ComputeRegionNetworkFirewallPoliciesGetIamPolicySecurityOption3;
}
export declare class ComputeRegionNetworkFirewallPoliciesGetIamPolicyRequest extends SpeakeasyBase {
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
     * Requested IAM Policy version.
     */
    optionsRequestedPolicyVersion?: number;
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
     * Name or id of the resource for this request.
     */
    resource: string;
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
export declare class ComputeRegionNetworkFirewallPoliciesGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    policy?: shared.Policy;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
