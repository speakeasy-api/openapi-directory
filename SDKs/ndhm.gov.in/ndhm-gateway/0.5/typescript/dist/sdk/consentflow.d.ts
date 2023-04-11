import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ConsentFlow {
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
     * Consent notification
     *
     * @remarks
     * This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.
     *
     */
    postV05ConsentsHiuOnNotify(req: operations.PostV05ConsentsHiuOnNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsHiuOnNotifyResponse>;
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
}
