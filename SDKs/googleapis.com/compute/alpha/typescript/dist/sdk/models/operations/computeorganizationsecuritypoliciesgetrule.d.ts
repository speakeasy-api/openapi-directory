import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ComputeOrganizationSecurityPoliciesGetRuleSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeOrganizationSecurityPoliciesGetRuleSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeOrganizationSecurityPoliciesGetRuleSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ComputeOrganizationSecurityPoliciesGetRuleSecurity extends SpeakeasyBase {
    option1?: ComputeOrganizationSecurityPoliciesGetRuleSecurityOption1;
    option2?: ComputeOrganizationSecurityPoliciesGetRuleSecurityOption2;
    option3?: ComputeOrganizationSecurityPoliciesGetRuleSecurityOption3;
}
export declare class ComputeOrganizationSecurityPoliciesGetRuleRequest extends SpeakeasyBase {
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
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
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
export declare class ComputeOrganizationSecurityPoliciesGetRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    securityPolicyRule?: shared.SecurityPolicyRule;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
