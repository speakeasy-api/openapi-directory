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
     * postV05ConsentsHipNotify - Consent notification
     *
     * Notification of consents to health information providers consent request granted, consent revoked, consent expired. Only the GRANTED and REVOKED status notifications will be sent to HIP.
     *   1. If consent is granted, status=GRANTED, then consentDetail contains the consent artefact details and signature is available.
     *   2. If consent is revoked, then status=REVOKED, and consentId specifes which consent artefact is revoked.
     *
    **/
    postV05ConsentsHipNotify(req: operations.PostV05ConsentsHipNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05ConsentsHipNotifyResponse>;
}
