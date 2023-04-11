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
     * Adds a public SSH key to an environment, allowing clients with the corresponding private key to connect to that environment via SSH. If a key with the same content already exists, this will error with ALREADY_EXISTS.
     */
    cloudshellUsersEnvironmentsAddPublicKey(req: operations.CloudshellUsersEnvironmentsAddPublicKeyRequest, security: operations.CloudshellUsersEnvironmentsAddPublicKeySecurity, config?: AxiosRequestConfig): Promise<operations.CloudshellUsersEnvironmentsAddPublicKeyResponse>;
    /**
     * Sends OAuth credentials to a running environment on behalf of a user. When this completes, the environment will be authorized to run various Google Cloud command line tools without requiring the user to manually authenticate.
     */
    cloudshellUsersEnvironmentsAuthorize(req: operations.CloudshellUsersEnvironmentsAuthorizeRequest, security: operations.CloudshellUsersEnvironmentsAuthorizeSecurity, config?: AxiosRequestConfig): Promise<operations.CloudshellUsersEnvironmentsAuthorizeResponse>;
    /**
     * Gets an environment. Returns NOT_FOUND if the environment does not exist.
     */
    cloudshellUsersEnvironmentsGet(req: operations.CloudshellUsersEnvironmentsGetRequest, security: operations.CloudshellUsersEnvironmentsGetSecurity, config?: AxiosRequestConfig): Promise<operations.CloudshellUsersEnvironmentsGetResponse>;
    /**
     * Removes a public SSH key from an environment. Clients will no longer be able to connect to the environment using the corresponding private key. If a key with the same content is not present, this will error with NOT_FOUND.
     */
    cloudshellUsersEnvironmentsRemovePublicKey(req: operations.CloudshellUsersEnvironmentsRemovePublicKeyRequest, security: operations.CloudshellUsersEnvironmentsRemovePublicKeySecurity, config?: AxiosRequestConfig): Promise<operations.CloudshellUsersEnvironmentsRemovePublicKeyResponse>;
    /**
     * Starts an existing environment, allowing clients to connect to it. The returned operation will contain an instance of StartEnvironmentMetadata in its metadata field. Users can wait for the environment to start by polling this operation via GetOperation. Once the environment has finished starting and is ready to accept connections, the operation will contain a StartEnvironmentResponse in its response field.
     */
    cloudshellUsersEnvironmentsStart(req: operations.CloudshellUsersEnvironmentsStartRequest, security: operations.CloudshellUsersEnvironmentsStartSecurity, config?: AxiosRequestConfig): Promise<operations.CloudshellUsersEnvironmentsStartResponse>;
}
