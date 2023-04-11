import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Use these endpoints to reset a user's password.
 *
 * @remarks
 *
 */
export declare class PasswordReset {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Check validity of password reset token
     */
    postCheck(req: operations.PostCheckRequestBody, config?: AxiosRequestConfig): Promise<operations.PostCheckResponse>;
    /**
     * Send reset password email
     */
    postReset(req: operations.PostResetRequestBody, config?: AxiosRequestConfig): Promise<operations.PostResetResponse>;
    /**
     * Reset password after asking for a reset (with the token sent by email).
     *
     */
    postSetpassword(req: operations.PostSetpasswordRequestBody, config?: AxiosRequestConfig): Promise<operations.PostSetpasswordResponse>;
}
