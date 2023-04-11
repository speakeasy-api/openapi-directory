import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RegionTargetHttpProxies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified TargetHttpProxy resource.
     */
    computeRegionTargetHttpProxiesDelete(req: operations.ComputeRegionTargetHttpProxiesDeleteRequest, security: operations.ComputeRegionTargetHttpProxiesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionTargetHttpProxiesDeleteResponse>;
    /**
     * Returns the specified TargetHttpProxy resource in the specified region.
     */
    computeRegionTargetHttpProxiesGet(req: operations.ComputeRegionTargetHttpProxiesGetRequest, security: operations.ComputeRegionTargetHttpProxiesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionTargetHttpProxiesGetResponse>;
    /**
     * Creates a TargetHttpProxy resource in the specified project and region using the data included in the request.
     */
    computeRegionTargetHttpProxiesInsert(req: operations.ComputeRegionTargetHttpProxiesInsertRequest, security: operations.ComputeRegionTargetHttpProxiesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionTargetHttpProxiesInsertResponse>;
    /**
     * Retrieves the list of TargetHttpProxy resources available to the specified project in the specified region.
     */
    computeRegionTargetHttpProxiesList(req: operations.ComputeRegionTargetHttpProxiesListRequest, security: operations.ComputeRegionTargetHttpProxiesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionTargetHttpProxiesListResponse>;
    /**
     * Changes the URL map for TargetHttpProxy.
     */
    computeRegionTargetHttpProxiesSetUrlMap(req: operations.ComputeRegionTargetHttpProxiesSetUrlMapRequest, security: operations.ComputeRegionTargetHttpProxiesSetUrlMapSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionTargetHttpProxiesSetUrlMapResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeRegionTargetHttpProxiesTestIamPermissions(req: operations.ComputeRegionTargetHttpProxiesTestIamPermissionsRequest, security: operations.ComputeRegionTargetHttpProxiesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionTargetHttpProxiesTestIamPermissionsResponse>;
}
