import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Login {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postAuthObtain - Authenticate user
     *
     * The received token should be used for authenticated requests by including in the Authorization header as `Authorization: JWT <token>`.
     *
    **/
    postAuthObtain(req: operations.PostAuthObtainRequest, config?: AxiosRequestConfig): Promise<operations.PostAuthObtainResponse>;
    /**
     * postAuthRefresh - Replace token with a new one
    **/
    postAuthRefresh(req: operations.PostAuthRefreshRequest, config?: AxiosRequestConfig): Promise<operations.PostAuthRefreshResponse>;
    /**
     * postAuthRevoke - Revoke a token
    **/
    postAuthRevoke(req: operations.PostAuthRevokeRequest, config?: AxiosRequestConfig): Promise<operations.PostAuthRevokeResponse>;
    /**
     * postAuthVerify - Verify a token
     *
     * Check for the validity of a user token.
     *
    **/
    postAuthVerify(req: operations.PostAuthVerifyRequest, config?: AxiosRequestConfig): Promise<operations.PostAuthVerifyResponse>;
    /**
     * postEnterpriseAuthObtain - Enterprise user authentication
     *
     * The received token should be used for authenticated requests by including in the Authorization header as `Authorization: JWT <token>`.
     *
    **/
    postEnterpriseAuthObtain(req: operations.PostEnterpriseAuthObtainRequest, config?: AxiosRequestConfig): Promise<operations.PostEnterpriseAuthObtainResponse>;
    /**
     * postEnterpriseAuthRefresh - Enterprise token refresh
    **/
    postEnterpriseAuthRefresh(req: operations.PostEnterpriseAuthRefreshRequest, config?: AxiosRequestConfig): Promise<operations.PostEnterpriseAuthRefreshResponse>;
    /**
     * postEnterpriseAuthRevoke - Enterprise token revokation
    **/
    postEnterpriseAuthRevoke(req: operations.PostEnterpriseAuthRevokeRequest, config?: AxiosRequestConfig): Promise<operations.PostEnterpriseAuthRevokeResponse>;
    /**
     * postEnterpriseAuthVerify - Enterprise token verification
     *
     * Check for the validity of a user token.
     *
    **/
    postEnterpriseAuthVerify(req: operations.PostEnterpriseAuthVerifyRequest, config?: AxiosRequestConfig): Promise<operations.PostEnterpriseAuthVerifyResponse>;
}
