import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TargetHttpsProxies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves the list of all TargetHttpsProxy resources, regional and global, available to the specified project.
     */
    computeTargetHttpsProxiesAggregatedList(req: operations.ComputeTargetHttpsProxiesAggregatedListRequest, security: operations.ComputeTargetHttpsProxiesAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetHttpsProxiesAggregatedListResponse>;
    /**
     * Deletes the specified TargetHttpsProxy resource.
     */
    computeTargetHttpsProxiesDelete(req: operations.ComputeTargetHttpsProxiesDeleteRequest, security: operations.ComputeTargetHttpsProxiesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetHttpsProxiesDeleteResponse>;
    /**
     * Returns the specified TargetHttpsProxy resource.
     */
    computeTargetHttpsProxiesGet(req: operations.ComputeTargetHttpsProxiesGetRequest, security: operations.ComputeTargetHttpsProxiesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetHttpsProxiesGetResponse>;
    /**
     * Creates a TargetHttpsProxy resource in the specified project using the data included in the request.
     */
    computeTargetHttpsProxiesInsert(req: operations.ComputeTargetHttpsProxiesInsertRequest, security: operations.ComputeTargetHttpsProxiesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetHttpsProxiesInsertResponse>;
    /**
     * Retrieves the list of TargetHttpsProxy resources available to the specified project.
     */
    computeTargetHttpsProxiesList(req: operations.ComputeTargetHttpsProxiesListRequest, security: operations.ComputeTargetHttpsProxiesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetHttpsProxiesListResponse>;
    /**
     * Patches the specified TargetHttpsProxy resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
     */
    computeTargetHttpsProxiesPatch(req: operations.ComputeTargetHttpsProxiesPatchRequest, security: operations.ComputeTargetHttpsProxiesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetHttpsProxiesPatchResponse>;
    /**
     * Changes the Certificate Map for TargetHttpsProxy.
     */
    computeTargetHttpsProxiesSetCertificateMap(req: operations.ComputeTargetHttpsProxiesSetCertificateMapRequest, security: operations.ComputeTargetHttpsProxiesSetCertificateMapSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetHttpsProxiesSetCertificateMapResponse>;
    /**
     * Sets the QUIC override policy for TargetHttpsProxy.
     */
    computeTargetHttpsProxiesSetQuicOverride(req: operations.ComputeTargetHttpsProxiesSetQuicOverrideRequest, security: operations.ComputeTargetHttpsProxiesSetQuicOverrideSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetHttpsProxiesSetQuicOverrideResponse>;
    /**
     * Replaces SslCertificates for TargetHttpsProxy.
     */
    computeTargetHttpsProxiesSetSslCertificates(req: operations.ComputeTargetHttpsProxiesSetSslCertificatesRequest, security: operations.ComputeTargetHttpsProxiesSetSslCertificatesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetHttpsProxiesSetSslCertificatesResponse>;
    /**
     * Sets the SSL policy for TargetHttpsProxy. The SSL policy specifies the server-side support for SSL features. This affects connections between clients and the HTTPS proxy load balancer. They do not affect the connection between the load balancer and the backends.
     */
    computeTargetHttpsProxiesSetSslPolicy(req: operations.ComputeTargetHttpsProxiesSetSslPolicyRequest, security: operations.ComputeTargetHttpsProxiesSetSslPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetHttpsProxiesSetSslPolicyResponse>;
    /**
     * Changes the URL map for TargetHttpsProxy.
     */
    computeTargetHttpsProxiesSetUrlMap(req: operations.ComputeTargetHttpsProxiesSetUrlMapRequest, security: operations.ComputeTargetHttpsProxiesSetUrlMapSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetHttpsProxiesSetUrlMapResponse>;
}
