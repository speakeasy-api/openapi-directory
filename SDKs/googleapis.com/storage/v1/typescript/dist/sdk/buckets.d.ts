import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Buckets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Permanently deletes an empty bucket.
     */
    storageBucketsDelete(req: operations.StorageBucketsDeleteRequest, security: operations.StorageBucketsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.StorageBucketsDeleteResponse>;
    /**
     * Returns metadata for the specified bucket.
     */
    storageBucketsGet(req: operations.StorageBucketsGetRequest, security: operations.StorageBucketsGetSecurity, config?: AxiosRequestConfig): Promise<operations.StorageBucketsGetResponse>;
    /**
     * Returns an IAM policy for the specified bucket.
     */
    storageBucketsGetIamPolicy(req: operations.StorageBucketsGetIamPolicyRequest, security: operations.StorageBucketsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.StorageBucketsGetIamPolicyResponse>;
    /**
     * Creates a new bucket.
     */
    storageBucketsInsert(req: operations.StorageBucketsInsertRequest, security: operations.StorageBucketsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.StorageBucketsInsertResponse>;
    /**
     * Retrieves a list of buckets for a given project.
     */
    storageBucketsList(req: operations.StorageBucketsListRequest, security: operations.StorageBucketsListSecurity, config?: AxiosRequestConfig): Promise<operations.StorageBucketsListResponse>;
    /**
     * Locks retention policy on a bucket.
     */
    storageBucketsLockRetentionPolicy(req: operations.StorageBucketsLockRetentionPolicyRequest, security: operations.StorageBucketsLockRetentionPolicySecurity, config?: AxiosRequestConfig): Promise<operations.StorageBucketsLockRetentionPolicyResponse>;
    /**
     * Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.
     */
    storageBucketsPatch(req: operations.StorageBucketsPatchRequest, security: operations.StorageBucketsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.StorageBucketsPatchResponse>;
    /**
     * Updates an IAM policy for the specified bucket.
     */
    storageBucketsSetIamPolicy(req: operations.StorageBucketsSetIamPolicyRequest, security: operations.StorageBucketsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.StorageBucketsSetIamPolicyResponse>;
    /**
     * Tests a set of permissions on the given bucket to see which, if any, are held by the caller.
     */
    storageBucketsTestIamPermissions(req: operations.StorageBucketsTestIamPermissionsRequest, security: operations.StorageBucketsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.StorageBucketsTestIamPermissionsResponse>;
    /**
     * Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.
     */
    storageBucketsUpdate(req: operations.StorageBucketsUpdateRequest, security: operations.StorageBucketsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.StorageBucketsUpdateResponse>;
}
