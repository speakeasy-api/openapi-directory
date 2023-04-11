import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Groups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a Staged Upgrade Group for a network
     *
     * @remarks
     * Create a Staged Upgrade Group for a network
     */
    createNetworkFirmwareUpgradesStagedGroup(req: operations.CreateNetworkFirmwareUpgradesStagedGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkFirmwareUpgradesStagedGroupResponse>;
    /**
     * Creates a new adaptive policy group
     *
     * @remarks
     * Creates a new adaptive policy group
     */
    createOrganizationAdaptivePolicyGroup(req: operations.CreateOrganizationAdaptivePolicyGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationAdaptivePolicyGroupResponse>;
    /**
     * Creates a new Policy Object Group.
     *
     * @remarks
     * Creates a new Policy Object Group.
     */
    createOrganizationPolicyObjectsGroup(req: operations.CreateOrganizationPolicyObjectsGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationPolicyObjectsGroupResponse>;
    /**
     * Delete a Staged Upgrade Group
     *
     * @remarks
     * Delete a Staged Upgrade Group
     */
    deleteNetworkFirmwareUpgradesStagedGroup(req: operations.DeleteNetworkFirmwareUpgradesStagedGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkFirmwareUpgradesStagedGroupResponse>;
    /**
     * Deletes the specified adaptive policy group and any associated policies and references
     *
     * @remarks
     * Deletes the specified adaptive policy group and any associated policies and references
     */
    deleteOrganizationAdaptivePolicyGroup(req: operations.DeleteOrganizationAdaptivePolicyGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationAdaptivePolicyGroupResponse>;
    /**
     * Deletes a Policy Object Group.
     *
     * @remarks
     * Deletes a Policy Object Group.
     */
    deleteOrganizationPolicyObjectsGroup(req: operations.DeleteOrganizationPolicyObjectsGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationPolicyObjectsGroupResponse>;
    /**
     * Get a Staged Upgrade Group from a network
     *
     * @remarks
     * Get a Staged Upgrade Group from a network
     */
    getNetworkFirmwareUpgradesStagedGroup(req: operations.GetNetworkFirmwareUpgradesStagedGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkFirmwareUpgradesStagedGroupResponse>;
    /**
     * List of Staged Upgrade Groups in a network
     *
     * @remarks
     * List of Staged Upgrade Groups in a network
     */
    getNetworkFirmwareUpgradesStagedGroups(req: operations.GetNetworkFirmwareUpgradesStagedGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkFirmwareUpgradesStagedGroupsResponse>;
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
     * Shows details of a Policy Object Group.
     *
     * @remarks
     * Shows details of a Policy Object Group.
     */
    getOrganizationPolicyObjectsGroup(req: operations.GetOrganizationPolicyObjectsGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationPolicyObjectsGroupResponse>;
    /**
     * Lists Policy Object Groups belonging to the organization.
     *
     * @remarks
     * Lists Policy Object Groups belonging to the organization.
     */
    getOrganizationPolicyObjectsGroups(req: operations.GetOrganizationPolicyObjectsGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationPolicyObjectsGroupsResponse>;
    /**
     * Update a Staged Upgrade Group for a network
     *
     * @remarks
     * Update a Staged Upgrade Group for a network
     */
    updateNetworkFirmwareUpgradesStagedGroup(req: operations.UpdateNetworkFirmwareUpgradesStagedGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkFirmwareUpgradesStagedGroupResponse>;
    /**
     * Updates an adaptive policy group
     *
     * @remarks
     * Updates an adaptive policy group. If updating "Infrastructure", only the SGT is allowed. Cannot update "Unknown".
     */
    updateOrganizationAdaptivePolicyGroup(req: operations.UpdateOrganizationAdaptivePolicyGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationAdaptivePolicyGroupResponse>;
    /**
     * Updates a Policy Object Group.
     *
     * @remarks
     * Updates a Policy Object Group.
     */
    updateOrganizationPolicyObjectsGroup(req: operations.UpdateOrganizationPolicyObjectsGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationPolicyObjectsGroupResponse>;
}
