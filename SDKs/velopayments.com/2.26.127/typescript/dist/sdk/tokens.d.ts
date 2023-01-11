import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tokens {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * resendToken - Resend a token
     *
     * <p>Resend the specified token </p>
     * <p>The token to resend must already exist for the user </p>
     * <p>It will be revoked and a new one issued</p>
     *
    **/
    resendToken(req: operations.ResendTokenRequest, config?: AxiosRequestConfig): Promise<operations.ResendTokenResponse>;
}
