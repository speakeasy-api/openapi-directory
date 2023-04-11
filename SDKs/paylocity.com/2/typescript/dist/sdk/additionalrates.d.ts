import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AdditionalRates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add/update additional rates
     *
     * @remarks
     * Sends new or updated employee additional rates information directly to Web Pay.
     */
    addOrUpdateAdditionalRates(req: operations.AddOrUpdateAdditionalRatesRequest, security: operations.AddOrUpdateAdditionalRatesSecurity, config?: AxiosRequestConfig): Promise<operations.AddOrUpdateAdditionalRatesResponse>;
}
