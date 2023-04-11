import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Resources that manage authorization tokens.
 */
export declare class Authorization {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generate an OAuth Token
     *
     * @remarks
     * Returns an OAuth access token or a refresh token. You must pass a valid access token in the header of each API call.
     *
     * @see {@link https://metamind.readme.io/docs/generate-an-oauth-access-token} - authentication guid
     */
    generateTokenV2(req: operations.GenerateTokenV2RequestBody, config?: AxiosRequestConfig): Promise<operations.GenerateTokenV2Response>;
    /**
     * Delete a Refresh Token
     */
    revokeRefreshTokenV2(req: operations.RevokeRefreshTokenV2Request, security: operations.RevokeRefreshTokenV2Security, config?: AxiosRequestConfig): Promise<operations.RevokeRefreshTokenV2Response>;
}
