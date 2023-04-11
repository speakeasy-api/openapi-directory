import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RegionNetworkEndpointGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Attach a list of network endpoints to the specified network endpoint group.
     */
    computeRegionNetworkEndpointGroupsAttachNetworkEndpoints(req: operations.ComputeRegionNetworkEndpointGroupsAttachNetworkEndpointsRequest, security: operations.ComputeRegionNetworkEndpointGroupsAttachNetworkEndpointsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNetworkEndpointGroupsAttachNetworkEndpointsResponse>;
    /**
     * Deletes the specified network endpoint group. Note that the NEG cannot be deleted if it is configured as a backend of a backend service.
     */
    computeRegionNetworkEndpointGroupsDelete(req: operations.ComputeRegionNetworkEndpointGroupsDeleteRequest, security: operations.ComputeRegionNetworkEndpointGroupsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNetworkEndpointGroupsDeleteResponse>;
    /**
     * Detach the network endpoint from the specified network endpoint group.
     */
    computeRegionNetworkEndpointGroupsDetachNetworkEndpoints(req: operations.ComputeRegionNetworkEndpointGroupsDetachNetworkEndpointsRequest, security: operations.ComputeRegionNetworkEndpointGroupsDetachNetworkEndpointsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNetworkEndpointGroupsDetachNetworkEndpointsResponse>;
    /**
     * Returns the specified network endpoint group.
     */
    computeRegionNetworkEndpointGroupsGet(req: operations.ComputeRegionNetworkEndpointGroupsGetRequest, security: operations.ComputeRegionNetworkEndpointGroupsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNetworkEndpointGroupsGetResponse>;
    /**
     * Creates a network endpoint group in the specified project using the parameters that are included in the request.
     */
    computeRegionNetworkEndpointGroupsInsert(req: operations.ComputeRegionNetworkEndpointGroupsInsertRequest, security: operations.ComputeRegionNetworkEndpointGroupsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNetworkEndpointGroupsInsertResponse>;
    /**
     * Retrieves the list of regional network endpoint groups available to the specified project in the given region.
     */
    computeRegionNetworkEndpointGroupsList(req: operations.ComputeRegionNetworkEndpointGroupsListRequest, security: operations.ComputeRegionNetworkEndpointGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNetworkEndpointGroupsListResponse>;
    /**
     * Lists the network endpoints in the specified network endpoint group.
     */
    computeRegionNetworkEndpointGroupsListNetworkEndpoints(req: operations.ComputeRegionNetworkEndpointGroupsListNetworkEndpointsRequest, security: operations.ComputeRegionNetworkEndpointGroupsListNetworkEndpointsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionNetworkEndpointGroupsListNetworkEndpointsResponse>;
}
