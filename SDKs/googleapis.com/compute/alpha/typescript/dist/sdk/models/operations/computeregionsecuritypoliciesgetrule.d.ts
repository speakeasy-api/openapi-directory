import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ComputeRegionSecurityPoliciesGetRuleSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeRegionSecurityPoliciesGetRuleSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeRegionSecurityPoliciesGetRuleSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeRegionSecurityPoliciesGetRuleSecurity extends SpeakeasyBase {
    option1?: ComputeRegionSecurityPoliciesGetRuleSecurityOption1;
    option2?: ComputeRegionSecurityPoliciesGetRuleSecurityOption2;
    option3?: ComputeRegionSecurityPoliciesGetRuleSecurityOption3;
}
export declare class ComputeRegionSecurityPoliciesGetRuleRequest extends SpeakeasyBase {
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
     * The priority of the rule to get from the security policy.
     */
    priority?: number;
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
     * Name of the security policy to which the queried rule belongs.
     */
    securityPolicy: string;
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
export declare class ComputeRegionSecurityPoliciesGetRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    securityPolicyRule?: shared.SecurityPolicyRule;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
