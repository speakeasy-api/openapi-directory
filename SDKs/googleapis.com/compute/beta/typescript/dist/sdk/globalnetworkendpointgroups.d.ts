import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class GlobalNetworkEndpointGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Attach a network endpoint to the specified network endpoint group.
     */
    computeGlobalNetworkEndpointGroupsAttachNetworkEndpoints(req: operations.ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsRequest, security: operations.ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsResponse>;
    /**
     * Deletes the specified network endpoint group.Note that the NEG cannot be deleted if there are backend services referencing it.
     */
    computeGlobalNetworkEndpointGroupsDelete(req: operations.ComputeGlobalNetworkEndpointGroupsDeleteRequest, security: operations.ComputeGlobalNetworkEndpointGroupsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalNetworkEndpointGroupsDeleteResponse>;
    /**
     * Detach the network endpoint from the specified network endpoint group.
     */
    computeGlobalNetworkEndpointGroupsDetachNetworkEndpoints(req: operations.ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsRequest, security: operations.ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsResponse>;
    /**
     * Returns the specified network endpoint group.
     */
    computeGlobalNetworkEndpointGroupsGet(req: operations.ComputeGlobalNetworkEndpointGroupsGetRequest, security: operations.ComputeGlobalNetworkEndpointGroupsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalNetworkEndpointGroupsGetResponse>;
    /**
     * Creates a network endpoint group in the specified project using the parameters that are included in the request.
     */
    computeGlobalNetworkEndpointGroupsInsert(req: operations.ComputeGlobalNetworkEndpointGroupsInsertRequest, security: operations.ComputeGlobalNetworkEndpointGroupsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalNetworkEndpointGroupsInsertResponse>;
    /**
     * Retrieves the list of network endpoint groups that are located in the specified project.
     */
    computeGlobalNetworkEndpointGroupsList(req: operations.ComputeGlobalNetworkEndpointGroupsListRequest, security: operations.ComputeGlobalNetworkEndpointGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalNetworkEndpointGroupsListResponse>;
    /**
     * Lists the network endpoints in the specified network endpoint group.
     */
    computeGlobalNetworkEndpointGroupsListNetworkEndpoints(req: operations.ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsRequest, security: operations.ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsResponse>;
}
