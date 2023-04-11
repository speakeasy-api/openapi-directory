import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Tokens {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Ephemeral Token
     *
     * @remarks
     * This endpoint returns a token that can be passed to an application for authorized access.  The lifetime of this token is 10 seconds.
     */
    tokensGetEphemeralToken(req: operations.TokensGetEphemeralTokenRequest, config?: AxiosRequestConfig): Promise<operations.TokensGetEphemeralTokenResponse>;
}
