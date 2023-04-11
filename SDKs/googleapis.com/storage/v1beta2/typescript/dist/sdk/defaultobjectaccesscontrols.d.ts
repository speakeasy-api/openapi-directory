import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DefaultObjectAccessControls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
     */
    storageDefaultObjectAccessControlsDelete(req: operations.StorageDefaultObjectAccessControlsDeleteRequest, security: operations.StorageDefaultObjectAccessControlsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.StorageDefaultObjectAccessControlsDeleteResponse>;
    /**
     * Returns the default object ACL entry for the specified entity on the specified bucket.
     */
    storageDefaultObjectAccessControlsGet(req: operations.StorageDefaultObjectAccessControlsGetRequest, security: operations.StorageDefaultObjectAccessControlsGetSecurity, config?: AxiosRequestConfig): Promise<operations.StorageDefaultObjectAccessControlsGetResponse>;
    /**
     * Creates a new default object ACL entry on the specified bucket.
     */
    storageDefaultObjectAccessControlsInsert(req: operations.StorageDefaultObjectAccessControlsInsertRequest, security: operations.StorageDefaultObjectAccessControlsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.StorageDefaultObjectAccessControlsInsertResponse>;
    /**
     * Retrieves default object ACL entries on the specified bucket.
     */
    storageDefaultObjectAccessControlsList(req: operations.StorageDefaultObjectAccessControlsListRequest, security: operations.StorageDefaultObjectAccessControlsListSecurity, config?: AxiosRequestConfig): Promise<operations.StorageDefaultObjectAccessControlsListResponse>;
    /**
     * Updates a default object ACL entry on the specified bucket. This method supports patch semantics.
     */
    storageDefaultObjectAccessControlsPatch(req: operations.StorageDefaultObjectAccessControlsPatchRequest, security: operations.StorageDefaultObjectAccessControlsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.StorageDefaultObjectAccessControlsPatchResponse>;
    /**
     * Updates a default object ACL entry on the specified bucket.
     */
    storageDefaultObjectAccessControlsUpdate(req: operations.StorageDefaultObjectAccessControlsUpdateRequest, security: operations.StorageDefaultObjectAccessControlsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.StorageDefaultObjectAccessControlsUpdateResponse>;
}
