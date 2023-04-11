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
     * Response to consent request
     *
     * @remarks
     * Result of consent request creation for a patient. **id** represents the consentrequest id created by CM. The result must contain either **id** or the **error** caused. <br/>
     *   Reasons for error may be
     *   * Invalid references (e.g patient id, hiu id), purpose, hiTypes, ranges, persmission
     *
     */
    postV05ConsentRequestsOnInitJson(req: operations.PostV05ConsentRequestsOnInitJsonRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsOnInitJsonResponse>;
    /**
     * Response to consent request
     *
     * @remarks
     * Result of consent request creation for a patient. **id** represents the consentrequest id created by CM. The result must contain either **id** or the **error** caused. <br/>
     *   Reasons for error may be
     *   * Invalid references (e.g patient id, hiu id), purpose, hiTypes, ranges, persmission
     *
     */
    postV05ConsentRequestsOnInitRaw(req: operations.PostV05ConsentRequestsOnInitRawRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsOnInitRawResponse>;
    /**
     * Result of consent request status
     *
     * @remarks
     * Result of consent request done previously. Status of request can be GRANTED,  DENIED, EXPIRED. If the request was GRANTED, then
     *
     */
    postV05ConsentRequestsOnStatusJson(req: operations.PostV05ConsentRequestsOnStatusJsonRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsOnStatusJsonResponse>;
    /**
     * Result of consent request status
     *
     * @remarks
     * Result of consent request done previously. Status of request can be GRANTED,  DENIED, EXPIRED. If the request was GRANTED, then
     *
     */
    postV05ConsentRequestsOnStatusRaw(req: operations.PostV05ConsentRequestsOnStatusRawRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsOnStatusRawResponse>;
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
    postV05ConsentsHiuNotify(req: operations.PostV05ConsentsHiuNotifyRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsHiuNotifyResponse>;
    /**
     * Result of fetch request for a consent artefact
     *
     * @remarks
     * Must contain either consent or error. Possible reason of errors are
     * 1. consentId passed through /fetch is invalid
     *
     */
    postV05ConsentsOnFetchJson(req: operations.PostV05ConsentsOnFetchJsonRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsOnFetchJsonResponse>;
    /**
     * Result of fetch request for a consent artefact
     *
     * @remarks
     * Must contain either consent or error. Possible reason of errors are
     * 1. consentId passed through /fetch is invalid
     *
     */
    postV05ConsentsOnFetchRaw(req: operations.PostV05ConsentsOnFetchRawRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsOnFetchRawResponse>;
}
