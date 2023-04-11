import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.
     */
    osloginUsersGetLoginProfile(req: operations.OsloginUsersGetLoginProfileRequest, security: operations.OsloginUsersGetLoginProfileSecurity, config?: AxiosRequestConfig): Promise<operations.OsloginUsersGetLoginProfileResponse>;
    /**
     * Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.
     */
    osloginUsersImportSshPublicKey(req: operations.OsloginUsersImportSshPublicKeyRequest, security: operations.OsloginUsersImportSshPublicKeySecurity, config?: AxiosRequestConfig): Promise<operations.OsloginUsersImportSshPublicKeyResponse>;
    /**
     * Create an SSH public key
     */
    osloginUsersSshPublicKeysCreate(req: operations.OsloginUsersSshPublicKeysCreateRequest, security: operations.OsloginUsersSshPublicKeysCreateSecurity, config?: AxiosRequestConfig): Promise<operations.OsloginUsersSshPublicKeysCreateResponse>;
    /**
     * Deletes an SSH public key.
     */
    osloginUsersSshPublicKeysDelete(req: operations.OsloginUsersSshPublicKeysDeleteRequest, security: operations.OsloginUsersSshPublicKeysDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.OsloginUsersSshPublicKeysDeleteResponse>;
    /**
     * Retrieves an SSH public key.
     */
    osloginUsersSshPublicKeysGet(req: operations.OsloginUsersSshPublicKeysGetRequest, security: operations.OsloginUsersSshPublicKeysGetSecurity, config?: AxiosRequestConfig): Promise<operations.OsloginUsersSshPublicKeysGetResponse>;
    /**
     * Updates an SSH public key and returns the profile information. This method supports patch semantics.
     */
    osloginUsersSshPublicKeysPatch(req: operations.OsloginUsersSshPublicKeysPatchRequest, security: operations.OsloginUsersSshPublicKeysPatchSecurity, config?: AxiosRequestConfig): Promise<operations.OsloginUsersSshPublicKeysPatchResponse>;
}
