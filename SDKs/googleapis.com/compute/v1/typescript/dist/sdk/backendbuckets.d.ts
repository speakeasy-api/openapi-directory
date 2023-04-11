import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BackendBuckets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Adds a key for validating requests with signed URLs for this backend bucket.
     */
    computeBackendBucketsAddSignedUrlKey(req: operations.ComputeBackendBucketsAddSignedUrlKeyRequest, security: operations.ComputeBackendBucketsAddSignedUrlKeySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeBackendBucketsAddSignedUrlKeyResponse>;
    /**
     * Deletes the specified BackendBucket resource.
     */
    computeBackendBucketsDelete(req: operations.ComputeBackendBucketsDeleteRequest, security: operations.ComputeBackendBucketsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeBackendBucketsDeleteResponse>;
    /**
     * Deletes a key for validating requests with signed URLs for this backend bucket.
     */
    computeBackendBucketsDeleteSignedUrlKey(req: operations.ComputeBackendBucketsDeleteSignedUrlKeyRequest, security: operations.ComputeBackendBucketsDeleteSignedUrlKeySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeBackendBucketsDeleteSignedUrlKeyResponse>;
    /**
     * Returns the specified BackendBucket resource.
     */
    computeBackendBucketsGet(req: operations.ComputeBackendBucketsGetRequest, security: operations.ComputeBackendBucketsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeBackendBucketsGetResponse>;
    /**
     * Creates a BackendBucket resource in the specified project using the data included in the request.
     */
    computeBackendBucketsInsert(req: operations.ComputeBackendBucketsInsertRequest, security: operations.ComputeBackendBucketsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeBackendBucketsInsertResponse>;
    /**
     * Retrieves the list of BackendBucket resources available to the specified project.
     */
    computeBackendBucketsList(req: operations.ComputeBackendBucketsListRequest, security: operations.ComputeBackendBucketsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeBackendBucketsListResponse>;
    /**
     * Updates the specified BackendBucket resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
     */
    computeBackendBucketsPatch(req: operations.ComputeBackendBucketsPatchRequest, security: operations.ComputeBackendBucketsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeBackendBucketsPatchResponse>;
    /**
     * Sets the edge security policy for the specified backend bucket.
     */
    computeBackendBucketsSetEdgeSecurityPolicy(req: operations.ComputeBackendBucketsSetEdgeSecurityPolicyRequest, security: operations.ComputeBackendBucketsSetEdgeSecurityPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeBackendBucketsSetEdgeSecurityPolicyResponse>;
    /**
     * Updates the specified BackendBucket resource with the data included in the request.
     */
    computeBackendBucketsUpdate(req: operations.ComputeBackendBucketsUpdateRequest, security: operations.ComputeBackendBucketsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeBackendBucketsUpdateResponse>;
}
