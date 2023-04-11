import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Login users and verify token. For login we make use of [JSON web tokens](https://jwt.io/).
 *
 * @remarks
 *
 */
export declare class Login {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Authenticate user
     *
     * @remarks
     * The received token should be used for authenticated requests by including in the Authorization header as `Authorization: JWT <token>`.
     *
     */
    postAuthObtain(req: shared.Login, config?: AxiosRequestConfig): Promise<operations.PostAuthObtainResponse>;
    /**
     * Replace token with a new one
     */
    postAuthRefresh(req: operations.PostAuthRefreshRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAuthRefreshResponse>;
    /**
     * Revoke a token
     */
    postAuthRevoke(req: operations.PostAuthRevokeRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAuthRevokeResponse>;
    /**
     * Verify a token
     *
     * @remarks
     * Check for the validity of a user token.
     *
     */
    postAuthVerify(req: operations.PostAuthVerifyRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAuthVerifyResponse>;
    /**
     * Enterprise user authentication
     *
     * @remarks
     * The received token should be used for authenticated requests by including in the Authorization header as `Authorization: JWT <token>`.
     *
     */
    postEnterpriseAuthObtain(req: shared.Login, config?: AxiosRequestConfig): Promise<operations.PostEnterpriseAuthObtainResponse>;
    /**
     * Enterprise token refresh
     */
    postEnterpriseAuthRefresh(req: operations.PostEnterpriseAuthRefreshRequestBody, config?: AxiosRequestConfig): Promise<operations.PostEnterpriseAuthRefreshResponse>;
    /**
     * Enterprise token revokation
     */
    postEnterpriseAuthRevoke(req: operations.PostEnterpriseAuthRevokeRequestBody, config?: AxiosRequestConfig): Promise<operations.PostEnterpriseAuthRevokeResponse>;
    /**
     * Enterprise token verification
     *
     * @remarks
     * Check for the validity of a user token.
     *
     */
    postEnterpriseAuthVerify(req: operations.PostEnterpriseAuthVerifyRequestBody, config?: AxiosRequestConfig): Promise<operations.PostEnterpriseAuthVerifyResponse>;
}
