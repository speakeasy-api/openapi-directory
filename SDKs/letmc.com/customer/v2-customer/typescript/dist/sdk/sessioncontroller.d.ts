import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SessionController {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Change the password of a customer given their existing and new password.
     */
    sessionControllerChangePassword(req: operations.SessionControllerChangePasswordRequest, config?: AxiosRequestConfig): Promise<operations.SessionControllerChangePasswordResponse>;
    /**
     * Send a request to the in-tray to create a landlord login.
     */
    sessionControllerCreateLandlordLogin(req: operations.SessionControllerCreateLandlordLoginRequest, config?: AxiosRequestConfig): Promise<operations.SessionControllerCreateLandlordLoginResponse>;
    /**
     * Gets information about the currently logged on customer.
     */
    sessionControllerGetSessionInfo(req: operations.SessionControllerGetSessionInfoRequest, config?: AxiosRequestConfig): Promise<operations.SessionControllerGetSessionInfoResponse>;
    /**
     * Login as a customer given their username and password.
     */
    sessionControllerLogin(req: operations.SessionControllerLoginRequest, config?: AxiosRequestConfig): Promise<operations.SessionControllerLoginResponse>;
    /**
     * Logout a customer previously logged in via the Login endpoint.
     */
    sessionControllerLogout(req: operations.SessionControllerLogoutRequest, config?: AxiosRequestConfig): Promise<operations.SessionControllerLogoutResponse>;
    /**
     * Reset the customer's password. An email will be sent out to reset.
     */
    sessionControllerResetPassword(req: operations.SessionControllerResetPasswordRequest, config?: AxiosRequestConfig): Promise<operations.SessionControllerResetPasswordResponse>;
}
