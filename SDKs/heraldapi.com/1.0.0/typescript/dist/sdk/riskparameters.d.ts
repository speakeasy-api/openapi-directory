import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RiskParameters {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * /risk_parameters
     *
     * @remarks
     * ### Get risk parameters
     *
     * Get a list of [risk parameters](https://www.heraldapi.com/docs/risk-and-coverage-parameters).
     */
    getRiskParameters(config?: AxiosRequestConfig): Promise<operations.GetRiskParametersResponse>;
}
