import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Token operations
 *
 * @see {@link https://netlicensing.io/wiki/token-services} - Token Services
 */
export declare class Token {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create token
     *
     * @remarks
     * Create token by 'tokenType' and additional token parameters
     */
    createToken(req: operations.CreateTokenRequestBody, security: operations.CreateTokenSecurity, config?: AxiosRequestConfig): Promise<operations.CreateTokenResponse>;
    /**
     * Delete token
     *
     * @remarks
     * Delete a token by 'number'
     */
    deleteToken(req: operations.DeleteTokenRequest, security: operations.DeleteTokenSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteTokenResponse>;
    /**
     * Get token
     *
     * @remarks
     * Return a token by 'tokenNumber'
     */
    getToken(req: operations.GetTokenRequest, security: operations.GetTokenSecurity, config?: AxiosRequestConfig): Promise<operations.GetTokenResponse>;
    /**
     * List Tokens
     *
     * @remarks
     * Return a list of all tokens for the current Vendor
     */
    listTokens(config?: AxiosRequestConfig): Promise<operations.ListTokensResponse>;
}
