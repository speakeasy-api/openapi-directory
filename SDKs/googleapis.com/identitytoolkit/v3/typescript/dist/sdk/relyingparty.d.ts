import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Relyingparty {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates the URI used by the IdP to authenticate the user.
     */
    identitytoolkitRelyingpartyCreateAuthUri(req: operations.IdentitytoolkitRelyingpartyCreateAuthUriRequest, security: operations.IdentitytoolkitRelyingpartyCreateAuthUriSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyCreateAuthUriResponse>;
    /**
     * Delete user account.
     */
    identitytoolkitRelyingpartyDeleteAccount(req: operations.IdentitytoolkitRelyingpartyDeleteAccountRequest, security: operations.IdentitytoolkitRelyingpartyDeleteAccountSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyDeleteAccountResponse>;
    /**
     * Batch download user accounts.
     */
    identitytoolkitRelyingpartyDownloadAccount(req: operations.IdentitytoolkitRelyingpartyDownloadAccountRequest, security: operations.IdentitytoolkitRelyingpartyDownloadAccountSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyDownloadAccountResponse>;
    /**
     * Reset password for a user.
     */
    identitytoolkitRelyingpartyEmailLinkSignin(req: operations.IdentitytoolkitRelyingpartyEmailLinkSigninRequest, security: operations.IdentitytoolkitRelyingpartyEmailLinkSigninSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyEmailLinkSigninResponse>;
    /**
     * Returns the account info.
     */
    identitytoolkitRelyingpartyGetAccountInfo(req: operations.IdentitytoolkitRelyingpartyGetAccountInfoRequest, security: operations.IdentitytoolkitRelyingpartyGetAccountInfoSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyGetAccountInfoResponse>;
    /**
     * Get a code for user action confirmation.
     */
    identitytoolkitRelyingpartyGetOobConfirmationCode(req: operations.IdentitytoolkitRelyingpartyGetOobConfirmationCodeRequest, security: operations.IdentitytoolkitRelyingpartyGetOobConfirmationCodeSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyGetOobConfirmationCodeResponse>;
    /**
     * Get project configuration.
     */
    identitytoolkitRelyingpartyGetProjectConfig(req: operations.IdentitytoolkitRelyingpartyGetProjectConfigRequest, security: operations.IdentitytoolkitRelyingpartyGetProjectConfigSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyGetProjectConfigResponse>;
    /**
     * Get token signing public key.
     */
    identitytoolkitRelyingpartyGetPublicKeys(req: operations.IdentitytoolkitRelyingpartyGetPublicKeysRequest, security: operations.IdentitytoolkitRelyingpartyGetPublicKeysSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyGetPublicKeysResponse>;
    /**
     * Get recaptcha secure param.
     */
    identitytoolkitRelyingpartyGetRecaptchaParam(req: operations.IdentitytoolkitRelyingpartyGetRecaptchaParamRequest, security: operations.IdentitytoolkitRelyingpartyGetRecaptchaParamSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyGetRecaptchaParamResponse>;
    /**
     * Reset password for a user.
     */
    identitytoolkitRelyingpartyResetPassword(req: operations.IdentitytoolkitRelyingpartyResetPasswordRequest, security: operations.IdentitytoolkitRelyingpartyResetPasswordSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyResetPasswordResponse>;
    /**
     * Send SMS verification code.
     */
    identitytoolkitRelyingpartySendVerificationCode(req: operations.IdentitytoolkitRelyingpartySendVerificationCodeRequest, security: operations.IdentitytoolkitRelyingpartySendVerificationCodeSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartySendVerificationCodeResponse>;
    /**
     * Set account info for a user.
     */
    identitytoolkitRelyingpartySetAccountInfo(req: operations.IdentitytoolkitRelyingpartySetAccountInfoRequest, security: operations.IdentitytoolkitRelyingpartySetAccountInfoSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartySetAccountInfoResponse>;
    /**
     * Set project configuration.
     */
    identitytoolkitRelyingpartySetProjectConfig(req: operations.IdentitytoolkitRelyingpartySetProjectConfigRequest, security: operations.IdentitytoolkitRelyingpartySetProjectConfigSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartySetProjectConfigResponse>;
    /**
     * Sign out user.
     */
    identitytoolkitRelyingpartySignOutUser(req: operations.IdentitytoolkitRelyingpartySignOutUserRequest, security: operations.IdentitytoolkitRelyingpartySignOutUserSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartySignOutUserResponse>;
    /**
     * Signup new user.
     */
    identitytoolkitRelyingpartySignupNewUser(req: operations.IdentitytoolkitRelyingpartySignupNewUserRequest, security: operations.IdentitytoolkitRelyingpartySignupNewUserSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartySignupNewUserResponse>;
    /**
     * Batch upload existing user accounts.
     */
    identitytoolkitRelyingpartyUploadAccount(req: operations.IdentitytoolkitRelyingpartyUploadAccountRequest, security: operations.IdentitytoolkitRelyingpartyUploadAccountSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyUploadAccountResponse>;
    /**
     * Verifies the assertion returned by the IdP.
     */
    identitytoolkitRelyingpartyVerifyAssertion(req: operations.IdentitytoolkitRelyingpartyVerifyAssertionRequest, security: operations.IdentitytoolkitRelyingpartyVerifyAssertionSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyVerifyAssertionResponse>;
    /**
     * Verifies the developer asserted ID token.
     */
    identitytoolkitRelyingpartyVerifyCustomToken(req: operations.IdentitytoolkitRelyingpartyVerifyCustomTokenRequest, security: operations.IdentitytoolkitRelyingpartyVerifyCustomTokenSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyVerifyCustomTokenResponse>;
    /**
     * Verifies the user entered password.
     */
    identitytoolkitRelyingpartyVerifyPassword(req: operations.IdentitytoolkitRelyingpartyVerifyPasswordRequest, security: operations.IdentitytoolkitRelyingpartyVerifyPasswordSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyVerifyPasswordResponse>;
    /**
     * Verifies ownership of a phone number and creates/updates the user account accordingly.
     */
    identitytoolkitRelyingpartyVerifyPhoneNumber(req: operations.IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest, security: operations.IdentitytoolkitRelyingpartyVerifyPhoneNumberSecurity, config?: AxiosRequestConfig): Promise<operations.IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse>;
}
