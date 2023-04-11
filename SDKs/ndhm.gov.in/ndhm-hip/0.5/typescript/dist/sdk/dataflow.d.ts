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
     * API called by CM to request Health information from HIP against a validated consent artefact. The transactionId is the correlation id that HIP should use use when pushing data to the **dataPushUrl**.
     *
     */
    postV05HealthInformationHipRequestJson(req: operations.PostV05HealthInformationHipRequestJsonRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationHipRequestJsonResponse>;
    /**
     * Health information data request
     *
     * @remarks
     * API called by CM to request Health information from HIP against a validated consent artefact. The transactionId is the correlation id that HIP should use use when pushing data to the **dataPushUrl**.
     *
     */
    postV05HealthInformationHipRequestRaw(req: operations.PostV05HealthInformationHipRequestRawRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationHipRequestRawResponse>;
}
