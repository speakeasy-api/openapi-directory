import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SecurityPolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Inserts a rule into a security policy.
     */
    computeSecurityPoliciesAddRule(req: operations.ComputeSecurityPoliciesAddRuleRequest, security: operations.ComputeSecurityPoliciesAddRuleSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSecurityPoliciesAddRuleResponse>;
    /**
     * Retrieves the list of all SecurityPolicy resources, regional and global, available to the specified project.
     */
    computeSecurityPoliciesAggregatedList(req: operations.ComputeSecurityPoliciesAggregatedListRequest, security: operations.ComputeSecurityPoliciesAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSecurityPoliciesAggregatedListResponse>;
    /**
     * Deletes the specified policy.
     */
    computeSecurityPoliciesDelete(req: operations.ComputeSecurityPoliciesDeleteRequest, security: operations.ComputeSecurityPoliciesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSecurityPoliciesDeleteResponse>;
    /**
     * List all of the ordered rules present in a single specified policy.
     */
    computeSecurityPoliciesGet(req: operations.ComputeSecurityPoliciesGetRequest, security: operations.ComputeSecurityPoliciesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSecurityPoliciesGetResponse>;
    /**
     * Gets a rule at the specified priority.
     */
    computeSecurityPoliciesGetRule(req: operations.ComputeSecurityPoliciesGetRuleRequest, security: operations.ComputeSecurityPoliciesGetRuleSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSecurityPoliciesGetRuleResponse>;
    /**
     * Creates a new policy in the specified project using the data included in the request.
     */
    computeSecurityPoliciesInsert(req: operations.ComputeSecurityPoliciesInsertRequest, security: operations.ComputeSecurityPoliciesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSecurityPoliciesInsertResponse>;
    /**
     * List all the policies that have been configured for the specified project.
     */
    computeSecurityPoliciesList(req: operations.ComputeSecurityPoliciesListRequest, security: operations.ComputeSecurityPoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSecurityPoliciesListResponse>;
    /**
     * Gets the current list of preconfigured Web Application Firewall (WAF) expressions.
     */
    computeSecurityPoliciesListPreconfiguredExpressionSets(req: operations.ComputeSecurityPoliciesListPreconfiguredExpressionSetsRequest, security: operations.ComputeSecurityPoliciesListPreconfiguredExpressionSetsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSecurityPoliciesListPreconfiguredExpressionSetsResponse>;
    /**
     * Patches the specified policy with the data included in the request. To clear fields in the rule, leave the fields empty and specify them in the updateMask. This cannot be used to be update the rules in the policy. Please use the per rule methods like addRule, patchRule, and removeRule instead.
     */
    computeSecurityPoliciesPatch(req: operations.ComputeSecurityPoliciesPatchRequest, security: operations.ComputeSecurityPoliciesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSecurityPoliciesPatchResponse>;
    /**
     * Patches a rule at the specified priority.
     */
    computeSecurityPoliciesPatchRule(req: operations.ComputeSecurityPoliciesPatchRuleRequest, security: operations.ComputeSecurityPoliciesPatchRuleSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSecurityPoliciesPatchRuleResponse>;
    /**
     * Deletes a rule at the specified priority.
     */
    computeSecurityPoliciesRemoveRule(req: operations.ComputeSecurityPoliciesRemoveRuleRequest, security: operations.ComputeSecurityPoliciesRemoveRuleSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSecurityPoliciesRemoveRuleResponse>;
    /**
     * Sets the labels on a security policy. To learn more about labels, read the Labeling Resources documentation.
     */
    computeSecurityPoliciesSetLabels(req: operations.ComputeSecurityPoliciesSetLabelsRequest, security: operations.ComputeSecurityPoliciesSetLabelsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeSecurityPoliciesSetLabelsResponse>;
}
