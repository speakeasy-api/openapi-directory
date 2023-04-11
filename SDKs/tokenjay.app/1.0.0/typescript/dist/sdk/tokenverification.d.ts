import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Ergo Platform Genuine Tokens Verification
 *
 * @see {@link https://github.com/ergoplatform/eips/blob/master/eip-0021.md} - EIP-21
 */
export declare class TokenVerification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Check a token verification
     */
    checkToken(req: operations.CheckTokenRequest, config?: AxiosRequestConfig): Promise<operations.CheckTokenResponse>;
    /**
     * Lists all blocked tokens
     */
    listBlocked(config?: AxiosRequestConfig): Promise<operations.ListBlockedResponse>;
    /**
     * Lists all genuine tokens known
     */
    listGenuine(config?: AxiosRequestConfig): Promise<operations.ListGenuineResponse>;
}
