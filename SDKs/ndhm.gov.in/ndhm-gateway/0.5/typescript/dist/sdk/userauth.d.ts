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
     * notification API in case of DIRECT mode of authentication by the CM
     *
     * @remarks
     * This API is called by CM to confirm authentication of users. The transactionId returned is same as that passed in /auth/on-init. The "auth.status" conveys whether the request was GRANTED or DENIED.
     *
     *   1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
     *   2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
     *   3. The payload is conditional to the purpose of auth. If purpose specified in /auth/init is KYC or KYC_AND_LINK, then patient details are passed. **auth.accessToken** is passed only if the purpose is LINK or KYC_AND_LINK.
     *
     */
    postV05UsersAuthNotifyJson(req: operations.PostV05UsersAuthNotifyJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthNotifyJsonResponse>;
    /**
     * notification API in case of DIRECT mode of authentication by the CM
     *
     * @remarks
     * This API is called by CM to confirm authentication of users. The transactionId returned is same as that passed in /auth/on-init. The "auth.status" conveys whether the request was GRANTED or DENIED.
     *
     *   1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
     *   2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
     *   3. The payload is conditional to the purpose of auth. If purpose specified in /auth/init is KYC or KYC_AND_LINK, then patient details are passed. **auth.accessToken** is passed only if the purpose is LINK or KYC_AND_LINK.
     *
     */
    postV05UsersAuthNotifyRaw(req: operations.PostV05UsersAuthNotifyRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthNotifyRawResponse>;
    /**
     * callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
     *
     * @remarks
     * This API is called by CM to confirm authentication of users.
     *
     *   1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
     *   2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
     *
     */
    postV05UsersAuthOnConfirmJson(req: operations.PostV05UsersAuthOnConfirmJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthOnConfirmJsonResponse>;
    /**
     * callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
     *
     * @remarks
     * This API is called by CM to confirm authentication of users.
     *
     *   1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
     *   2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
     *
     */
    postV05UsersAuthOnConfirmRaw(req: operations.PostV05UsersAuthOnConfirmRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthOnConfirmRawResponse>;
    /**
     * Identification result for a consent-manager user-id
     *
     * @remarks
     * If a patient is found then **auth** attribute contains the supported modes for the specified purpose.
     * Otherwise, error is raised for invalid requests or for non-existent id.
     * Note in addition to the "Authorization" header, one of the following headers must be specified
     * 1. **X-HIU-ID** if the requester is HIU (identified from /auth/fetch-modes requester.id)
     * 2. **X-HIP-ID** if the requester is HIP (identified from /auth/fetch-modes requester.id)
     *
     */
    postV05UsersAuthOnFetchModesJson(req: operations.PostV05UsersAuthOnFetchModesJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthOnFetchModesJsonResponse>;
    /**
     * Identification result for a consent-manager user-id
     *
     * @remarks
     * If a patient is found then **auth** attribute contains the supported modes for the specified purpose.
     * Otherwise, error is raised for invalid requests or for non-existent id.
     * Note in addition to the "Authorization" header, one of the following headers must be specified
     * 1. **X-HIU-ID** if the requester is HIU (identified from /auth/fetch-modes requester.id)
     * 2. **X-HIP-ID** if the requester is HIP (identified from /auth/fetch-modes requester.id)
     *
     */
    postV05UsersAuthOnFetchModesRaw(req: operations.PostV05UsersAuthOnFetchModesRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthOnFetchModesRawResponse>;
    /**
     * Response to user authentication initialization from HIP
     *
     * @remarks
     * If the patient's id is valid, CM will return a transactionId as initialization of user auth. If the request is valid, then 'auth.mode' will convey how the authentication should be done. The authentication can be *mediated* or *direct*. For mediated authentication modes, HIP or HIU is epected to send over relevant code (OTP/token) or demographic info via subsequent API call to /auth/confirm. for direct authentication case, CM will notify requester through/users/auth/notify API.
     *
     *   1. **auth.mode** conveys whats the mode of authentication is, and what is expected from HIP/HIU in the subsequent /auth/confirm API call. Possible values
     *       1. MOBILE_OTP - auth via OTP to registered mobile. Mediated.
     *       2. AADHAAR_OTP - auth initiated with Aadhaar with OTP. Mediated.
     *       3. DEMOGRAPHICS - auth initiated with demographic verification
     *       4. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS. In this case, the HIP/HIU is not expected to call subsequent /auth/confirm call. CM will do direct authentication with the User (e.g. Mobile App, SMS etc) and will notify requester
     *   2. **meta.expiry** conveys the expiry time of the token and the authentication session
     *   3. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     * The error section in the body, represents the potential errors that may have occurred. Possible reasons:
     *   1. Patient id is invalid
     *
     */
    postV05UsersAuthOnInitJson(req: operations.PostV05UsersAuthOnInitJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthOnInitJsonResponse>;
    /**
     * Response to user authentication initialization from HIP
     *
     * @remarks
     * If the patient's id is valid, CM will return a transactionId as initialization of user auth. If the request is valid, then 'auth.mode' will convey how the authentication should be done. The authentication can be *mediated* or *direct*. For mediated authentication modes, HIP or HIU is epected to send over relevant code (OTP/token) or demographic info via subsequent API call to /auth/confirm. for direct authentication case, CM will notify requester through/users/auth/notify API.
     *
     *   1. **auth.mode** conveys whats the mode of authentication is, and what is expected from HIP/HIU in the subsequent /auth/confirm API call. Possible values
     *       1. MOBILE_OTP - auth via OTP to registered mobile. Mediated.
     *       2. AADHAAR_OTP - auth initiated with Aadhaar with OTP. Mediated.
     *       3. DEMOGRAPHICS - auth initiated with demographic verification
     *       4. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS. In this case, the HIP/HIU is not expected to call subsequent /auth/confirm call. CM will do direct authentication with the User (e.g. Mobile App, SMS etc) and will notify requester
     *   2. **meta.expiry** conveys the expiry time of the token and the authentication session
     *   3. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     * The error section in the body, represents the potential errors that may have occurred. Possible reasons:
     *   1. Patient id is invalid
     *
     */
    postV05UsersAuthOnInitRaw(req: operations.PostV05UsersAuthOnInitRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthOnInitRawResponse>;
    /**
     * callback API by HIU/HIPs as acknowledgement of auth notification
     *
     * @remarks
     * This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication.
     *
     */
    postV05UsersAuthOnNotifyJson(req: operations.PostV05UsersAuthOnNotifyJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthOnNotifyJsonResponse>;
    /**
     * callback API by HIU/HIPs as acknowledgement of auth notification
     *
     * @remarks
     * This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication.
     *
     */
    postV05UsersAuthOnNotifyRaw(req: operations.PostV05UsersAuthOnNotifyRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthOnNotifyRawResponse>;
}
