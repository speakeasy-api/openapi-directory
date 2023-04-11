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
     * Copies an object to a destination in the same location. Optionally overrides metadata.
     */
    storageObjectsCopy(req: operations.StorageObjectsCopyRequest, security: operations.StorageObjectsCopySecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectsCopyResponse>;
    /**
     * Deletes data blobs and associated metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
     */
    storageObjectsDelete(req: operations.StorageObjectsDeleteRequest, security: operations.StorageObjectsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectsDeleteResponse>;
    /**
     * Retrieves objects or their associated metadata.
     */
    storageObjectsGet(req: operations.StorageObjectsGetRequest, security: operations.StorageObjectsGetSecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectsGetResponse>;
    /**
     * Stores new data blobs and associated metadata.
     */
    storageObjectsInsert(req: operations.StorageObjectsInsertRequest, security: operations.StorageObjectsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectsInsertResponse>;
    /**
     * Retrieves a list of objects matching the criteria.
     */
    storageObjectsList(req: operations.StorageObjectsListRequest, security: operations.StorageObjectsListSecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectsListResponse>;
    /**
     * Updates a data blob's associated metadata. This method supports patch semantics.
     */
    storageObjectsPatch(req: operations.StorageObjectsPatchRequest, security: operations.StorageObjectsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectsPatchResponse>;
    /**
     * Updates a data blob's associated metadata.
     */
    storageObjectsUpdate(req: operations.StorageObjectsUpdateRequest, security: operations.StorageObjectsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectsUpdateResponse>;
    /**
     * Watch for changes on all objects in a bucket.
     */
    storageObjectsWatchAll(req: operations.StorageObjectsWatchAllRequest, security: operations.StorageObjectsWatchAllSecurity, config?: AxiosRequestConfig): Promise<operations.StorageObjectsWatchAllResponse>;
}
