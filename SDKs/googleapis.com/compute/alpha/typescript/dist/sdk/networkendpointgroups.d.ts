import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class NetworkEndpointGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves the list of network endpoint groups and sorts them by zone.
     */
    computeNetworkEndpointGroupsAggregatedList(req: operations.ComputeNetworkEndpointGroupsAggregatedListRequest, security: operations.ComputeNetworkEndpointGroupsAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkEndpointGroupsAggregatedListResponse>;
    /**
     * Attach a list of network endpoints to the specified network endpoint group.
     */
    computeNetworkEndpointGroupsAttachNetworkEndpoints(req: operations.ComputeNetworkEndpointGroupsAttachNetworkEndpointsRequest, security: operations.ComputeNetworkEndpointGroupsAttachNetworkEndpointsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkEndpointGroupsAttachNetworkEndpointsResponse>;
    /**
     * Deletes the specified network endpoint group. The network endpoints in the NEG and the VM instances they belong to are not terminated when the NEG is deleted. Note that the NEG cannot be deleted if there are backend services referencing it.
     */
    computeNetworkEndpointGroupsDelete(req: operations.ComputeNetworkEndpointGroupsDeleteRequest, security: operations.ComputeNetworkEndpointGroupsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkEndpointGroupsDeleteResponse>;
    /**
     * Detach a list of network endpoints from the specified network endpoint group.
     */
    computeNetworkEndpointGroupsDetachNetworkEndpoints(req: operations.ComputeNetworkEndpointGroupsDetachNetworkEndpointsRequest, security: operations.ComputeNetworkEndpointGroupsDetachNetworkEndpointsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkEndpointGroupsDetachNetworkEndpointsResponse>;
    /**
     * Returns the specified network endpoint group.
     */
    computeNetworkEndpointGroupsGet(req: operations.ComputeNetworkEndpointGroupsGetRequest, security: operations.ComputeNetworkEndpointGroupsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkEndpointGroupsGetResponse>;
    /**
     * Creates a network endpoint group in the specified project using the parameters that are included in the request.
     */
    computeNetworkEndpointGroupsInsert(req: operations.ComputeNetworkEndpointGroupsInsertRequest, security: operations.ComputeNetworkEndpointGroupsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkEndpointGroupsInsertResponse>;
    /**
     * Retrieves the list of network endpoint groups that are located in the specified project and zone.
     */
    computeNetworkEndpointGroupsList(req: operations.ComputeNetworkEndpointGroupsListRequest, security: operations.ComputeNetworkEndpointGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkEndpointGroupsListResponse>;
    /**
     * Lists the network endpoints in the specified network endpoint group.
     */
    computeNetworkEndpointGroupsListNetworkEndpoints(req: operations.ComputeNetworkEndpointGroupsListNetworkEndpointsRequest, security: operations.ComputeNetworkEndpointGroupsListNetworkEndpointsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkEndpointGroupsListNetworkEndpointsResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeNetworkEndpointGroupsTestIamPermissions(req: operations.ComputeNetworkEndpointGroupsTestIamPermissionsRequest, security: operations.ComputeNetworkEndpointGroupsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkEndpointGroupsTestIamPermissionsResponse>;
}
