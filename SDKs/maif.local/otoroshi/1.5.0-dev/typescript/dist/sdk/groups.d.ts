import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Everything about Otoroshi service groups
 */
export declare class Groups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all service groups
     *
     * @remarks
     * Get all service groups
     */
    allServiceGroups(config?: AxiosRequestConfig): Promise<operations.AllServiceGroupsResponse>;
    /**
     * Create a new service group
     *
     * @remarks
     * Create a new service group
     */
    createGroup(req: shared.Group, security: operations.CreateGroupSecurity, config?: AxiosRequestConfig): Promise<operations.CreateGroupResponse>;
    /**
     * Delete a service group
     *
     * @remarks
     * Delete a service group
     */
    deleteGroup(req: operations.DeleteGroupRequest, security: operations.DeleteGroupSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteGroupResponse>;
    /**
     * Update a service group with a diff
     *
     * @remarks
     * Update a service group with a diff
     */
    patchGroup(req: operations.PatchGroupRequest, security: operations.PatchGroupSecurity, config?: AxiosRequestConfig): Promise<operations.PatchGroupResponse>;
    /**
     * Get a service group
     *
     * @remarks
     * Get a service group
     */
    serviceGroup(req: operations.ServiceGroupRequest, security: operations.ServiceGroupSecurity, config?: AxiosRequestConfig): Promise<operations.ServiceGroupResponse>;
    /**
     * Update a service group
     *
     * @remarks
     * Update a service group
     */
    updateGroup(req: operations.UpdateGroupRequest, security: operations.UpdateGroupSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateGroupResponse>;
}
