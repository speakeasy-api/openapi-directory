import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RegionTargetHttpsProxies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified TargetHttpsProxy resource.
     */
    computeRegionTargetHttpsProxiesDelete(req: operations.ComputeRegionTargetHttpsProxiesDeleteRequest, security: operations.ComputeRegionTargetHttpsProxiesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionTargetHttpsProxiesDeleteResponse>;
    /**
     * Returns the specified TargetHttpsProxy resource in the specified region.
     */
    computeRegionTargetHttpsProxiesGet(req: operations.ComputeRegionTargetHttpsProxiesGetRequest, security: operations.ComputeRegionTargetHttpsProxiesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionTargetHttpsProxiesGetResponse>;
    /**
     * Creates a TargetHttpsProxy resource in the specified project and region using the data included in the request.
     */
    computeRegionTargetHttpsProxiesInsert(req: operations.ComputeRegionTargetHttpsProxiesInsertRequest, security: operations.ComputeRegionTargetHttpsProxiesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionTargetHttpsProxiesInsertResponse>;
    /**
     * Retrieves the list of TargetHttpsProxy resources available to the specified project in the specified region.
     */
    computeRegionTargetHttpsProxiesList(req: operations.ComputeRegionTargetHttpsProxiesListRequest, security: operations.ComputeRegionTargetHttpsProxiesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionTargetHttpsProxiesListResponse>;
    /**
     * Patches the specified regional TargetHttpsProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
     */
    computeRegionTargetHttpsProxiesPatch(req: operations.ComputeRegionTargetHttpsProxiesPatchRequest, security: operations.ComputeRegionTargetHttpsProxiesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionTargetHttpsProxiesPatchResponse>;
    /**
     * Replaces SslCertificates for TargetHttpsProxy.
     */
    computeRegionTargetHttpsProxiesSetSslCertificates(req: operations.ComputeRegionTargetHttpsProxiesSetSslCertificatesRequest, security: operations.ComputeRegionTargetHttpsProxiesSetSslCertificatesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionTargetHttpsProxiesSetSslCertificatesResponse>;
    /**
     * Changes the URL map for TargetHttpsProxy.
     */
    computeRegionTargetHttpsProxiesSetUrlMap(req: operations.ComputeRegionTargetHttpsProxiesSetUrlMapRequest, security: operations.ComputeRegionTargetHttpsProxiesSetUrlMapSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionTargetHttpsProxiesSetUrlMapResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeRegionTargetHttpsProxiesTestIamPermissions(req: operations.ComputeRegionTargetHttpsProxiesTestIamPermissionsRequest, security: operations.ComputeRegionTargetHttpsProxiesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionTargetHttpsProxiesTestIamPermissionsResponse>;
}
