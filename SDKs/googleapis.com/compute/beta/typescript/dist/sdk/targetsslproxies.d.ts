import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TargetSslProxies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified TargetSslProxy resource.
     */
    computeTargetSslProxiesDelete(req: operations.ComputeTargetSslProxiesDeleteRequest, security: operations.ComputeTargetSslProxiesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetSslProxiesDeleteResponse>;
    /**
     * Returns the specified TargetSslProxy resource.
     */
    computeTargetSslProxiesGet(req: operations.ComputeTargetSslProxiesGetRequest, security: operations.ComputeTargetSslProxiesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetSslProxiesGetResponse>;
    /**
     * Creates a TargetSslProxy resource in the specified project using the data included in the request.
     */
    computeTargetSslProxiesInsert(req: operations.ComputeTargetSslProxiesInsertRequest, security: operations.ComputeTargetSslProxiesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetSslProxiesInsertResponse>;
    /**
     * Retrieves the list of TargetSslProxy resources available to the specified project.
     */
    computeTargetSslProxiesList(req: operations.ComputeTargetSslProxiesListRequest, security: operations.ComputeTargetSslProxiesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetSslProxiesListResponse>;
    /**
     * Changes the BackendService for TargetSslProxy.
     */
    computeTargetSslProxiesSetBackendService(req: operations.ComputeTargetSslProxiesSetBackendServiceRequest, security: operations.ComputeTargetSslProxiesSetBackendServiceSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetSslProxiesSetBackendServiceResponse>;
    /**
     * Changes the Certificate Map for TargetSslProxy.
     */
    computeTargetSslProxiesSetCertificateMap(req: operations.ComputeTargetSslProxiesSetCertificateMapRequest, security: operations.ComputeTargetSslProxiesSetCertificateMapSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetSslProxiesSetCertificateMapResponse>;
    /**
     * Changes the ProxyHeaderType for TargetSslProxy.
     */
    computeTargetSslProxiesSetProxyHeader(req: operations.ComputeTargetSslProxiesSetProxyHeaderRequest, security: operations.ComputeTargetSslProxiesSetProxyHeaderSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetSslProxiesSetProxyHeaderResponse>;
    /**
     * Changes SslCertificates for TargetSslProxy.
     */
    computeTargetSslProxiesSetSslCertificates(req: operations.ComputeTargetSslProxiesSetSslCertificatesRequest, security: operations.ComputeTargetSslProxiesSetSslCertificatesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetSslProxiesSetSslCertificatesResponse>;
    /**
     * Sets the SSL policy for TargetSslProxy. The SSL policy specifies the server-side support for SSL features. This affects connections between clients and the SSL proxy load balancer. They do not affect the connection between the load balancer and the backends.
     */
    computeTargetSslProxiesSetSslPolicy(req: operations.ComputeTargetSslProxiesSetSslPolicyRequest, security: operations.ComputeTargetSslProxiesSetSslPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetSslProxiesSetSslPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeTargetSslProxiesTestIamPermissions(req: operations.ComputeTargetSslProxiesTestIamPermissionsRequest, security: operations.ComputeTargetSslProxiesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetSslProxiesTestIamPermissionsResponse>;
}
