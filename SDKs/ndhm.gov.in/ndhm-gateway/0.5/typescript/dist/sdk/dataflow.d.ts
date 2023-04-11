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
     * Health information data request
     *
     * @remarks
     * Callback API for acknowledgement of Health information request of HIU. CM calls this API when it has validated the Health Information request given the consent id. Either the **hiRequest** or **error** would need to be specified. If the health info request was valid, then the ***hiRequest.transactionId*** specifies the transaction context against which HIP would send over the data.  Possible cases of errors are
     *   1. **Invalid consent artefact id**
     *   2. **Consent has expired**
     *   3. **Date ranges are invalid**
     *
     */
    postV05HealthInformationCmOnRequestJson(req: operations.PostV05HealthInformationCmOnRequestJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationCmOnRequestJsonResponse>;
    /**
     * Health information data request
     *
     * @remarks
     * Callback API for acknowledgement of Health information request of HIU. CM calls this API when it has validated the Health Information request given the consent id. Either the **hiRequest** or **error** would need to be specified. If the health info request was valid, then the ***hiRequest.transactionId*** specifies the transaction context against which HIP would send over the data.  Possible cases of errors are
     *   1. **Invalid consent artefact id**
     *   2. **Consent has expired**
     *   3. **Date ranges are invalid**
     *
     */
    postV05HealthInformationCmOnRequestRaw(req: operations.PostV05HealthInformationCmOnRequestRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationCmOnRequestRawResponse>;
    /**
     * Health information data request
     *
     * @remarks
     * Request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via /on-request.
     *
     */
    postV05HealthInformationCmRequestJson(req: operations.PostV05HealthInformationCmRequestJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationCmRequestJsonResponse>;
    /**
     * Health information data request
     *
     * @remarks
     * Request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via /on-request.
     *
     */
    postV05HealthInformationCmRequestRaw(req: operations.PostV05HealthInformationCmRequestRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationCmRequestRawResponse>;
    /**
     * Health information data request
     *
     * @remarks
     * API called by HIP to acknowledge Health information request receipt. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.
     *
     */
    postV05HealthInformationHipOnRequestJson(req: operations.PostV05HealthInformationHipOnRequestJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationHipOnRequestJsonResponse>;
    /**
     * Health information data request
     *
     * @remarks
     * API called by HIP to acknowledge Health information request receipt. Either the **hiRequest** or **error** must be specified. **hiRequest** element returns the same transactionId as before with a status indicating that the request is acknowledged.
     *
     */
    postV05HealthInformationHipOnRequestRaw(req: operations.PostV05HealthInformationHipOnRequestRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationHipOnRequestRawResponse>;
    /**
     * Health information data request
     *
     * @remarks
     * API called by CM to request Health information from HIP against a validated consent artefact. The transactionId is the correlation id that HIP should use use when pushing data to the **dataPushUrl**.
     *
     */
    postV05HealthInformationHipRequestJson(req: operations.PostV05HealthInformationHipRequestJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationHipRequestJsonResponse>;
    /**
     * Health information data request
     *
     * @remarks
     * API called by CM to request Health information from HIP against a validated consent artefact. The transactionId is the correlation id that HIP should use use when pushing data to the **dataPushUrl**.
     *
     */
    postV05HealthInformationHipRequestRaw(req: operations.PostV05HealthInformationHipRequestRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationHipRequestRawResponse>;
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
}
