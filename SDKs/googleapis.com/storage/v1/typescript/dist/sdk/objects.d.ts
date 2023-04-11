import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Objects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Concatenates a list of existing objects into a new object in the same bucket.
     */
    storageObjectsCompose(req: operations.StorageObjectsComposeRequest, security: operations.StorageObjectsComposeSecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectsComposeResponse>;
    /**
     * Copies a source object to a destination object. Optionally overrides metadata.
     */
    storageObjectsCopy(req: operations.StorageObjectsCopyRequest, security: operations.StorageObjectsCopySecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectsCopyResponse>;
    /**
     * Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
     */
    storageObjectsDelete(req: operations.StorageObjectsDeleteRequest, security: operations.StorageObjectsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectsDeleteResponse>;
    /**
     * Retrieves an object or its metadata.
     */
    storageObjectsGet(req: operations.StorageObjectsGetRequest, security: operations.StorageObjectsGetSecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectsGetResponse>;
    /**
     * Returns an IAM policy for the specified object.
     */
    storageObjectsGetIamPolicy(req: operations.StorageObjectsGetIamPolicyRequest, security: operations.StorageObjectsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectsGetIamPolicyResponse>;
    /**
     * Stores a new object and metadata.
     */
    storageObjectsInsert(req: operations.StorageObjectsInsertRequest, security: operations.StorageObjectsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectsInsertResponse>;
    /**
     * Retrieves a list of objects matching the criteria.
     */
    storageObjectsList(req: operations.StorageObjectsListRequest, security: operations.StorageObjectsListSecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectsListResponse>;
    /**
     * Patches an object's metadata.
     */
    storageObjectsPatch(req: operations.StorageObjectsPatchRequest, security: operations.StorageObjectsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectsPatchResponse>;
    /**
     * Rewrites a source object to a destination object. Optionally overrides metadata.
     */
    storageObjectsRewrite(req: operations.StorageObjectsRewriteRequest, security: operations.StorageObjectsRewriteSecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectsRewriteResponse>;
    /**
     * Updates an IAM policy for the specified object.
     */
    storageObjectsSetIamPolicy(req: operations.StorageObjectsSetIamPolicyRequest, security: operations.StorageObjectsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectsSetIamPolicyResponse>;
    /**
     * Tests a set of permissions on the given object to see which, if any, are held by the caller.
     */
    storageObjectsTestIamPermissions(req: operations.StorageObjectsTestIamPermissionsRequest, security: operations.StorageObjectsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectsTestIamPermissionsResponse>;
    /**
     * Updates an object's metadata.
     */
    storageObjectsUpdate(req: operations.StorageObjectsUpdateRequest, security: operations.StorageObjectsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectsUpdateResponse>;
    /**
     * Watch for changes on all objects in a bucket.
     */
    storageObjectsWatchAll(req: operations.StorageObjectsWatchAllRequest, security: operations.StorageObjectsWatchAllSecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectsWatchAllResponse>;
}
