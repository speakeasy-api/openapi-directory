import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class HiuFacing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create consent request
     *
     * @remarks
     * Creates a consent request to get data about a patient by HIU user.
     */
    postV05ConsentRequestsInitJson(req: operations.PostV05ConsentRequestsInitJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsInitJsonResponse>;
    /**
     * Create consent request
     *
     * @remarks
     * Creates a consent request to get data about a patient by HIU user.
     */
    postV05ConsentRequestsInitRaw(req: operations.PostV05ConsentRequestsInitRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsInitRawResponse>;
    /**
     * Get consent request status
     *
     * @remarks
     * Get status of consent request done previously
     */
    postV05ConsentRequestsStatusJson(req: operations.PostV05ConsentRequestsStatusJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsStatusJsonResponse>;
    /**
     * Get consent request status
     *
     * @remarks
     * Get status of consent request done previously
     */
    postV05ConsentRequestsStatusRaw(req: operations.PostV05ConsentRequestsStatusRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsStatusRawResponse>;
    /**
     * Get consent artefact
     */
    postV05ConsentsFetch(req: operations.PostV05ConsentsFetchRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsFetchResponse>;
    /**
     * Consent notification
     *
     * @remarks
     * This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.
     *
     */
    postV05ConsentsHiuOnNotify(req: operations.PostV05ConsentsHiuOnNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsHiuOnNotifyResponse>;
    /**
     * Health information data request
     *
     * @remarks
     * Request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via /on-request.
     *
     */
    postV05HealthInformationCmRequestJson(req: operations.PostV05HealthInformationCmRequestJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationCmRequestJsonResponse>;
    /**
     * Health information data request
     *
     * @remarks
     * Request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via /on-request.
     *
     */
    postV05HealthInformationCmRequestRaw(req: operations.PostV05HealthInformationCmRequestRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationCmRequestRawResponse>;
    /**
     * Notifications corresponding to events during data flow
     *
     * @remarks
     * API called by HIU and HIP during data-transfer.
     * 1. HIP on transfer of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]
     * 2. HIP would also send **hiStatus** for each *careContextReference* - on of [DELIVERED, ERRORED]
     * 3. HIU on receipt of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]. For example, FAILED when if data was not sent or if invalid data was sent
     * 4. HIU would also send **hiStatus** for each *careContextReference* - one of [OK, ERRORED]
     *
     */
    postV05HealthInformationNotifyJson(req: operations.PostV05HealthInformationNotifyJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationNotifyJsonResponse>;
    /**
     * Notifications corresponding to events during data flow
     *
     * @remarks
     * API called by HIU and HIP during data-transfer.
     * 1. HIP on transfer of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]
     * 2. HIP would also send **hiStatus** for each *careContextReference* - on of [DELIVERED, ERRORED]
     * 3. HIU on receipt of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]. For example, FAILED when if data was not sent or if invalid data was sent
     * 4. HIU would also send **hiStatus** for each *careContextReference* - one of [OK, ERRORED]
     *
     */
    postV05HealthInformationNotifyRaw(req: operations.PostV05HealthInformationNotifyRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationNotifyRawResponse>;
    /**
     * Identify a patient by her consent-manager user-id
     *
     * @remarks
     * This API is meant for identify to patient given her consent-manager-user-id
     *
     */
    postV05PatientsFindJson(req: operations.PostV05PatientsFindJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsFindJsonResponse>;
    /**
     * Identify a patient by her consent-manager user-id
     *
     * @remarks
     * This API is meant for identify to patient given her consent-manager-user-id
     *
     */
    postV05PatientsFindRaw(req: operations.PostV05PatientsFindRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsFindRawResponse>;
    /**
     * Request for subscription
     *
     * @remarks
     * creates a request for subscription. The subscription categories can be for care-contexts linkages or availability of data against existing care-contexts. Note that the requester must have HIU role
     */
    postV05SubscriptionRequestsCmInitJson(req: operations.PostV05SubscriptionRequestsCmInitJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SubscriptionRequestsCmInitJsonResponse>;
    /**
     * Request for subscription
     *
     * @remarks
     * creates a request for subscription. The subscription categories can be for care-contexts linkages or availability of data against existing care-contexts. Note that the requester must have HIU role
     */
    postV05SubscriptionRequestsCmInitRaw(req: operations.PostV05SubscriptionRequestsCmInitRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SubscriptionRequestsCmInitRawResponse>;
    /**
     * Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
     *
     * @remarks
     * This API is called by HIU as acknowledgement to subscription request relevant notifications.
     *
     */
    postV05SubscriptionRequestsHiuOnNotify(req: operations.PostV05SubscriptionRequestsHiuOnNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SubscriptionRequestsHiuOnNotifyResponse>;
    /**
     * Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
     *
     * @remarks
     * This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.
     *
     */
    postV05SubscriptionsHiuOnNotify(req: operations.PostV05SubscriptionsHiuOnNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SubscriptionsHiuOnNotifyResponse>;
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
