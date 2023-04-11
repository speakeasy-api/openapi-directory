import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BackendServices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Adds a key for validating requests with signed URLs for this backend service.
     */
    computeBackendServicesAddSignedUrlKey(req: operations.ComputeBackendServicesAddSignedUrlKeyRequest, security: operations.ComputeBackendServicesAddSignedUrlKeySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeBackendServicesAddSignedUrlKeyResponse>;
    /**
     * Retrieves the list of all BackendService resources, regional and global, available to the specified project.
     */
    computeBackendServicesAggregatedList(req: operations.ComputeBackendServicesAggregatedListRequest, security: operations.ComputeBackendServicesAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeBackendServicesAggregatedListResponse>;
    /**
     * Deletes the specified BackendService resource.
     */
    computeBackendServicesDelete(req: operations.ComputeBackendServicesDeleteRequest, security: operations.ComputeBackendServicesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeBackendServicesDeleteResponse>;
    /**
     * Deletes a key for validating requests with signed URLs for this backend service.
     */
    computeBackendServicesDeleteSignedUrlKey(req: operations.ComputeBackendServicesDeleteSignedUrlKeyRequest, security: operations.ComputeBackendServicesDeleteSignedUrlKeySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeBackendServicesDeleteSignedUrlKeyResponse>;
    /**
     * Returns the specified BackendService resource.
     */
    computeBackendServicesGet(req: operations.ComputeBackendServicesGetRequest, security: operations.ComputeBackendServicesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeBackendServicesGetResponse>;
    /**
     * Gets the most recent health check results for this BackendService. Example request body: { "group": "/zones/us-east1-b/instanceGroups/lb-backend-example" }
     */
    computeBackendServicesGetHealth(req: operations.ComputeBackendServicesGetHealthRequest, security: operations.ComputeBackendServicesGetHealthSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeBackendServicesGetHealthResponse>;
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     */
    computeBackendServicesGetIamPolicy(req: operations.ComputeBackendServicesGetIamPolicyRequest, security: operations.ComputeBackendServicesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeBackendServicesGetIamPolicyResponse>;
    /**
     * Creates a BackendService resource in the specified project using the data included in the request. For more information, see Backend services overview .
     */
    computeBackendServicesInsert(req: operations.ComputeBackendServicesInsertRequest, security: operations.ComputeBackendServicesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeBackendServicesInsertResponse>;
    /**
     * Retrieves the list of BackendService resources available to the specified project.
     */
    computeBackendServicesList(req: operations.ComputeBackendServicesListRequest, security: operations.ComputeBackendServicesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeBackendServicesListResponse>;
    /**
     * Patches the specified BackendService resource with the data included in the request. For more information, see Backend services overview. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
     */
    computeBackendServicesPatch(req: operations.ComputeBackendServicesPatchRequest, security: operations.ComputeBackendServicesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeBackendServicesPatchResponse>;
    /**
     * Sets the edge security policy for the specified backend service.
     */
    computeBackendServicesSetEdgeSecurityPolicy(req: operations.ComputeBackendServicesSetEdgeSecurityPolicyRequest, security: operations.ComputeBackendServicesSetEdgeSecurityPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeBackendServicesSetEdgeSecurityPolicyResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    computeBackendServicesSetIamPolicy(req: operations.ComputeBackendServicesSetIamPolicyRequest, security: operations.ComputeBackendServicesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeBackendServicesSetIamPolicyResponse>;
    /**
     * Sets the Google Cloud Armor security policy for the specified backend service. For more information, see Google Cloud Armor Overview
     */
    computeBackendServicesSetSecurityPolicy(req: operations.ComputeBackendServicesSetSecurityPolicyRequest, security: operations.ComputeBackendServicesSetSecurityPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeBackendServicesSetSecurityPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeBackendServicesTestIamPermissions(req: operations.ComputeBackendServicesTestIamPermissionsRequest, security: operations.ComputeBackendServicesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeBackendServicesTestIamPermissionsResponse>;
    /**
     * Updates the specified BackendService resource with the data included in the request. For more information, see Backend services overview.
     */
    computeBackendServicesUpdate(req: operations.ComputeBackendServicesUpdateRequest, security: operations.ComputeBackendServicesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeBackendServicesUpdateResponse>;
}
