import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UserAuth {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
     *
     * @remarks
     * This API is called by HIP/HIUs to confirm authentication of users. The transactionId returned by the previous callback API /users/auth/on-init must be sent. If Authentication is successful the callback API will send an "access token" for subsequent purpose specific API calls. Note only **credential.authCode** or **credential.demographic** should be sent
     *   1. demographic details are only required for  demographic auth as of now.
     *   2. demographic details are required only in MEDIATED cases and if the **auth.mode** so demands. e.g. if **auth.mode** is DEMOGRAPHICS. Usually for demographic authentication, the name, gender and DOB must be exactly as specified in User Account.
     *   3. demographic.identifier is optional, however maybe required if authentication so mandates.
     *   4. credential.authCode is required for other MEDIATED authentication like MOBILE_OTP, AADHAAR_OTP.
     *
     */
    postV05UsersAuthConfirmJson(req: operations.PostV05UsersAuthConfirmJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthConfirmJsonResponse>;
    /**
     * Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
     *
     * @remarks
     * This API is called by HIP/HIUs to confirm authentication of users. The transactionId returned by the previous callback API /users/auth/on-init must be sent. If Authentication is successful the callback API will send an "access token" for subsequent purpose specific API calls. Note only **credential.authCode** or **credential.demographic** should be sent
     *   1. demographic details are only required for  demographic auth as of now.
     *   2. demographic details are required only in MEDIATED cases and if the **auth.mode** so demands. e.g. if **auth.mode** is DEMOGRAPHICS. Usually for demographic authentication, the name, gender and DOB must be exactly as specified in User Account.
     *   3. demographic.identifier is optional, however maybe required if authentication so mandates.
     *   4. credential.authCode is required for other MEDIATED authentication like MOBILE_OTP, AADHAAR_OTP.
     *
     */
    postV05UsersAuthConfirmRaw(req: operations.PostV05UsersAuthConfirmRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthConfirmRawResponse>;
    /**
     * Get a patient's authentication modes relevant to specified purpose
     *
     * @remarks
     * This API is meant for identify supported authentication modes for a patient given a specific purpose
     *
     */
    postV05UsersAuthFetchModesJson(req: operations.PostV05UsersAuthFetchModesJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthFetchModesJsonResponse>;
    /**
     * Get a patient's authentication modes relevant to specified purpose
     *
     * @remarks
     * This API is meant for identify supported authentication modes for a patient given a specific purpose
     *
     */
    postV05UsersAuthFetchModesRaw(req: operations.PostV05UsersAuthFetchModesRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthFetchModesRawResponse>;
    /**
     * Initialize authentication from HIP
     *
     * @remarks
     * This API is called by HIPs to initiate authentication of users. A transactionId is retuned by the corresponding callback API for confirmation of user auth.
     *
     */
    postV05UsersAuthInitJson(req: operations.PostV05UsersAuthInitJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthInitJsonResponse>;
    /**
     * Initialize authentication from HIP
     *
     * @remarks
     * This API is called by HIPs to initiate authentication of users. A transactionId is retuned by the corresponding callback API for confirmation of user auth.
     *
     */
    postV05UsersAuthInitRaw(req: operations.PostV05UsersAuthInitRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthInitRawResponse>;
    /**
     * callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
     *
     * @remarks
     * This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication.
     *
     */
    postV05UsersAuthOnNotifyJson(req: operations.PostV05UsersAuthOnNotifyJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthOnNotifyJsonResponse>;
    /**
     * callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
     *
     * @remarks
     * This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication.
     *
     */
    postV05UsersAuthOnNotifyRaw(req: operations.PostV05UsersAuthOnNotifyRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthOnNotifyRawResponse>;
}
