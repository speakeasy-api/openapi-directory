import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Login {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Logout
     *
     * @remarks
     * <p>Given a valid access token in the header then log out the authenticated user or client </p>
     * <p>Will revoke the token</p>
     *
     */
    logout(config?: AxiosRequestConfig): Promise<operations.LogoutResponse>;
    /**
     * Reset password
     *
     * @remarks
     * <p>Reset password </p>
     * <p>An email with an embedded link will be sent to the receipient of the email address </p>
     * <p>The link will contain a token to be used for resetting the password </p>
     *
     */
    resetPassword(req: shared.ResetPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ResetPasswordResponse>;
    /**
     * validate
     *
     * @remarks
     * <p>The second part of login involves validating using an MFA device</p>
     * <p>An access token with PRE_AUTH authorities is required</p>
     *
     */
    validateAccessToken(req: operations.ValidateAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.ValidateAccessTokenResponse>;
    /**
     * Authentication endpoint
     *
     * @remarks
     * <p>Use this endpoint to obtain an access token for calling Velo Payments APIs. </p>
     * <p>You need your API key and API secret issued by Velo</p>
     * <p>To login and get an access token the API key and API secret must be Base64 encoded by concatenating them with a colon between them</p>
     * <p>e.g. Given an ApiKey: 44a9537d-d55d-4b47-8082-14061c2bcdd8 and ApiSecret: c396b26b-137a-44fd-87f5-34631f8fd529</p>
     * <p>Using a Base64 encode function Base64Encoder().encode("44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529")</p>
     * <p>Included as a Basic Authorization header: -H "Authorization: Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==" </p>
     *
     */
    veloAuth(req: operations.VeloAuthRequest, security: operations.VeloAuthSecurity, config?: AxiosRequestConfig): Promise<operations.VeloAuthResponse>;
}
