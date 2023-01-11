import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Consent {
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
     * Creates a consent request to get data about a patient by HIU user. CM should call Gateway - *** /v0.5/consent-requests/on-init*** API with the consent-request-id
    **/
    postV05ConsentRequestsInit(req: operations.PostV05ConsentRequestsInitRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsInitResponse>;
    /**
     * postV05ConsentRequestsStatus - Get consent request status
     *
     * Get status of consent request done previously. CM responds by calling Gateway API - *** /v0.5/consent-requests/on-status***
    **/
    postV05ConsentRequestsStatus(req: operations.PostV05ConsentRequestsStatusRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentRequestsStatusResponse>;
    /**
     * postV05ConsentsFetch - Get consent artefact
     *
     * This API is called when a HIU makes a request to get a consent artefact. For response please refer to the Gateway *** /v0.5/consents/on-fetch***
    **/
    postV05ConsentsFetch(req: operations.PostV05ConsentsFetchRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsFetchResponse>;
    /**
     * postV05ConsentsHipOnNotify - Consent notification
     *
     * This API is called by HIP as acknowledgement to notification of consents, in cases of consent revocation and expiration, notified by CM earlier via Gateway API - *** /v0.5/consents/hip/notify***.
     *
    **/
    postV05ConsentsHipOnNotify(req: operations.PostV05ConsentsHipOnNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsHipOnNotifyResponse>;
    /**
     * postV05ConsentsHiuOnNotify - Consent notification
     *
     * This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED, notified by CM earlier via Gateway API - *** /v0.5/consents/hiu/notify***.
     *
    **/
    postV05ConsentsHiuOnNotify(req: operations.PostV05ConsentsHiuOnNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsHiuOnNotifyResponse>;
}
