import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Consent {
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
     * Creates a consent request to get data about a patient by HIU user. CM should call Gateway - *** /v0.5/consent-requests/on-init*** API with the consent-request-id
     */
    postV05ConsentRequestsInitJson(req: operations.PostV05ConsentRequestsInitJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsInitJsonResponse>;
    /**
     * Create consent request
     *
     * @remarks
     * Creates a consent request to get data about a patient by HIU user. CM should call Gateway - *** /v0.5/consent-requests/on-init*** API with the consent-request-id
     */
    postV05ConsentRequestsInitRaw(req: operations.PostV05ConsentRequestsInitRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsInitRawResponse>;
    /**
     * Get consent request status
     *
     * @remarks
     * Get status of consent request done previously. CM responds by calling Gateway API - *** /v0.5/consent-requests/on-status***
     */
    postV05ConsentRequestsStatusJson(req: operations.PostV05ConsentRequestsStatusJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsStatusJsonResponse>;
    /**
     * Get consent request status
     *
     * @remarks
     * Get status of consent request done previously. CM responds by calling Gateway API - *** /v0.5/consent-requests/on-status***
     */
    postV05ConsentRequestsStatusRaw(req: operations.PostV05ConsentRequestsStatusRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsStatusRawResponse>;
    /**
     * Get consent artefact
     *
     * @remarks
     * This API is called when a HIU makes a request to get a consent artefact. For response please refer to the Gateway *** /v0.5/consents/on-fetch***
     */
    postV05ConsentsFetch(req: operations.PostV05ConsentsFetchRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsFetchResponse>;
    /**
     * Consent notification
     *
     * @remarks
     * This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration, notified by CM earlier via Gateway API - *** /v0.5/consents/hip/notify***.
     *
     */
    postV05ConsentsHipOnNotifyJson(req: operations.PostV05ConsentsHipOnNotifyJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsHipOnNotifyJsonResponse>;
    /**
     * Consent notification
     *
     * @remarks
     * This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration, notified by CM earlier via Gateway API - *** /v0.5/consents/hip/notify***.
     *
     */
    postV05ConsentsHipOnNotifyRaw(req: operations.PostV05ConsentsHipOnNotifyRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsHipOnNotifyRawResponse>;
    /**
     * Consent notification
     *
     * @remarks
     * This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED, notified by CM earlier via Gateway API - *** /v0.5/consents/hiu/notify***.
     *
     */
    postV05ConsentsHiuOnNotify(req: operations.PostV05ConsentsHiuOnNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsHiuOnNotifyResponse>;
}
