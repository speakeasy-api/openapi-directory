import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RegionNetworkFirewallPolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Inserts an association for the specified network firewall policy.
     */
    computeRegionNetworkFirewallPoliciesAddAssociation(req: operations.ComputeRegionNetworkFirewallPoliciesAddAssociationRequest, security: operations.ComputeRegionNetworkFirewallPoliciesAddAssociationSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNetworkFirewallPoliciesAddAssociationResponse>;
    /**
     * Inserts a rule into a network firewall policy.
     */
    computeRegionNetworkFirewallPoliciesAddRule(req: operations.ComputeRegionNetworkFirewallPoliciesAddRuleRequest, security: operations.ComputeRegionNetworkFirewallPoliciesAddRuleSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNetworkFirewallPoliciesAddRuleResponse>;
    /**
     * Copies rules to the specified network firewall policy.
     */
    computeRegionNetworkFirewallPoliciesCloneRules(req: operations.ComputeRegionNetworkFirewallPoliciesCloneRulesRequest, security: operations.ComputeRegionNetworkFirewallPoliciesCloneRulesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNetworkFirewallPoliciesCloneRulesResponse>;
    /**
     * Deletes the specified network firewall policy.
     */
    computeRegionNetworkFirewallPoliciesDelete(req: operations.ComputeRegionNetworkFirewallPoliciesDeleteRequest, security: operations.ComputeRegionNetworkFirewallPoliciesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNetworkFirewallPoliciesDeleteResponse>;
    /**
     * Returns the specified network firewall policy.
     */
    computeRegionNetworkFirewallPoliciesGet(req: operations.ComputeRegionNetworkFirewallPoliciesGetRequest, security: operations.ComputeRegionNetworkFirewallPoliciesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNetworkFirewallPoliciesGetResponse>;
    /**
     * Gets an association with the specified name.
     */
    computeRegionNetworkFirewallPoliciesGetAssociation(req: operations.ComputeRegionNetworkFirewallPoliciesGetAssociationRequest, security: operations.ComputeRegionNetworkFirewallPoliciesGetAssociationSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNetworkFirewallPoliciesGetAssociationResponse>;
    /**
     * Returns the effective firewalls on a given network.
     */
    computeRegionNetworkFirewallPoliciesGetEffectiveFirewalls(req: operations.ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsRequest, security: operations.ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNetworkFirewallPoliciesGetEffectiveFirewallsResponse>;
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     */
    computeRegionNetworkFirewallPoliciesGetIamPolicy(req: operations.ComputeRegionNetworkFirewallPoliciesGetIamPolicyRequest, security: operations.ComputeRegionNetworkFirewallPoliciesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNetworkFirewallPoliciesGetIamPolicyResponse>;
    /**
     * Gets a rule of the specified priority.
     */
    computeRegionNetworkFirewallPoliciesGetRule(req: operations.ComputeRegionNetworkFirewallPoliciesGetRuleRequest, security: operations.ComputeRegionNetworkFirewallPoliciesGetRuleSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNetworkFirewallPoliciesGetRuleResponse>;
    /**
     * Creates a new network firewall policy in the specified project and region.
     */
    computeRegionNetworkFirewallPoliciesInsert(req: operations.ComputeRegionNetworkFirewallPoliciesInsertRequest, security: operations.ComputeRegionNetworkFirewallPoliciesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNetworkFirewallPoliciesInsertResponse>;
    /**
     * Lists all the network firewall policies that have been configured for the specified project in the given region.
     */
    computeRegionNetworkFirewallPoliciesList(req: operations.ComputeRegionNetworkFirewallPoliciesListRequest, security: operations.ComputeRegionNetworkFirewallPoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNetworkFirewallPoliciesListResponse>;
    /**
     * Patches the specified network firewall policy.
     */
    computeRegionNetworkFirewallPoliciesPatch(req: operations.ComputeRegionNetworkFirewallPoliciesPatchRequest, security: operations.ComputeRegionNetworkFirewallPoliciesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNetworkFirewallPoliciesPatchResponse>;
    /**
     * Patches a rule of the specified priority.
     */
    computeRegionNetworkFirewallPoliciesPatchRule(req: operations.ComputeRegionNetworkFirewallPoliciesPatchRuleRequest, security: operations.ComputeRegionNetworkFirewallPoliciesPatchRuleSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNetworkFirewallPoliciesPatchRuleResponse>;
    /**
     * Removes an association for the specified network firewall policy.
     */
    computeRegionNetworkFirewallPoliciesRemoveAssociation(req: operations.ComputeRegionNetworkFirewallPoliciesRemoveAssociationRequest, security: operations.ComputeRegionNetworkFirewallPoliciesRemoveAssociationSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNetworkFirewallPoliciesRemoveAssociationResponse>;
    /**
     * Deletes a rule of the specified priority.
     */
    computeRegionNetworkFirewallPoliciesRemoveRule(req: operations.ComputeRegionNetworkFirewallPoliciesRemoveRuleRequest, security: operations.ComputeRegionNetworkFirewallPoliciesRemoveRuleSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNetworkFirewallPoliciesRemoveRuleResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    computeRegionNetworkFirewallPoliciesSetIamPolicy(req: operations.ComputeRegionNetworkFirewallPoliciesSetIamPolicyRequest, security: operations.ComputeRegionNetworkFirewallPoliciesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNetworkFirewallPoliciesSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeRegionNetworkFirewallPoliciesTestIamPermissions(req: operations.ComputeRegionNetworkFirewallPoliciesTestIamPermissionsRequest, security: operations.ComputeRegionNetworkFirewallPoliciesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNetworkFirewallPoliciesTestIamPermissionsResponse>;
}
