import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Finishes enrolling a second factor for the user.
     */
    identitytoolkitAccountsMfaEnrollmentFinalize(req: operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest, security: operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse>;
    /**
     * Step one of the MFA enrollment process. In SMS case, this sends an SMS verification code to the user.
     */
    identitytoolkitAccountsMfaEnrollmentStart(req: operations.IdentitytoolkitAccountsMfaEnrollmentStartRequest, security: operations.IdentitytoolkitAccountsMfaEnrollmentStartSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitAccountsMfaEnrollmentStartResponse>;
    /**
     * Revokes one second factor from the enrolled second factors for an account.
     */
    identitytoolkitAccountsMfaEnrollmentWithdraw(req: operations.IdentitytoolkitAccountsMfaEnrollmentWithdrawRequest, security: operations.IdentitytoolkitAccountsMfaEnrollmentWithdrawSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitAccountsMfaEnrollmentWithdrawResponse>;
    /**
     * Verifies the MFA challenge and performs sign-in
     */
    identitytoolkitAccountsMfaSignInFinalize(req: operations.IdentitytoolkitAccountsMfaSignInFinalizeRequest, security: operations.IdentitytoolkitAccountsMfaSignInFinalizeSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitAccountsMfaSignInFinalizeResponse>;
    /**
     * Sends the MFA challenge
     */
    identitytoolkitAccountsMfaSignInStart(req: operations.IdentitytoolkitAccountsMfaSignInStartRequest, security: operations.IdentitytoolkitAccountsMfaSignInStartSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitAccountsMfaSignInStartResponse>;
}
