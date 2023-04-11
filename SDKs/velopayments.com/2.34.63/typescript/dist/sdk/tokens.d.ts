import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * <p>Verification tokens allow users to complete authenitcation flows such as user invite, MFA registration and password reset</p>
 *
 * @remarks
 * <p>Tokens have an expiry and are one-time use only</p>
 *
 */
export declare class Tokens {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Resend a token
     *
     * @remarks
     * <p>Resend the specified token </p>
     * <p>The token to resend must already exist for the user </p>
     * <p>It will be revoked and a new one issued</p>
     *
     */
    resendToken(req: operations.ResendTokenRequest, config?: AxiosRequestConfig): Promise<operations.ResendTokenResponse>;
}
