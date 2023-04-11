import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RegionInstanceGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the specified instance group resource.
     */
    computeRegionInstanceGroupsGet(req: operations.ComputeRegionInstanceGroupsGetRequest, security: operations.ComputeRegionInstanceGroupsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceGroupsGetResponse>;
    /**
     * Retrieves the list of instance group resources contained within the specified region.
     */
    computeRegionInstanceGroupsList(req: operations.ComputeRegionInstanceGroupsListRequest, security: operations.ComputeRegionInstanceGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceGroupsListResponse>;
    /**
     * Lists the instances in the specified instance group and displays information about the named ports. Depending on the specified options, this method can list all instances or only the instances that are running. The orderBy query parameter is not supported.
     */
    computeRegionInstanceGroupsListInstances(req: operations.ComputeRegionInstanceGroupsListInstancesRequest, security: operations.ComputeRegionInstanceGroupsListInstancesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceGroupsListInstancesResponse>;
    /**
     * Sets the named ports for the specified regional instance group.
     */
    computeRegionInstanceGroupsSetNamedPorts(req: operations.ComputeRegionInstanceGroupsSetNamedPortsRequest, security: operations.ComputeRegionInstanceGroupsSetNamedPortsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceGroupsSetNamedPortsResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeRegionInstanceGroupsTestIamPermissions(req: operations.ComputeRegionInstanceGroupsTestIamPermissionsRequest, security: operations.ComputeRegionInstanceGroupsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionInstanceGroupsTestIamPermissionsResponse>;
}
