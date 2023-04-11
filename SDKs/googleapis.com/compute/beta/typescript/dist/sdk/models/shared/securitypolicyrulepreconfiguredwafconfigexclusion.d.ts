import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams } from "./securitypolicyrulepreconfiguredwafconfigexclusionfieldparams";
export declare class SecurityPolicyRulePreconfiguredWafConfigExclusion extends SpeakeasyBase {
    /**
     * A list of request cookie names whose value will be excluded from inspection during preconfigured WAF evaluation.
     */
    requestCookiesToExclude?: SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[];
    /**
     * A list of request header names whose value will be excluded from inspection during preconfigured WAF evaluation.
     */
    requestHeadersToExclude?: SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[];
    /**
     * A list of request query parameter names whose value will be excluded from inspection during preconfigured WAF evaluation. Note that the parameter can be in the query string or in the POST body.
     */
    requestQueryParamsToExclude?: SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[];
    /**
     * A list of request URIs from the request line to be excluded from inspection during preconfigured WAF evaluation. When specifying this field, the query or fragment part should be excluded.
     */
    requestUrisToExclude?: SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[];
    /**
     * A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion. If omitted, it refers to all the rule IDs under the WAF rule set.
     */
    targetRuleIds?: string[];
    /**
     * Target WAF rule set to apply the preconfigured WAF exclusion.
     */
    targetRuleSet?: string;
}
