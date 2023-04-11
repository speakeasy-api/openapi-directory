import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Authentication and Authorization Endpoints.
 */
export declare class Oauth {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * The OAuth2 authorization endpoint. Your app redirects a user to this endpoint, allowing them to delegate access to their account.
     *
     * @remarks
     * <h3>Security Advice</h3>
     * * Using the [implicit OAuth authorization flow](https://tools.ietf.org/html/draft-ietf-oauth-security-topics-16#section-2.1.2) (`response_type=token`)  is **not recommended**. It can suffer from access token leakage and access token replay attacks. Use `response_type=code` instead.
     * * Use the `state` parameter for [CSRF protection](https://tools.ietf.org/html/draft-ietf-oauth-security-topics-16#section-4.7). Pass a sufficient  random nonce here and verify this nonce again after retrieving the token.
     *
     */
    getConnect(req: operations.GetConnectRequest, security: operations.GetConnectSecurity, config?: AxiosRequestConfig): Promise<operations.GetConnectResponse>;
    /**
     * This endpoint accepts POST requests and is used to provision access tokens once a user has authorized your application.
     */
    postOauth2Token(req: any, security: operations.PostOauth2TokenSecurity, config?: AxiosRequestConfig): Promise<operations.PostOauth2TokenResponse>;
}
