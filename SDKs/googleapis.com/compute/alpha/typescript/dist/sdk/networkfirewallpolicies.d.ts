import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class NetworkFirewallPolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Inserts an association for the specified firewall policy.
     */
    computeNetworkFirewallPoliciesAddAssociation(req: operations.ComputeNetworkFirewallPoliciesAddAssociationRequest, security: operations.ComputeNetworkFirewallPoliciesAddAssociationSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkFirewallPoliciesAddAssociationResponse>;
    /**
     * Inserts a rule into a firewall policy.
     */
    computeNetworkFirewallPoliciesAddRule(req: operations.ComputeNetworkFirewallPoliciesAddRuleRequest, security: operations.ComputeNetworkFirewallPoliciesAddRuleSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkFirewallPoliciesAddRuleResponse>;
    /**
     * Copies rules to the specified firewall policy.
     */
    computeNetworkFirewallPoliciesCloneRules(req: operations.ComputeNetworkFirewallPoliciesCloneRulesRequest, security: operations.ComputeNetworkFirewallPoliciesCloneRulesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkFirewallPoliciesCloneRulesResponse>;
    /**
     * Deletes the specified policy.
     */
    computeNetworkFirewallPoliciesDelete(req: operations.ComputeNetworkFirewallPoliciesDeleteRequest, security: operations.ComputeNetworkFirewallPoliciesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkFirewallPoliciesDeleteResponse>;
    /**
     * Returns the specified network firewall policy.
     */
    computeNetworkFirewallPoliciesGet(req: operations.ComputeNetworkFirewallPoliciesGetRequest, security: operations.ComputeNetworkFirewallPoliciesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkFirewallPoliciesGetResponse>;
    /**
     * Gets an association with the specified name.
     */
    computeNetworkFirewallPoliciesGetAssociation(req: operations.ComputeNetworkFirewallPoliciesGetAssociationRequest, security: operations.ComputeNetworkFirewallPoliciesGetAssociationSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkFirewallPoliciesGetAssociationResponse>;
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     */
    computeNetworkFirewallPoliciesGetIamPolicy(req: operations.ComputeNetworkFirewallPoliciesGetIamPolicyRequest, security: operations.ComputeNetworkFirewallPoliciesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkFirewallPoliciesGetIamPolicyResponse>;
    /**
     * Gets a rule of the specified priority.
     */
    computeNetworkFirewallPoliciesGetRule(req: operations.ComputeNetworkFirewallPoliciesGetRuleRequest, security: operations.ComputeNetworkFirewallPoliciesGetRuleSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkFirewallPoliciesGetRuleResponse>;
    /**
     * Creates a new policy in the specified project using the data included in the request.
     */
    computeNetworkFirewallPoliciesInsert(req: operations.ComputeNetworkFirewallPoliciesInsertRequest, security: operations.ComputeNetworkFirewallPoliciesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkFirewallPoliciesInsertResponse>;
    /**
     * Lists all the policies that have been configured for the specified project.
     */
    computeNetworkFirewallPoliciesList(req: operations.ComputeNetworkFirewallPoliciesListRequest, security: operations.ComputeNetworkFirewallPoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkFirewallPoliciesListResponse>;
    /**
     * Patches the specified policy with the data included in the request.
     */
    computeNetworkFirewallPoliciesPatch(req: operations.ComputeNetworkFirewallPoliciesPatchRequest, security: operations.ComputeNetworkFirewallPoliciesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkFirewallPoliciesPatchResponse>;
    /**
     * Patches a rule of the specified priority.
     */
    computeNetworkFirewallPoliciesPatchRule(req: operations.ComputeNetworkFirewallPoliciesPatchRuleRequest, security: operations.ComputeNetworkFirewallPoliciesPatchRuleSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkFirewallPoliciesPatchRuleResponse>;
    /**
     * Removes an association for the specified firewall policy.
     */
    computeNetworkFirewallPoliciesRemoveAssociation(req: operations.ComputeNetworkFirewallPoliciesRemoveAssociationRequest, security: operations.ComputeNetworkFirewallPoliciesRemoveAssociationSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkFirewallPoliciesRemoveAssociationResponse>;
    /**
     * Deletes a rule of the specified priority.
     */
    computeNetworkFirewallPoliciesRemoveRule(req: operations.ComputeNetworkFirewallPoliciesRemoveRuleRequest, security: operations.ComputeNetworkFirewallPoliciesRemoveRuleSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkFirewallPoliciesRemoveRuleResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    computeNetworkFirewallPoliciesSetIamPolicy(req: operations.ComputeNetworkFirewallPoliciesSetIamPolicyRequest, security: operations.ComputeNetworkFirewallPoliciesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkFirewallPoliciesSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeNetworkFirewallPoliciesTestIamPermissions(req: operations.ComputeNetworkFirewallPoliciesTestIamPermissionsRequest, security: operations.ComputeNetworkFirewallPoliciesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkFirewallPoliciesTestIamPermissionsResponse>;
}
