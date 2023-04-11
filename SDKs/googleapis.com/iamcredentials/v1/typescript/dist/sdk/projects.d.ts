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
     * Generates an OAuth 2.0 access token for a service account.
     */
    iamcredentialsProjectsServiceAccountsGenerateAccessToken(req: operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenRequest, security: operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenSecurity, config?: AxiosRequestConfig): Promise<operations.IamcredentialsProjectsServiceAccountsGenerateAccessTokenResponse>;
    /**
     * Generates an OpenID Connect ID token for a service account.
     */
    iamcredentialsProjectsServiceAccountsGenerateIdToken(req: operations.IamcredentialsProjectsServiceAccountsGenerateIdTokenRequest, security: operations.IamcredentialsProjectsServiceAccountsGenerateIdTokenSecurity, config?: AxiosRequestConfig): Promise<operations.IamcredentialsProjectsServiceAccountsGenerateIdTokenResponse>;
    /**
     * Signs a blob using a service account's system-managed private key.
     */
    iamcredentialsProjectsServiceAccountsSignBlob(req: operations.IamcredentialsProjectsServiceAccountsSignBlobRequest, security: operations.IamcredentialsProjectsServiceAccountsSignBlobSecurity, config?: AxiosRequestConfig): Promise<operations.IamcredentialsProjectsServiceAccountsSignBlobResponse>;
    /**
     * Signs a JWT using a service account's system-managed private key.
     */
    iamcredentialsProjectsServiceAccountsSignJwt(req: operations.IamcredentialsProjectsServiceAccountsSignJwtRequest, security: operations.IamcredentialsProjectsServiceAccountsSignJwtSecurity, config?: AxiosRequestConfig): Promise<operations.IamcredentialsProjectsServiceAccountsSignJwtResponse>;
}
