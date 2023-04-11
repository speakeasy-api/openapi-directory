import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AdaptivePolicy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates new adaptive policy ACL
     *
     * @remarks
     * Creates new adaptive policy ACL
     */
    createOrganizationAdaptivePolicyAcl(req: operations.CreateOrganizationAdaptivePolicyAclRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationAdaptivePolicyAclResponse>;
    /**
     * Creates a new adaptive policy group
     *
     * @remarks
     * Creates a new adaptive policy group
     */
    createOrganizationAdaptivePolicyGroup(req: operations.CreateOrganizationAdaptivePolicyGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationAdaptivePolicyGroupResponse>;
    /**
     * Add an Adaptive Policy
     *
     * @remarks
     * Add an Adaptive Policy
     */
    createOrganizationAdaptivePolicyPolicy(req: operations.CreateOrganizationAdaptivePolicyPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationAdaptivePolicyPolicyResponse>;
    /**
     * Deletes the specified adaptive policy ACL
     *
     * @remarks
     * Deletes the specified adaptive policy ACL. Note this adaptive policy ACL will also be removed from policies using it.
     */
    deleteOrganizationAdaptivePolicyAcl(req: operations.DeleteOrganizationAdaptivePolicyAclRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationAdaptivePolicyAclResponse>;
    /**
     * Deletes the specified adaptive policy group and any associated policies and references
     *
     * @remarks
     * Deletes the specified adaptive policy group and any associated policies and references
     */
    deleteOrganizationAdaptivePolicyGroup(req: operations.DeleteOrganizationAdaptivePolicyGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationAdaptivePolicyGroupResponse>;
    /**
     * Delete an Adaptive Policy
     *
     * @remarks
     * Delete an Adaptive Policy
     */
    deleteOrganizationAdaptivePolicyPolicy(req: operations.DeleteOrganizationAdaptivePolicyPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationAdaptivePolicyPolicyResponse>;
    /**
     * Returns the adaptive policy ACL information
     *
     * @remarks
     * Returns the adaptive policy ACL information
     */
    getOrganizationAdaptivePolicyAcl(req: operations.GetOrganizationAdaptivePolicyAclRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdaptivePolicyAclResponse>;
    /**
     * List adaptive policy ACLs in a organization
     *
     * @remarks
     * List adaptive policy ACLs in a organization
     */
    getOrganizationAdaptivePolicyAcls(req: operations.GetOrganizationAdaptivePolicyAclsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdaptivePolicyAclsResponse>;
    /**
     * Returns an adaptive policy group
     *
     * @remarks
     * Returns an adaptive policy group
     */
    getOrganizationAdaptivePolicyGroup(req: operations.GetOrganizationAdaptivePolicyGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdaptivePolicyGroupResponse>;
    /**
     * List adaptive policy groups in a organization
     *
     * @remarks
     * List adaptive policy groups in a organization
     */
    getOrganizationAdaptivePolicyGroups(req: operations.GetOrganizationAdaptivePolicyGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdaptivePolicyGroupsResponse>;
    /**
     * Returns adaptive policy aggregate statistics for an organization
     *
     * @remarks
     * Returns adaptive policy aggregate statistics for an organization
     */
    getOrganizationAdaptivePolicyOverview(req: operations.GetOrganizationAdaptivePolicyOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdaptivePolicyOverviewResponse>;
    /**
     * List adaptive policies in an organization
     *
     * @remarks
     * List adaptive policies in an organization
     */
    getOrganizationAdaptivePolicyPolicies(req: operations.GetOrganizationAdaptivePolicyPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdaptivePolicyPoliciesResponse>;
    /**
     * Return an adaptive policy
     *
     * @remarks
     * Return an adaptive policy
     */
    getOrganizationAdaptivePolicyPolicy(req: operations.GetOrganizationAdaptivePolicyPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdaptivePolicyPolicyResponse>;
    /**
     * Returns global adaptive policy settings in an organization
     *
     * @remarks
     * Returns global adaptive policy settings in an organization
     */
    getOrganizationAdaptivePolicySettings(req: operations.GetOrganizationAdaptivePolicySettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdaptivePolicySettingsResponse>;
    /**
     * Updates an adaptive policy ACL
     *
     * @remarks
     * Updates an adaptive policy ACL
     */
    updateOrganizationAdaptivePolicyAcl(req: operations.UpdateOrganizationAdaptivePolicyAclRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationAdaptivePolicyAclResponse>;
    /**
     * Updates an adaptive policy group
     *
     * @remarks
     * Updates an adaptive policy group. If updating "Infrastructure", only the SGT is allowed. Cannot update "Unknown".
     */
    updateOrganizationAdaptivePolicyGroup(req: operations.UpdateOrganizationAdaptivePolicyGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationAdaptivePolicyGroupResponse>;
    /**
     * Update an Adaptive Policy
     *
     * @remarks
     * Update an Adaptive Policy
     */
    updateOrganizationAdaptivePolicyPolicy(req: operations.UpdateOrganizationAdaptivePolicyPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationAdaptivePolicyPolicyResponse>;
    /**
     * Update global adaptive policy settings
     *
     * @remarks
     * Update global adaptive policy settings
     */
    updateOrganizationAdaptivePolicySettings(req: operations.UpdateOrganizationAdaptivePolicySettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationAdaptivePolicySettingsResponse>;
}
