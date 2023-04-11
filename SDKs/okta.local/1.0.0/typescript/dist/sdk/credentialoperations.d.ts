import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CredentialOperations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Change Password
     *
     * @remarks
     * Change Password
     */
    changePassword(req: operations.ChangePasswordRequest, config?: AxiosRequestConfig): Promise<operations.ChangePasswordResponse>;
    /**
     * Change Recovery Question
     *
     * @remarks
     * Change Recovery Question
     */
    changeRecoveryQuestion(req: operations.ChangeRecoveryQuestionRequest, config?: AxiosRequestConfig): Promise<operations.ChangeRecoveryQuestionResponse>;
    /**
     * Forgot Password (One Time Code)
     *
     * @remarks
     * Forgot Password (One Time Code)
     */
    forgotPasswordOneTimeCode(req: operations.ForgotPasswordOneTimeCodeRequest, config?: AxiosRequestConfig): Promise<operations.ForgotPasswordOneTimeCodeResponse>;
    /**
     * Set Recovery Credential
     *
     * @remarks
     * Set Recovery Credential
     */
    setRecoveryCredential(req: operations.SetRecoveryCredentialRequest, config?: AxiosRequestConfig): Promise<operations.SetRecoveryCredentialResponse>;
}
