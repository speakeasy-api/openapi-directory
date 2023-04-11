import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RegionBackendServices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified regional BackendService resource.
     */
    computeRegionBackendServicesDelete(req: operations.ComputeRegionBackendServicesDeleteRequest, security: operations.ComputeRegionBackendServicesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionBackendServicesDeleteResponse>;
    /**
     * Returns the specified regional BackendService resource.
     */
    computeRegionBackendServicesGet(req: operations.ComputeRegionBackendServicesGetRequest, security: operations.ComputeRegionBackendServicesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionBackendServicesGetResponse>;
    /**
     * Gets the most recent health check results for this regional BackendService.
     */
    computeRegionBackendServicesGetHealth(req: operations.ComputeRegionBackendServicesGetHealthRequest, security: operations.ComputeRegionBackendServicesGetHealthSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionBackendServicesGetHealthResponse>;
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     */
    computeRegionBackendServicesGetIamPolicy(req: operations.ComputeRegionBackendServicesGetIamPolicyRequest, security: operations.ComputeRegionBackendServicesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionBackendServicesGetIamPolicyResponse>;
    /**
     * Creates a regional BackendService resource in the specified project using the data included in the request. For more information, see Backend services overview.
     */
    computeRegionBackendServicesInsert(req: operations.ComputeRegionBackendServicesInsertRequest, security: operations.ComputeRegionBackendServicesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionBackendServicesInsertResponse>;
    /**
     * Retrieves the list of regional BackendService resources available to the specified project in the given region.
     */
    computeRegionBackendServicesList(req: operations.ComputeRegionBackendServicesListRequest, security: operations.ComputeRegionBackendServicesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionBackendServicesListResponse>;
    /**
     * Updates the specified regional BackendService resource with the data included in the request. For more information, see Understanding backend services This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
     */
    computeRegionBackendServicesPatch(req: operations.ComputeRegionBackendServicesPatchRequest, security: operations.ComputeRegionBackendServicesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionBackendServicesPatchResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    computeRegionBackendServicesSetIamPolicy(req: operations.ComputeRegionBackendServicesSetIamPolicyRequest, security: operations.ComputeRegionBackendServicesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionBackendServicesSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeRegionBackendServicesTestIamPermissions(req: operations.ComputeRegionBackendServicesTestIamPermissionsRequest, security: operations.ComputeRegionBackendServicesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionBackendServicesTestIamPermissionsResponse>;
    /**
     * Updates the specified regional BackendService resource with the data included in the request. For more information, see Backend services overview .
     */
    computeRegionBackendServicesUpdate(req: operations.ComputeRegionBackendServicesUpdateRequest, security: operations.ComputeRegionBackendServicesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionBackendServicesUpdateResponse>;
}
