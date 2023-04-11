import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ObjectAccessControls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Permanently deletes the ACL entry for the specified entity on the specified object.
     */
    storageObjectAccessControlsDelete(req: operations.StorageObjectAccessControlsDeleteRequest, security: operations.StorageObjectAccessControlsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectAccessControlsDeleteResponse>;
    /**
     * Returns the ACL entry for the specified entity on the specified object.
     */
    storageObjectAccessControlsGet(req: operations.StorageObjectAccessControlsGetRequest, security: operations.StorageObjectAccessControlsGetSecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectAccessControlsGetResponse>;
    /**
     * Creates a new ACL entry on the specified object.
     */
    storageObjectAccessControlsInsert(req: operations.StorageObjectAccessControlsInsertRequest, security: operations.StorageObjectAccessControlsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectAccessControlsInsertResponse>;
    /**
     * Retrieves ACL entries on the specified object.
     */
    storageObjectAccessControlsList(req: operations.StorageObjectAccessControlsListRequest, security: operations.StorageObjectAccessControlsListSecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectAccessControlsListResponse>;
    /**
     * Patches an ACL entry on the specified object.
     */
    storageObjectAccessControlsPatch(req: operations.StorageObjectAccessControlsPatchRequest, security: operations.StorageObjectAccessControlsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectAccessControlsPatchResponse>;
    /**
     * Updates an ACL entry on the specified object.
     */
    storageObjectAccessControlsUpdate(req: operations.StorageObjectAccessControlsUpdateRequest, security: operations.StorageObjectAccessControlsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectAccessControlsUpdateResponse>;
}
