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
     * postV05HealthInformationHipRequest - Health information data request
     *
     * API called by CM to request Health information from HIP against a validated consent artefact. The transactionId is the correlation id that HIP should use use when pushing data to the **dataPushUrl**.
     *
    **/
    postV05HealthInformationHipRequest(req: operations.PostV05HealthInformationHipRequestRequest, config?: AxiosRequestConfig): Promise<operations.PostV05HealthInformationHipRequestResponse>;
}
