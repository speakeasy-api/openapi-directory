import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CmFacing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Discover patient's accounts
     *
     * @remarks
     * Request for patient care context discover, made by CM for a specific HIP. It is expected that HIP will subsequently return either zero or one patient record with (potentially masked) associated care contexts
     *   1. **At least one of the verified identifier matches**
     *   2. **Name (fuzzy), gender matches**
     *   3. **If YoB was given, age band(+-2) matches**
     *   4. **If unverified identifiers were given, one of them matches**
     *   5. **If more than one patient records would be found after aforementioned steps, then patient who matches most verified and unverified identifiers would be returned.**
     *   6. **If there would be still more than one patients (after ranking) error would be returned**
     *   7. **Intended HIP should be able to resolve and identify results returned in the subsequent link confirmation request via the specified transactionId**
     *   8. **Intended HIP should store the discovery results with transactionId and care contexts discovered for subsequent link initiation**
     *
     */
    postV05CareContextsDiscoverJson(req: operations.PostV05CareContextsDiscoverJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05CareContextsDiscoverJsonResponse>;
    /**
     * Discover patient's accounts
     *
     * @remarks
     * Request for patient care context discover, made by CM for a specific HIP. It is expected that HIP will subsequently return either zero or one patient record with (potentially masked) associated care contexts
     *   1. **At least one of the verified identifier matches**
     *   2. **Name (fuzzy), gender matches**
     *   3. **If YoB was given, age band(+-2) matches**
     *   4. **If unverified identifiers were given, one of them matches**
     *   5. **If more than one patient records would be found after aforementioned steps, then patient who matches most verified and unverified identifiers would be returned.**
     *   6. **If there would be still more than one patients (after ranking) error would be returned**
     *   7. **Intended HIP should be able to resolve and identify results returned in the subsequent link confirmation request via the specified transactionId**
     *   8. **Intended HIP should store the discovery results with transactionId and care contexts discovered for subsequent link initiation**
     *
     */
    postV05CareContextsDiscoverRaw(req: operations.PostV05CareContextsDiscoverRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05CareContextsDiscoverRawResponse>;
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
     * Response to consent request
     *
     * @remarks
     * Result of consent request creation for a patient. **consentRequest.id** represents the consentrequest id created by CM. The result must contain either **consentRequest** or the **error** caused. <br/>
     *   Reasons for error may be
     *   * Invalid references (e.g patient id, hiu id), purpose, hiTypes, ranges, persmission
     *
     */
    postV05ConsentRequestsOnInitJson(req: operations.PostV05ConsentRequestsOnInitJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsOnInitJsonResponse>;
    /**
     * Response to consent request
     *
     * @remarks
     * Result of consent request creation for a patient. **consentRequest.id** represents the consentrequest id created by CM. The result must contain either **consentRequest** or the **error** caused. <br/>
     *   Reasons for error may be
     *   * Invalid references (e.g patient id, hiu id), purpose, hiTypes, ranges, persmission
     *
     */
    postV05ConsentRequestsOnInitRaw(req: operations.PostV05ConsentRequestsOnInitRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsOnInitRawResponse>;
    /**
     * Result of consent request status
     *
     * @remarks
     * Result of consent request done previously. Status of request can be GRANTED,  DENIED, EXPIRED. If the request was GRANTED, then
     *
     */
    postV05ConsentRequestsOnStatusJson(req: operations.PostV05ConsentRequestsOnStatusJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsOnStatusJsonResponse>;
    /**
     * Result of consent request status
     *
     * @remarks
     * Result of consent request done previously. Status of request can be GRANTED,  DENIED, EXPIRED. If the request was GRANTED, then
     *
     */
    postV05ConsentRequestsOnStatusRaw(req: operations.PostV05ConsentRequestsOnStatusRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsOnStatusRawResponse>;
    /**
     * Consent notification
     *
     * @remarks
     * Notification of consents to health information providers consent request granted, consent revoked, consent expired. Only the GRANTED, REVOKED and EXPIRED status notifications will be sent to HIP.
     *   1. If consent is granted, status=GRANTED, then consentDetail contains the consent artefact details and signature is available.
     *   2. If consent is revoked, then status=REVOKED, and consentId specifes which consent artefact is revoked.
     *   3. If the consent has expired, then status=EXPIRED, and consentId specifies which consent artefact has expired. Note, this is also responsibility of the HIP to keep track of consent expiry. Any data request on expired consent artefact must not be done.
     *
     */
    postV05ConsentsHipNotifyJson(req: operations.PostV05ConsentsHipNotifyJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsHipNotifyJsonResponse>;
    /**
     * Consent notification
     *
     * @remarks
     * Notification of consents to health information providers consent request granted, consent revoked, consent expired. Only the GRANTED, REVOKED and EXPIRED status notifications will be sent to HIP.
     *   1. If consent is granted, status=GRANTED, then consentDetail contains the consent artefact details and signature is available.
     *   2. If consent is revoked, then status=REVOKED, and consentId specifes which consent artefact is revoked.
     *   3. If the consent has expired, then status=EXPIRED, and consentId specifies which consent artefact has expired. Note, this is also responsibility of the HIP to keep track of consent expiry. Any data request on expired consent artefact must not be done.
     *
     */
    postV05ConsentsHipNotifyRaw(req: operations.PostV05ConsentsHipNotifyRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsHipNotifyRawResponse>;
    /**
     * Consent notification
     *
     * @remarks
     * Health information user will get notified about the consent request granted or denied, consent revoked, consent expired.
     * 1. For consent request grant, status=GRANTED, consentRequestId=<consent-request-id>, and consentArtefacts is an array of generated consent artefact Ids.
     * 2. For consent request expiry, status=EXPIRED, consentRequestId=<consent-request-id>
     * 3. For consent request denied, status=DENIED, consentRequestId=<consent-request-id>
     * 4. For consent revocation, status=REVOKED, consentArtefacts is an array of revoked consent artefact ids
     *
     */
    postV05ConsentsHiuNotify(req: operations.PostV05ConsentsHiuNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsHiuNotifyResponse>;
    /**
     * Result of fetch request for a consent artefact
     *
     * @remarks
     * Must contain either consentDetail or error. Possible reason of errors are
     * 1. consentId passed through /fetch is invalid
     *
     */
    postV05ConsentsOnFetchJson(req: operations.PostV05ConsentsOnFetchJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsOnFetchJsonResponse>;
    /**
     * Result of fetch request for a consent artefact
     *
     * @remarks
     * Must contain either consentDetail or error. Possible reason of errors are
     * 1. consentId passed through /fetch is invalid
     *
     */
    postV05ConsentsOnFetchRaw(req: operations.PostV05ConsentsOnFetchRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsOnFetchRawResponse>;
    /**
     * Health information data request
     *
     * @remarks
     * Callback API for acknowledgement of Health information request of HIU. CM calls this API when it has validated the Health Information request given the consent id. Either the **hiRequest** or **error** would need to be specified. If the health info request was valid, then the ***hiRequest.transactionId*** specifies the transaction context against which HIP would send over the data.  Possible cases of errors are
     *   1. **Invalid consent artefact id**
     *   2. **Consent has expired**
     *   3. **Date ranges are invalid**
     *
     */
    postV05HealthInformationCmOnRequestJson(req: operations.PostV05HealthInformationCmOnRequestJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationCmOnRequestJsonResponse>;
    /**
     * Health information data request
     *
     * @remarks
     * Callback API for acknowledgement of Health information request of HIU. CM calls this API when it has validated the Health Information request given the consent id. Either the **hiRequest** or **error** would need to be specified. If the health info request was valid, then the ***hiRequest.transactionId*** specifies the transaction context against which HIP would send over the data.  Possible cases of errors are
     *   1. **Invalid consent artefact id**
     *   2. **Consent has expired**
     *   3. **Date ranges are invalid**
     *
     */
    postV05HealthInformationCmOnRequestRaw(req: operations.PostV05HealthInformationCmOnRequestRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationCmOnRequestRawResponse>;
    /**
     * Health information data request
     *
     * @remarks
     * API called by CM to request Health information from HIP against a validated consent artefact. The transactionId is the correlation id that HIP should use use when pushing data to the **dataPushUrl**.
     *
     */
    postV05HealthInformationHipRequestJson(req: operations.PostV05HealthInformationHipRequestJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationHipRequestJsonResponse>;
    /**
     * Health information data request
     *
     * @remarks
     * API called by CM to request Health information from HIP against a validated consent artefact. The transactionId is the correlation id that HIP should use use when pushing data to the **dataPushUrl**.
     *
     */
    postV05HealthInformationHipRequestRaw(req: operations.PostV05HealthInformationHipRequestRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationHipRequestRawResponse>;
    /**
     * Token submission by Consent Manager for link confirmation
     *
     * @remarks
     * API to submit the token that was sent by HIP during the link request.
     *
     */
    postV05LinksLinkConfirmJson(req: operations.PostV05LinksLinkConfirmJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkConfirmJsonResponse>;
    /**
     * Token submission by Consent Manager for link confirmation
     *
     * @remarks
     * API to submit the token that was sent by HIP during the link request.
     *
     */
    postV05LinksLinkConfirmRaw(req: operations.PostV05LinksLinkConfirmRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkConfirmRawResponse>;
    /**
     * Link patient's care contexts
     *
     * @remarks
     * Request from CM to links care contexts associated with only one patient
     *   1. **Validate account reference number and care context reference number**
     *   2. **Validate transactionId in the request with discovery request entry to check whether there was a discovery
     *       and were these care contexts discovered or not for a given patient**
     *   3. **Before eventual link confirmation, HIP needs to authenticate the request with the patient(eg: OTP verification)**
     *   4. **HIP should communicate the mode of authentication of a successful request to Consent Manager**
     *
     */
    postV05LinksLinkInitJson(req: operations.PostV05LinksLinkInitJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkInitJsonResponse>;
    /**
     * Link patient's care contexts
     *
     * @remarks
     * Request from CM to links care contexts associated with only one patient
     *   1. **Validate account reference number and care context reference number**
     *   2. **Validate transactionId in the request with discovery request entry to check whether there was a discovery
     *       and were these care contexts discovered or not for a given patient**
     *   3. **Before eventual link confirmation, HIP needs to authenticate the request with the patient(eg: OTP verification)**
     *   4. **HIP should communicate the mode of authentication of a successful request to Consent Manager**
     *
     */
    postV05LinksLinkInitRaw(req: operations.PostV05LinksLinkInitRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkInitRawResponse>;
    /**
     * callback API for HIP initiated patient linking /link/add-context
     *
     * @remarks
     * If the accessToken is valid for purpose of linking, and specified details provided, CM will send "acknoweldgement.status" as SUCCESS. If any error occcurred, for example invalid token, or other required patient or care-context information not provided, then "error" attribute conveys so.
     *   1. **accessToken must be valid and must be for the purpose of linking**
     *
     */
    postV05LinksLinkOnAddContextsJson(req: operations.PostV05LinksLinkOnAddContextsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkOnAddContextsJsonResponse>;
    /**
     * callback API for HIP initiated patient linking /link/add-context
     *
     * @remarks
     * If the accessToken is valid for purpose of linking, and specified details provided, CM will send "acknoweldgement.status" as SUCCESS. If any error occcurred, for example invalid token, or other required patient or care-context information not provided, then "error" attribute conveys so.
     *   1. **accessToken must be valid and must be for the purpose of linking**
     *
     */
    postV05LinksLinkOnAddContextsRaw(req: operations.PostV05LinksLinkOnAddContextsRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05LinksLinkOnAddContextsRawResponse>;
    /**
     * Identification result for a consent-manager user-id
     *
     * @remarks
     * If a patient is found then patient.name contains the patients name.
     * Otherwise, patient is not provided, and possibly error is raised for invalid requests
     * Note in addition to the "Authorization" header, one of the following headers must be specified
     * 1. specify **X-HIU-ID** if the requester is HIU (identified from /find requester.id)
     * 2. specify **X-HIP-ID** if the requester is HIP (identified from /find requester.id)
     *
     */
    postV05PatientsOnFindJson(req: operations.PostV05PatientsOnFindJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsOnFindJsonResponse>;
    /**
     * Identification result for a consent-manager user-id
     *
     * @remarks
     * If a patient is found then patient.name contains the patients name.
     * Otherwise, patient is not provided, and possibly error is raised for invalid requests
     * Note in addition to the "Authorization" header, one of the following headers must be specified
     * 1. specify **X-HIU-ID** if the requester is HIU (identified from /find requester.id)
     * 2. specify **X-HIP-ID** if the requester is HIP (identified from /find requester.id)
     *
     */
    postV05PatientsOnFindRaw(req: operations.PostV05PatientsOnFindRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsOnFindRawResponse>;
    /**
     * Share patient profile details
     *
     * @remarks
     * Request for sharing patient's profile details to HIP
     *
     */
    postV05PatientsProfileShareJson(req: operations.PostV05PatientsProfileShareJsonRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsProfileShareJsonResponse>;
    /**
     * Share patient profile details
     *
     * @remarks
     * Request for sharing patient's profile details to HIP
     *
     */
    postV05PatientsProfileShareRaw(req: operations.PostV05PatientsProfileShareRawRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsProfileShareRawResponse>;
    /**
     * Acknowledgment response for SMS notification sent to patient by HIP
     *
     * @remarks
     * If the SMS notification is successfully sent to patient then "status" will be "ACKNOWLEDGED" with no error.
     * If the SMS notification is failed then "status" will be "ERRORED" with error.
     *
     */
    postV05PatientsSmsOnNotifyJson(req: operations.PostV05PatientsSmsOnNotifyJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsSmsOnNotifyJsonResponse>;
    /**
     * Acknowledgment response for SMS notification sent to patient by HIP
     *
     * @remarks
     * If the SMS notification is successfully sent to patient then "status" will be "ACKNOWLEDGED" with no error.
     * If the SMS notification is failed then "status" will be "ERRORED" with error.
     *
     */
    postV05PatientsSmsOnNotifyRaw(req: operations.PostV05PatientsSmsOnNotifyRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsSmsOnNotifyRawResponse>;
    /**
     * callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
     *
     * @remarks
     * This callback API acknowledges the request for subscription from a HIU, and sends back a "id" that will be used when the patient/user approves or denies the subscription.
     *
     */
    postV05SubscriptionRequestsCmOnInit(req: operations.PostV05SubscriptionRequestsCmOnInitRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SubscriptionRequestsCmOnInitResponse>;
    /**
     * Notification for subscription grant/deny/revoke
     *
     * @remarks
     * This API is used by CM to notify a HIU to grant or deny a request for subscription, and also to notify that in case an existing subscription is revoked or expired. For notifying that a particular subscription request was GRANTED or DENIED, the **subscriptionRequestId** is passed.
     *
     */
    postV05SubscriptionRequestsHiuNotifyJson(req: operations.PostV05SubscriptionRequestsHiuNotifyJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SubscriptionRequestsHiuNotifyJsonResponse>;
    /**
     * Notification for subscription grant/deny/revoke
     *
     * @remarks
     * This API is used by CM to notify a HIU to grant or deny a request for subscription, and also to notify that in case an existing subscription is revoked or expired. For notifying that a particular subscription request was GRANTED or DENIED, the **subscriptionRequestId** is passed.
     *
     */
    postV05SubscriptionRequestsHiuNotifyRaw(req: operations.PostV05SubscriptionRequestsHiuNotifyRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SubscriptionRequestsHiuNotifyRawResponse>;
    /**
     * Notification to HIU on basis of a granted subscription
     *
     * @remarks
     * This API is used by CM to notify a HIU for notification relevant to subscription. Notifications are sent to subscribed HIUs whenever a new care-context is linked or new data is available on an existing linked care-context.
     * 1. if event.category = LINK, then only care-contexts are passed when new care-contexts are linked for patient.
     * 2. If event.category = DATA, then hiTypes are passed. Care-context is passed only if the subscribed HIU has any valid consent for that care-context
     *
     */
    postV05SubscriptionsHiuNotifyJson(req: operations.PostV05SubscriptionsHiuNotifyJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SubscriptionsHiuNotifyJsonResponse>;
    /**
     * Notification to HIU on basis of a granted subscription
     *
     * @remarks
     * This API is used by CM to notify a HIU for notification relevant to subscription. Notifications are sent to subscribed HIUs whenever a new care-context is linked or new data is available on an existing linked care-context.
     * 1. if event.category = LINK, then only care-contexts are passed when new care-contexts are linked for patient.
     * 2. If event.category = DATA, then hiTypes are passed. Care-context is passed only if the subscribed HIU has any valid consent for that care-context
     *
     */
    postV05SubscriptionsHiuNotifyRaw(req: operations.PostV05SubscriptionsHiuNotifyRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SubscriptionsHiuNotifyRawResponse>;
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
}
