import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TargetTcpProxies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves the list of all TargetTcpProxy resources, regional and global, available to the specified project.
     */
    computeTargetTcpProxiesAggregatedList(req: operations.ComputeTargetTcpProxiesAggregatedListRequest, security: operations.ComputeTargetTcpProxiesAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetTcpProxiesAggregatedListResponse>;
    /**
     * Deletes the specified TargetTcpProxy resource.
     */
    computeTargetTcpProxiesDelete(req: operations.ComputeTargetTcpProxiesDeleteRequest, security: operations.ComputeTargetTcpProxiesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetTcpProxiesDeleteResponse>;
    /**
     * Returns the specified TargetTcpProxy resource.
     */
    computeTargetTcpProxiesGet(req: operations.ComputeTargetTcpProxiesGetRequest, security: operations.ComputeTargetTcpProxiesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetTcpProxiesGetResponse>;
    /**
     * Creates a TargetTcpProxy resource in the specified project using the data included in the request.
     */
    computeTargetTcpProxiesInsert(req: operations.ComputeTargetTcpProxiesInsertRequest, security: operations.ComputeTargetTcpProxiesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetTcpProxiesInsertResponse>;
    /**
     * Retrieves the list of TargetTcpProxy resources available to the specified project.
     */
    computeTargetTcpProxiesList(req: operations.ComputeTargetTcpProxiesListRequest, security: operations.ComputeTargetTcpProxiesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetTcpProxiesListResponse>;
    /**
     * Changes the BackendService for TargetTcpProxy.
     */
    computeTargetTcpProxiesSetBackendService(req: operations.ComputeTargetTcpProxiesSetBackendServiceRequest, security: operations.ComputeTargetTcpProxiesSetBackendServiceSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetTcpProxiesSetBackendServiceResponse>;
    /**
     * Changes the ProxyHeaderType for TargetTcpProxy.
     */
    computeTargetTcpProxiesSetProxyHeader(req: operations.ComputeTargetTcpProxiesSetProxyHeaderRequest, security: operations.ComputeTargetTcpProxiesSetProxyHeaderSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetTcpProxiesSetProxyHeaderResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeTargetTcpProxiesTestIamPermissions(req: operations.ComputeTargetTcpProxiesTestIamPermissionsRequest, security: operations.ComputeTargetTcpProxiesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetTcpProxiesTestIamPermissionsResponse>;
}
