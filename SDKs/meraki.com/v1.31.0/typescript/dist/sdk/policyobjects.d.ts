import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PolicyObjects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new Policy Object.
     *
     * @remarks
     * Creates a new Policy Object.
     */
    createOrganizationPolicyObject(req: operations.CreateOrganizationPolicyObjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationPolicyObjectResponse>;
    /**
     * Creates a new Policy Object Group.
     *
     * @remarks
     * Creates a new Policy Object Group.
     */
    createOrganizationPolicyObjectsGroup(req: operations.CreateOrganizationPolicyObjectsGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationPolicyObjectsGroupResponse>;
    /**
     * Deletes a Policy Object.
     *
     * @remarks
     * Deletes a Policy Object.
     */
    deleteOrganizationPolicyObject(req: operations.DeleteOrganizationPolicyObjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationPolicyObjectResponse>;
    /**
     * Deletes a Policy Object Group.
     *
     * @remarks
     * Deletes a Policy Object Group.
     */
    deleteOrganizationPolicyObjectsGroup(req: operations.DeleteOrganizationPolicyObjectsGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationPolicyObjectsGroupResponse>;
    /**
     * Shows details of a Policy Object.
     *
     * @remarks
     * Shows details of a Policy Object.
     */
    getOrganizationPolicyObject(req: operations.GetOrganizationPolicyObjectRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationPolicyObjectResponse>;
    /**
     * Lists Policy Objects belonging to the organization.
     *
     * @remarks
     * Lists Policy Objects belonging to the organization.
     */
    getOrganizationPolicyObjects(req: operations.GetOrganizationPolicyObjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationPolicyObjectsResponse>;
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
     * Updates a Policy Object.
     *
     * @remarks
     * Updates a Policy Object.
     */
    updateOrganizationPolicyObject(req: operations.UpdateOrganizationPolicyObjectRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationPolicyObjectResponse>;
    /**
     * Updates a Policy Object Group.
     *
     * @remarks
     * Updates a Policy Object Group.
     */
    updateOrganizationPolicyObjectsGroup(req: operations.UpdateOrganizationPolicyObjectsGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationPolicyObjectsGroupResponse>;
}
