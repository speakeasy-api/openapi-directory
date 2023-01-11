import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Login {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * logout - Logout
     *
     * <p>Given a valid access token in the header then log out the authenticated user or client </p>
     * <p>Will revoke the token</p>
     *
    **/
    logout(config?: AxiosRequestConfig): Promise<operations.LogoutResponse>;
    /**
     * resetPassword - Reset password
     *
     * <p>Reset password </p>
     * <p>An email with an embedded link will be sent to the receipient of the email address </p>
     * <p>The link will contain a token to be used for resetting the password </p>
     *
    **/
    resetPassword(req: operations.ResetPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ResetPasswordResponse>;
    /**
     * validateAccessToken - validate
     *
     * <p>The second part of login involves validating using an MFA device</p>
     * <p>An access token with PRE_AUTH authorities is required</p>
     *
    **/
    validateAccessToken(req: operations.ValidateAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.ValidateAccessTokenResponse>;
    /**
     * veloAuth - Authentication endpoint
     *
     * Use this endpoint to obtain an access token for calling Velo Payments APIs. Use HTTP Basic Auth. String value of
     * Basic and a Base64 endcoded string comprising the API key (e.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8) and API
     * secret  (e.g. c396b26b-137a-44fd-87f5-34631f8fd529) with a colon between them. E.g. Basic 44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529
     *
    **/
    veloAuth(req: operations.VeloAuthRequest, config?: AxiosRequestConfig): Promise<operations.VeloAuthResponse>;
}
