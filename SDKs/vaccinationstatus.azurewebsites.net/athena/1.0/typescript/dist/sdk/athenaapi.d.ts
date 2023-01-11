import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AthenaApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getVaccineStatus - return vaccine status from USA -- Athena Health API
    **/
    getVaccineStatus(req: operations.GetVaccineStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetVaccineStatusResponse>;
}
