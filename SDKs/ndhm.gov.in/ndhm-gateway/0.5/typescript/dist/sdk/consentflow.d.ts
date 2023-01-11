import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ConsentFlow {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postV05ConsentRequestsInit - Create consent request
     *
     * Creates a consent request to get data about a patient by HIU user.
    **/
    postV05ConsentRequestsInit(req: operations.PostV05ConsentRequestsInitRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsInitResponse>;
    /**
     * postV05ConsentRequestsOnInit - Response to consent request
     *
     * Result of consent request creation for a patient. **consentRequest.id** represents the consentrequest id created by CM. The result must contain either **consentRequest** or the **error** caused. <br/>
     *   Reasons for error may be
     *   * Invalid references (e.g patient id, hiu id), purpose, hiTypes, ranges, persmission
     *
    **/
    postV05ConsentRequestsOnInit(req: operations.PostV05ConsentRequestsOnInitRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsOnInitResponse>;
    /**
     * postV05ConsentRequestsOnStatus - Result of consent request status
     *
     * Result of consent request done previously. Status of request can be GRANTED,  DENIED, EXPIRED. If the request was GRANTED, then
     *
    **/
    postV05ConsentRequestsOnStatus(req: operations.PostV05ConsentRequestsOnStatusRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsOnStatusResponse>;
    /**
     * postV05ConsentRequestsStatus - Get consent request status
     *
     * Get status of consent request done previously
    **/
    postV05ConsentRequestsStatus(req: operations.PostV05ConsentRequestsStatusRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsStatusResponse>;
    /**
     * postV05ConsentsFetch - Get consent artefact
    **/
    postV05ConsentsFetch(req: operations.PostV05ConsentsFetchRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsFetchResponse>;
    /**
     * postV05ConsentsHipNotify - Consent notification
     *
     * Notification of consents to health information providers consent request granted, consent revoked, consent expired. Only the GRANTED, REVOKED and EXPIRED status notifications will be sent to HIP.
     *   1. If consent is granted, status=GRANTED, then consentDetail contains the consent artefact details and signature is available.
     *   2. If consent is revoked, then status=REVOKED, and consentId specifes which consent artefact is revoked.
     *   3. If the consent has expired, then status=EXPIRED, and consentId specifies which consent artefact has expired. Note, this is also responsibility of the HIP to keep track of consent expiry. Any data request on expired consent artefact must not be done.
     *
    **/
    postV05ConsentsHipNotify(req: operations.PostV05ConsentsHipNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsHipNotifyResponse>;
    /**
     * postV05ConsentsHipOnNotify - Consent notification
     *
     * This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration.
     *
    **/
    postV05ConsentsHipOnNotify(req: operations.PostV05ConsentsHipOnNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsHipOnNotifyResponse>;
    /**
     * postV05ConsentsHiuNotify - Consent notification
     *
     * Health information user will get notified about the consent request granted or denied, consent revoked, consent expired.
     * 1. For consent request grant, status=GRANTED, consentRequestId=<consent-request-id>, and consentArtefacts is an array of generated consent artefact Ids.
     * 2. For consent request expiry, status=EXPIRED, consentRequestId=<consent-request-id>
     * 3. For consent request denied, status=DENIED, consentRequestId=<consent-request-id>
     * 4. For consent revocation, status=REVOKED, consentArtefacts is an array of revoked consent artefact ids
     *
    **/
    postV05ConsentsHiuNotify(req: operations.PostV05ConsentsHiuNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsHiuNotifyResponse>;
    /**
     * postV05ConsentsHiuOnNotify - Consent notification
     *
     * This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.
     *
    **/
    postV05ConsentsHiuOnNotify(req: operations.PostV05ConsentsHiuOnNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsHiuOnNotifyResponse>;
    /**
     * postV05ConsentsOnFetch - Result of fetch request for a consent artefact
     *
     * Must contain either consentDetail or error. Possible reason of errors are
     * 1. consentId passed through /fetch is invalid
     *
    **/
    postV05ConsentsOnFetch(req: operations.PostV05ConsentsOnFetchRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsOnFetchResponse>;
}
