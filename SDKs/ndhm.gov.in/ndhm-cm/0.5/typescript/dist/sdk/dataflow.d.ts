import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DataFlow {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postV05HealthInformationNotify - Notifications corresponding to events during data flow
     *
     * API called by HIU and HIP during data-transfer.
     * 1. HIP on transfer of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]
     * 2. HIP would also send **hiStatus** for each *careContextReference* - on of [DELIVERED, ERRORED]
     * 3. HIU on receipt of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]. For example, FAILED when if data was not sent or if invalid data was sent
     * 4. HIU would also send **hiStatus** for each *careContextReference* - one of [OK, ERRORED]
     *
    **/
    postV05HealthInformationNotify(req: operations.PostV05HealthInformationNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationNotifyResponse>;
    /**
     * postV05HealthInformationOnRequest - Health information data request acknowledgement from HIP
     *
     * This API is called by HIP to acknowledge Health information request receipt. When HIU requests health information, CM generates a transactionId and makes a health information request to the HIP(s). HIPs acknowledgement to the health-information request is coveyed by this API. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.
     *
    **/
    postV05HealthInformationOnRequest(req: operations.PostV05HealthInformationOnRequestRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationOnRequestResponse>;
    /**
     * postV05HealthInformationRequest - Health information data request from HIU
     *
     * HIU request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via Gateway API - *** /v0.5/health-information/cm/on-request***.
     *
    **/
    postV05HealthInformationRequest(req: operations.PostV05HealthInformationRequestRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationRequestResponse>;
}
