import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BucketAccessControls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Permanently deletes the ACL entry for the specified entity on the specified bucket.
     */
    storageBucketAccessControlsDelete(req: operations.StorageBucketAccessControlsDeleteRequest, security: operations.StorageBucketAccessControlsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.StorageBucketAccessControlsDeleteResponse>;
    /**
     * Returns the ACL entry for the specified entity on the specified bucket.
     */
    storageBucketAccessControlsGet(req: operations.StorageBucketAccessControlsGetRequest, security: operations.StorageBucketAccessControlsGetSecurity, config?: AxiosRequestConfig): Promise<operations.StorageBucketAccessControlsGetResponse>;
    /**
     * Creates a new ACL entry on the specified bucket.
     */
    storageBucketAccessControlsInsert(req: operations.StorageBucketAccessControlsInsertRequest, security: operations.StorageBucketAccessControlsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.StorageBucketAccessControlsInsertResponse>;
    /**
     * Retrieves ACL entries on the specified bucket.
     */
    storageBucketAccessControlsList(req: operations.StorageBucketAccessControlsListRequest, security: operations.StorageBucketAccessControlsListSecurity, config?: AxiosRequestConfig): Promise<operations.StorageBucketAccessControlsListResponse>;
    /**
     * Patches an ACL entry on the specified bucket.
     */
    storageBucketAccessControlsPatch(req: operations.StorageBucketAccessControlsPatchRequest, security: operations.StorageBucketAccessControlsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.StorageBucketAccessControlsPatchResponse>;
    /**
     * Updates an ACL entry on the specified bucket.
     */
    storageBucketAccessControlsUpdate(req: operations.StorageBucketAccessControlsUpdateRequest, security: operations.StorageBucketAccessControlsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.StorageBucketAccessControlsUpdateResponse>;
}
