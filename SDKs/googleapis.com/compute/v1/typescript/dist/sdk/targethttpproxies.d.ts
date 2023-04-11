import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TargetHttpProxies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves the list of all TargetHttpProxy resources, regional and global, available to the specified project.
     */
    computeTargetHttpProxiesAggregatedList(req: operations.ComputeTargetHttpProxiesAggregatedListRequest, security: operations.ComputeTargetHttpProxiesAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetHttpProxiesAggregatedListResponse>;
    /**
     * Deletes the specified TargetHttpProxy resource.
     */
    computeTargetHttpProxiesDelete(req: operations.ComputeTargetHttpProxiesDeleteRequest, security: operations.ComputeTargetHttpProxiesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetHttpProxiesDeleteResponse>;
    /**
     * Returns the specified TargetHttpProxy resource.
     */
    computeTargetHttpProxiesGet(req: operations.ComputeTargetHttpProxiesGetRequest, security: operations.ComputeTargetHttpProxiesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetHttpProxiesGetResponse>;
    /**
     * Creates a TargetHttpProxy resource in the specified project using the data included in the request.
     */
    computeTargetHttpProxiesInsert(req: operations.ComputeTargetHttpProxiesInsertRequest, security: operations.ComputeTargetHttpProxiesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetHttpProxiesInsertResponse>;
    /**
     * Retrieves the list of TargetHttpProxy resources available to the specified project.
     */
    computeTargetHttpProxiesList(req: operations.ComputeTargetHttpProxiesListRequest, security: operations.ComputeTargetHttpProxiesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetHttpProxiesListResponse>;
    /**
     * Patches the specified TargetHttpProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
     */
    computeTargetHttpProxiesPatch(req: operations.ComputeTargetHttpProxiesPatchRequest, security: operations.ComputeTargetHttpProxiesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetHttpProxiesPatchResponse>;
    /**
     * Changes the URL map for TargetHttpProxy.
     */
    computeTargetHttpProxiesSetUrlMap(req: operations.ComputeTargetHttpProxiesSetUrlMapRequest, security: operations.ComputeTargetHttpProxiesSetUrlMapSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetHttpProxiesSetUrlMapResponse>;
}
