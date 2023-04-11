import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DataFlow {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Notifications corresponding to events during data flow
     *
     * @remarks
     * API called by HIU and HIP during data-transfer.
     * 1. HIP on transfer of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]
     * 2. HIP would also send **hiStatus** for each *careContextReference* - on of [DELIVERED, ERRORED]
     * 3. HIU on receipt of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]. For example, FAILED when if data was not sent or if invalid data was sent
     * 4. HIU would also send **hiStatus** for each *careContextReference* - one of [OK, ERRORED]
     *
     */
    postV05HealthInformationNotifyJson(req: operations.PostV05HealthInformationNotifyJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationNotifyJsonResponse>;
    /**
     * Notifications corresponding to events during data flow
     *
     * @remarks
     * API called by HIU and HIP during data-transfer.
     * 1. HIP on transfer of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]
     * 2. HIP would also send **hiStatus** for each *careContextReference* - on of [DELIVERED, ERRORED]
     * 3. HIU on receipt of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]. For example, FAILED when if data was not sent or if invalid data was sent
     * 4. HIU would also send **hiStatus** for each *careContextReference* - one of [OK, ERRORED]
     *
     */
    postV05HealthInformationNotifyRaw(req: operations.PostV05HealthInformationNotifyRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationNotifyRawResponse>;
    /**
     * Health information data request acknowledgement from HIP
     *
     * @remarks
     * This API is called by HIP to acknowledge Health information request receipt. When HIU requests health information, CM generates a transactionId and makes a health information request to the HIP(s). HIPs acknowledgement to the health-information request is coveyed by this API. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.
     *
     */
    postV05HealthInformationOnRequestJson(req: operations.PostV05HealthInformationOnRequestJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationOnRequestJsonResponse>;
    /**
     * Health information data request acknowledgement from HIP
     *
     * @remarks
     * This API is called by HIP to acknowledge Health information request receipt. When HIU requests health information, CM generates a transactionId and makes a health information request to the HIP(s). HIPs acknowledgement to the health-information request is coveyed by this API. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.
     *
     */
    postV05HealthInformationOnRequestRaw(req: operations.PostV05HealthInformationOnRequestRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationOnRequestRawResponse>;
    /**
     * Health information data request from HIU
     *
     * @remarks
     * HIU request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via Gateway API - *** /v0.5/health-information/cm/on-request***.
     *
     */
    postV05HealthInformationRequestJson(req: operations.PostV05HealthInformationRequestJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationRequestJsonResponse>;
    /**
     * Health information data request from HIU
     *
     * @remarks
     * HIU request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via Gateway API - *** /v0.5/health-information/cm/on-request***.
     *
     */
    postV05HealthInformationRequestRaw(req: operations.PostV05HealthInformationRequestRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationRequestRawResponse>;
}
