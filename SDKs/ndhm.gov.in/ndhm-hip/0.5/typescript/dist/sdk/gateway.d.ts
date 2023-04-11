import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Gateway {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get openid configuration
     */
    getV05WellKnownOpenidConfiguration(config?: AxiosRequestConfig): Promise<operations.GetV05WellKnownOpenidConfigurationResponse>;
    /**
     * Get certs for JWT verification
     */
    getV05Certs(config?: AxiosRequestConfig): Promise<operations.GetV05CertsResponse>;
    /**
     * Response to patient's account discovery request
     *
     * @remarks
     * Result of patient care-context discovery request at HIP end. If a matching patient found with zero or more care contexts associated, it is specified as result attribute. If the prior discovery request, resulted in errors then it is specified in the error attribute. Reasons of errors can be
     *   1. **more than one definitive match for the given request**
     *   2. **no verified identifer was specified**
     *
     */
    postV05CareContextsOnDiscoverJson(req: operations.PostV05CareContextsOnDiscoverJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05CareContextsOnDiscoverJsonResponse>;
    /**
     * Response to patient's account discovery request
     *
     * @remarks
     * Result of patient care-context discovery request at HIP end. If a matching patient found with zero or more care contexts associated, it is specified as result attribute. If the prior discovery request, resulted in errors then it is specified in the error attribute. Reasons of errors can be
     *   1. **more than one definitive match for the given request**
     *   2. **no verified identifer was specified**
     *
     */
    postV05CareContextsOnDiscoverRaw(req: operations.PostV05CareContextsOnDiscoverRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05CareContextsOnDiscoverRawResponse>;
    /**
     * Consent notification
     *
     * @remarks
     * This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration.
     *
     */
    postV05ConsentsHipOnNotifyJson(req: operations.PostV05ConsentsHipOnNotifyJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsHipOnNotifyJsonResponse>;
    /**
     * Consent notification
     *
     * @remarks
     * This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration.
     *
     */
    postV05ConsentsHipOnNotifyRaw(req: operations.PostV05ConsentsHipOnNotifyRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsHipOnNotifyRawResponse>;
    /**
     * Health information data request
     *
     * @remarks
     * API called by HIP to acknowledge Health information request receipt. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.
     *
     */
    postV05HealthInformationHipOnRequestJson(req: operations.PostV05HealthInformationHipOnRequestJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationHipOnRequestJsonResponse>;
    /**
     * Health information data request
     *
     * @remarks
     * API called by HIP to acknowledge Health information request receipt. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.
     *
     */
    postV05HealthInformationHipOnRequestRaw(req: operations.PostV05HealthInformationHipOnRequestRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationHipOnRequestRawResponse>;
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
     * API for HIP initiated care-context linking for patient
     *
     * @remarks
     * API to submit care-context to CM for HIP initiated linking. The API must accompany the "accessToken" fetched in the users/auth process.
     *   1. subsequent usage for accessToken may be invalid if it was meant for one-time usage or if it expired
     *
     */
    postV05LinksLinkAddContextsJson(req: operations.PostV05LinksLinkAddContextsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkAddContextsJsonResponse>;
    /**
     * API for HIP initiated care-context linking for patient
     *
     * @remarks
     * API to submit care-context to CM for HIP initiated linking. The API must accompany the "accessToken" fetched in the users/auth process.
     *   1. subsequent usage for accessToken may be invalid if it was meant for one-time usage or if it expired
     *
     */
    postV05LinksLinkAddContextsRaw(req: operations.PostV05LinksLinkAddContextsRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkAddContextsRawResponse>;
    /**
     * Token authenticated by HIP, indicating completion of linkage of care-contexts
     *
     * @remarks
     * Returns a list of linked care contexts with patient reference number.
     *   1. **Validated and linked account reference number**
     *   2. **Validated that the token sent from Consent Manager is same as the one generated by HIP**
     *   3. **Verified that same Consent Manager which made the link request is sending the token**
     *   4. **Results of unmasked linked care contexts with patient reference number**
     *
     */
    postV05LinksLinkOnConfirmJson(req: operations.PostV05LinksLinkOnConfirmJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkOnConfirmJsonResponse>;
    /**
     * Token authenticated by HIP, indicating completion of linkage of care-contexts
     *
     * @remarks
     * Returns a list of linked care contexts with patient reference number.
     *   1. **Validated and linked account reference number**
     *   2. **Validated that the token sent from Consent Manager is same as the one generated by HIP**
     *   3. **Verified that same Consent Manager which made the link request is sending the token**
     *   4. **Results of unmasked linked care contexts with patient reference number**
     *
     */
    postV05LinksLinkOnConfirmRaw(req: operations.PostV05LinksLinkOnConfirmRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkOnConfirmRawResponse>;
    /**
     * Response to patient's care context link request
     *
     * @remarks
     * Result of patient care-context link request from HIP end. This happens in context of previous discovery of patient found at HIP end, therefore the link requests ought to be in reference to the patient reference and care-context references previously returned by the HIP. The correlation of discovery and link request is maintained through the transactionId. HIP should have
     *   1. **Validated transactionId in the request to check whether there was a discovery done previously, and the link request corresponds to returned patient care care context references**
     *   2. **Before returning the response, HIP should have sent an authentication request to the patient(eg: OTP verification)**
     *   3. **HIP should communicate the mode of authentication of a successful request**
     *   4. **HIP subsequently should expect the token passed via /link/confirm against the link.referenceNumber passed in this call**
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
     *   1. **Patient reference number is invalid**
     *   2. **Care context reference numbers are invalid**
     *
     */
    postV05LinksLinkOnInitJson(req: operations.PostV05LinksLinkOnInitJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkOnInitJsonResponse>;
    /**
     * Response to patient's care context link request
     *
     * @remarks
     * Result of patient care-context link request from HIP end. This happens in context of previous discovery of patient found at HIP end, therefore the link requests ought to be in reference to the patient reference and care-context references previously returned by the HIP. The correlation of discovery and link request is maintained through the transactionId. HIP should have
     *   1. **Validated transactionId in the request to check whether there was a discovery done previously, and the link request corresponds to returned patient care care context references**
     *   2. **Before returning the response, HIP should have sent an authentication request to the patient(eg: OTP verification)**
     *   3. **HIP should communicate the mode of authentication of a successful request**
     *   4. **HIP subsequently should expect the token passed via /link/confirm against the link.referenceNumber passed in this call**
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
     *   1. **Patient reference number is invalid**
     *   2. **Care context reference numbers are invalid**
     *
     */
    postV05LinksLinkOnInitRaw(req: operations.PostV05LinksLinkOnInitRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkOnInitRawResponse>;
    /**
     * Response to patient's share profile request
     *
     * @remarks
     * Result of patient share profile request at HIP end.
     *
     */
    postV05PatientsProfileOnShareJson(req: operations.PostV05PatientsProfileOnShareJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsProfileOnShareJsonResponse>;
    /**
     * Response to patient's share profile request
     *
     * @remarks
     * Result of patient share profile request at HIP end.
     *
     */
    postV05PatientsProfileOnShareRaw(req: operations.PostV05PatientsProfileOnShareRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsProfileOnShareRawResponse>;
    /**
     * API for HIP to send SMS notifications to patients
     *
     * @remarks
     * API to send SMS notifications to patient with custom deeplink.
     *
     */
    postV05PatientsSmsNotifyJson(req: operations.PostV05PatientsSmsNotifyJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsSmsNotifyJsonResponse>;
    /**
     * API for HIP to send SMS notifications to patients
     *
     * @remarks
     * API to send SMS notifications to patient with custom deeplink.
     *
     */
    postV05PatientsSmsNotifyRaw(req: operations.PostV05PatientsSmsNotifyRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsSmsNotifyRawResponse>;
    /**
     * Get access token
     */
    postV05SessionsJson(req: shared.SessionRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SessionsJsonResponse>;
    /**
     * Get access token
     */
    postV05SessionsRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.PostV05SessionsRawResponse>;
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
