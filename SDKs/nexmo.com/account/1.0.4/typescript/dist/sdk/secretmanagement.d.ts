import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Many of the Vonage APIs are accessed using an API key and secret. It is recommended that you change or "rotate" your secrets from time to time for security purposes. This section provides the API interface for achieving this.
 *
 * @remarks
 * Note: to work on secrets for your secondary accounts, you may authenticate with your primary credentials and supply the secondary API keys as URL parameters to these API endpoints.
 */
export declare class SecretManagement {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create API Secret
     */
    createAPISecret(req: operations.CreateAPISecretRequest, security: operations.CreateAPISecretSecurity, config?: AxiosRequestConfig): Promise<operations.CreateAPISecretResponse>;
    /**
     * Retrieve one API Secret
     */
    retrieveAPISecret(req: operations.RetrieveAPISecretRequest, security: operations.RetrieveAPISecretSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveAPISecretResponse>;
    /**
     * Retrieve API Secrets
     */
    retrieveAPISecrets(req: operations.RetrieveAPISecretsRequest, security: operations.RetrieveAPISecretsSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveAPISecretsResponse>;
    /**
     * Revoke an API Secret
     */
    revokeAPISecret(req: operations.RevokeAPISecretRequest, security: operations.RevokeAPISecretSecurity, config?: AxiosRequestConfig): Promise<operations.RevokeAPISecretResponse>;
}
