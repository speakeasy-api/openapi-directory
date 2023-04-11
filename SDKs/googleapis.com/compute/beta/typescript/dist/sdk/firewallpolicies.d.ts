import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FirewallPolicies {
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
    computeFirewallPoliciesAddAssociation(req: operations.ComputeFirewallPoliciesAddAssociationRequest, security: operations.ComputeFirewallPoliciesAddAssociationSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFirewallPoliciesAddAssociationResponse>;
    /**
     * Inserts a rule into a firewall policy.
     */
    computeFirewallPoliciesAddRule(req: operations.ComputeFirewallPoliciesAddRuleRequest, security: operations.ComputeFirewallPoliciesAddRuleSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFirewallPoliciesAddRuleResponse>;
    /**
     * Copies rules to the specified firewall policy.
     */
    computeFirewallPoliciesCloneRules(req: operations.ComputeFirewallPoliciesCloneRulesRequest, security: operations.ComputeFirewallPoliciesCloneRulesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFirewallPoliciesCloneRulesResponse>;
    /**
     * Deletes the specified policy.
     */
    computeFirewallPoliciesDelete(req: operations.ComputeFirewallPoliciesDeleteRequest, security: operations.ComputeFirewallPoliciesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFirewallPoliciesDeleteResponse>;
    /**
     * Returns the specified firewall policy.
     */
    computeFirewallPoliciesGet(req: operations.ComputeFirewallPoliciesGetRequest, security: operations.ComputeFirewallPoliciesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFirewallPoliciesGetResponse>;
    /**
     * Gets an association with the specified name.
     */
    computeFirewallPoliciesGetAssociation(req: operations.ComputeFirewallPoliciesGetAssociationRequest, security: operations.ComputeFirewallPoliciesGetAssociationSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFirewallPoliciesGetAssociationResponse>;
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     */
    computeFirewallPoliciesGetIamPolicy(req: operations.ComputeFirewallPoliciesGetIamPolicyRequest, security: operations.ComputeFirewallPoliciesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFirewallPoliciesGetIamPolicyResponse>;
    /**
     * Gets a rule of the specified priority.
     */
    computeFirewallPoliciesGetRule(req: operations.ComputeFirewallPoliciesGetRuleRequest, security: operations.ComputeFirewallPoliciesGetRuleSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFirewallPoliciesGetRuleResponse>;
    /**
     * Creates a new policy in the specified project using the data included in the request.
     */
    computeFirewallPoliciesInsert(req: operations.ComputeFirewallPoliciesInsertRequest, security: operations.ComputeFirewallPoliciesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFirewallPoliciesInsertResponse>;
    /**
     * Lists all the policies that have been configured for the specified folder or organization.
     */
    computeFirewallPoliciesList(req: operations.ComputeFirewallPoliciesListRequest, security: operations.ComputeFirewallPoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFirewallPoliciesListResponse>;
    /**
     * Lists associations of a specified target, i.e., organization or folder.
     */
    computeFirewallPoliciesListAssociations(req: operations.ComputeFirewallPoliciesListAssociationsRequest, security: operations.ComputeFirewallPoliciesListAssociationsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFirewallPoliciesListAssociationsResponse>;
    /**
     * Moves the specified firewall policy.
     */
    computeFirewallPoliciesMove(req: operations.ComputeFirewallPoliciesMoveRequest, security: operations.ComputeFirewallPoliciesMoveSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFirewallPoliciesMoveResponse>;
    /**
     * Patches the specified policy with the data included in the request.
     */
    computeFirewallPoliciesPatch(req: operations.ComputeFirewallPoliciesPatchRequest, security: operations.ComputeFirewallPoliciesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFirewallPoliciesPatchResponse>;
    /**
     * Patches a rule of the specified priority.
     */
    computeFirewallPoliciesPatchRule(req: operations.ComputeFirewallPoliciesPatchRuleRequest, security: operations.ComputeFirewallPoliciesPatchRuleSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFirewallPoliciesPatchRuleResponse>;
    /**
     * Removes an association for the specified firewall policy.
     */
    computeFirewallPoliciesRemoveAssociation(req: operations.ComputeFirewallPoliciesRemoveAssociationRequest, security: operations.ComputeFirewallPoliciesRemoveAssociationSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFirewallPoliciesRemoveAssociationResponse>;
    /**
     * Deletes a rule of the specified priority.
     */
    computeFirewallPoliciesRemoveRule(req: operations.ComputeFirewallPoliciesRemoveRuleRequest, security: operations.ComputeFirewallPoliciesRemoveRuleSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFirewallPoliciesRemoveRuleResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    computeFirewallPoliciesSetIamPolicy(req: operations.ComputeFirewallPoliciesSetIamPolicyRequest, security: operations.ComputeFirewallPoliciesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFirewallPoliciesSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeFirewallPoliciesTestIamPermissions(req: operations.ComputeFirewallPoliciesTestIamPermissionsRequest, security: operations.ComputeFirewallPoliciesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFirewallPoliciesTestIamPermissionsResponse>;
}
