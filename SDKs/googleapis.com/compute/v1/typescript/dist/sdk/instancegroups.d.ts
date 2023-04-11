import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class InstanceGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Adds a list of instances to the specified instance group. All of the instances in the instance group must be in the same network/subnetwork. Read Adding instances for more information.
     */
    computeInstanceGroupsAddInstances(req: operations.ComputeInstanceGroupsAddInstancesRequest, security: operations.ComputeInstanceGroupsAddInstancesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupsAddInstancesResponse>;
    /**
     * Retrieves the list of instance groups and sorts them by zone.
     */
    computeInstanceGroupsAggregatedList(req: operations.ComputeInstanceGroupsAggregatedListRequest, security: operations.ComputeInstanceGroupsAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupsAggregatedListResponse>;
    /**
     * Deletes the specified instance group. The instances in the group are not deleted. Note that instance group must not belong to a backend service. Read Deleting an instance group for more information.
     */
    computeInstanceGroupsDelete(req: operations.ComputeInstanceGroupsDeleteRequest, security: operations.ComputeInstanceGroupsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupsDeleteResponse>;
    /**
     * Returns the specified zonal instance group. Get a list of available zonal instance groups by making a list() request. For managed instance groups, use the instanceGroupManagers or regionInstanceGroupManagers methods instead.
     */
    computeInstanceGroupsGet(req: operations.ComputeInstanceGroupsGetRequest, security: operations.ComputeInstanceGroupsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupsGetResponse>;
    /**
     * Creates an instance group in the specified project using the parameters that are included in the request.
     */
    computeInstanceGroupsInsert(req: operations.ComputeInstanceGroupsInsertRequest, security: operations.ComputeInstanceGroupsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupsInsertResponse>;
    /**
     * Retrieves the list of zonal instance group resources contained within the specified zone. For managed instance groups, use the instanceGroupManagers or regionInstanceGroupManagers methods instead.
     */
    computeInstanceGroupsList(req: operations.ComputeInstanceGroupsListRequest, security: operations.ComputeInstanceGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupsListResponse>;
    /**
     * Lists the instances in the specified instance group. The orderBy query parameter is not supported. The filter query parameter is supported, but only for expressions that use `eq` (equal) or `ne` (not equal) operators.
     */
    computeInstanceGroupsListInstances(req: operations.ComputeInstanceGroupsListInstancesRequest, security: operations.ComputeInstanceGroupsListInstancesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupsListInstancesResponse>;
    /**
     * Removes one or more instances from the specified instance group, but does not delete those instances. If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration before the VM instance is removed or deleted.
     */
    computeInstanceGroupsRemoveInstances(req: operations.ComputeInstanceGroupsRemoveInstancesRequest, security: operations.ComputeInstanceGroupsRemoveInstancesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupsRemoveInstancesResponse>;
    /**
     * Sets the named ports for the specified instance group.
     */
    computeInstanceGroupsSetNamedPorts(req: operations.ComputeInstanceGroupsSetNamedPortsRequest, security: operations.ComputeInstanceGroupsSetNamedPortsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInstanceGroupsSetNamedPortsResponse>;
}
