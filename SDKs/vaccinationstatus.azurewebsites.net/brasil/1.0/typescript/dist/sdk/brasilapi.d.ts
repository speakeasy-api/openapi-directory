import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class BrasilApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getVaccineStatus - return vaccine status from Brasil
    **/
    getVaccineStatus(req: operations.GetVaccineStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetVaccineStatusResponse>;
}
