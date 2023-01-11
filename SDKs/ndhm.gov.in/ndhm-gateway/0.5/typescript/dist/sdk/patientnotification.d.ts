import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PatientNotification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postV05PatientsSmsNotify - API for HIP to send SMS notifications to patients
     *
     * API to send SMS notifications to patient with custom deeplink.
     *
    **/
    postV05PatientsSmsNotify(req: operations.PostV05PatientsSmsNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsSmsNotifyResponse>;
    /**
     * postV05PatientsSmsOnNotify - Acknowledgment response for SMS notification sent to patient by HIP
     *
     * If the SMS notification is successfully sent to patient then "status" will be "ACKNOWLEDGED" with no error.
     * If the SMS notification is failed then "status" will be "ERRORED" with error.
     *
    **/
    postV05PatientsSmsOnNotify(req: operations.PostV05PatientsSmsOnNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsSmsOnNotifyResponse>;
}
