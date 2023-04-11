import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://accounts.twilio.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * This is the public Twilio REST API.
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Create a new AWS Credential
     */
    createCredentialAws(req: operations.CreateCredentialAwsCreateCredentialAwsRequest, security: operations.CreateCredentialAwsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateCredentialAwsResponse>;
    /**
     * Create a new Public Key Credential
     */
    createCredentialPublicKey(req: operations.CreateCredentialPublicKeyCreateCredentialPublicKeyRequest, security: operations.CreateCredentialPublicKeySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateCredentialPublicKeyResponse>;
    /**
     * Create a new secondary Auth Token
     */
    createSecondaryAuthToken(serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSecondaryAuthTokenResponse>;
    /**
     * Delete a Credential from your account
     */
    deleteCredentialAws(req: operations.DeleteCredentialAwsRequest, security: operations.DeleteCredentialAwsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteCredentialAwsResponse>;
    /**
     * Delete a Credential from your account
     */
    deleteCredentialPublicKey(req: operations.DeleteCredentialPublicKeyRequest, security: operations.DeleteCredentialPublicKeySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteCredentialPublicKeyResponse>;
    /**
     * Delete the secondary Auth Token from your account
     */
    deleteSecondaryAuthToken(serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSecondaryAuthTokenResponse>;
    /**
     * Fetch the AWS credentials specified by the provided Credential Sid
     */
    fetchCredentialAws(req: operations.FetchCredentialAwsRequest, security: operations.FetchCredentialAwsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchCredentialAwsResponse>;
    /**
     * Fetch the public key specified by the provided Credential Sid
     */
    fetchCredentialPublicKey(req: operations.FetchCredentialPublicKeyRequest, security: operations.FetchCredentialPublicKeySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchCredentialPublicKeyResponse>;
    /**
     * Retrieves a collection of AWS Credentials belonging to the account used to make the request
     */
    listCredentialAws(req: operations.ListCredentialAwsRequest, security: operations.ListCredentialAwsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListCredentialAwsResponse>;
    /**
     * Retrieves a collection of Public Key Credentials belonging to the account used to make the request
     */
    listCredentialPublicKey(req: operations.ListCredentialPublicKeyRequest, security: operations.ListCredentialPublicKeySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListCredentialPublicKeyResponse>;
    /**
     * Promote the secondary Auth Token to primary. After promoting the new token, all requests to Twilio using your old primary Auth Token will result in an error.
     */
    updateAuthTokenPromotion(serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateAuthTokenPromotionResponse>;
    /**
     * Modify the properties of a given Account
     */
    updateCredentialAws(req: operations.UpdateCredentialAwsRequest, security: operations.UpdateCredentialAwsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateCredentialAwsResponse>;
    /**
     * Modify the properties of a given Account
     */
    updateCredentialPublicKey(req: operations.UpdateCredentialPublicKeyRequest, security: operations.UpdateCredentialPublicKeySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateCredentialPublicKeyResponse>;
}
