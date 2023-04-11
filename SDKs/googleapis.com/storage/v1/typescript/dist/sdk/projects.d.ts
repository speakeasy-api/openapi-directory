import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new HMAC key for the specified service account.
     */
    storageProjectsHmacKeysCreate(req: operations.StorageProjectsHmacKeysCreateRequest, security: operations.StorageProjectsHmacKeysCreateSecurity, config?: AxiosRequestConfig): Promise<operations.StorageProjectsHmacKeysCreateResponse>;
    /**
     * Deletes an HMAC key.
     */
    storageProjectsHmacKeysDelete(req: operations.StorageProjectsHmacKeysDeleteRequest, security: operations.StorageProjectsHmacKeysDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.StorageProjectsHmacKeysDeleteResponse>;
    /**
     * Retrieves an HMAC key's metadata
     */
    storageProjectsHmacKeysGet(req: operations.StorageProjectsHmacKeysGetRequest, security: operations.StorageProjectsHmacKeysGetSecurity, config?: AxiosRequestConfig): Promise<operations.StorageProjectsHmacKeysGetResponse>;
    /**
     * Retrieves a list of HMAC keys matching the criteria.
     */
    storageProjectsHmacKeysList(req: operations.StorageProjectsHmacKeysListRequest, security: operations.StorageProjectsHmacKeysListSecurity, config?: AxiosRequestConfig): Promise<operations.StorageProjectsHmacKeysListResponse>;
    /**
     * Updates the state of an HMAC key. See the HMAC Key resource descriptor for valid states.
     */
    storageProjectsHmacKeysUpdate(req: operations.StorageProjectsHmacKeysUpdateRequest, security: operations.StorageProjectsHmacKeysUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.StorageProjectsHmacKeysUpdateResponse>;
    /**
     * Get the email address of this project's Google Cloud Storage service account.
     */
    storageProjectsServiceAccountGet(req: operations.StorageProjectsServiceAccountGetRequest, security: operations.StorageProjectsServiceAccountGetSecurity, config?: AxiosRequestConfig): Promise<operations.StorageProjectsServiceAccountGetResponse>;
}
