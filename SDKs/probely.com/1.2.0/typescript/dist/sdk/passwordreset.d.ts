import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PasswordReset {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postCheck - Check validity of password reset token
    **/
    postCheck(req: operations.PostCheckRequest, config?: AxiosRequestConfig): Promise<operations.PostCheckResponse>;
    /**
     * postReset - Send reset password email
    **/
    postReset(req: operations.PostResetRequest, config?: AxiosRequestConfig): Promise<operations.PostResetResponse>;
    /**
     * postSetpassword - Reset password after asking for a reset (with the token sent by email).
     *
    **/
    postSetpassword(req: operations.PostSetpasswordRequest, config?: AxiosRequestConfig): Promise<operations.PostSetpasswordResponse>;
}
