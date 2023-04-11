import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CoverageParameters {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * /coverage_parameters
     *
     * @remarks
     * ### Get coverage parameters
     *
     * Get a list of [coverage parameters](https://www.heraldapi.com/docs/risk-and-coverage-parameters).
     */
    getCoverageParameters(config?: AxiosRequestConfig): Promise<operations.GetCoverageParametersResponse>;
}
