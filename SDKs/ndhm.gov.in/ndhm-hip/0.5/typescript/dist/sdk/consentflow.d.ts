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
     * Consent notification
     *
     * @remarks
     * Notification of consents to health information providers consent request granted, consent revoked, consent expired. Only the GRANTED and REVOKED status notifications will be sent to HIP.
     *   1. If consent is granted, status=GRANTED, then consentDetail contains the consent artefact details and signature is available.
     *   2. If consent is revoked, then status=REVOKED, and consentId specifes which consent artefact is revoked.
     *
     */
    postV05ConsentsHipNotifyJson(req: operations.PostV05ConsentsHipNotifyJsonRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsHipNotifyJsonResponse>;
    /**
     * Consent notification
     *
     * @remarks
     * Notification of consents to health information providers consent request granted, consent revoked, consent expired. Only the GRANTED and REVOKED status notifications will be sent to HIP.
     *   1. If consent is granted, status=GRANTED, then consentDetail contains the consent artefact details and signature is available.
     *   2. If consent is revoked, then status=REVOKED, and consentId specifes which consent artefact is revoked.
     *
     */
    postV05ConsentsHipNotifyRaw(req: operations.PostV05ConsentsHipNotifyRawRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsHipNotifyRawResponse>;
}
