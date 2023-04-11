import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PatientNotification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
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
}
