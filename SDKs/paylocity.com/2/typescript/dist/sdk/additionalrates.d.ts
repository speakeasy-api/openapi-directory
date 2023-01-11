import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AdditionalRates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addOrUpdateAdditionalRates - Add/update additional rates
     *
     * Sends new or updated employee additional rates information directly to Web Pay.
    **/
    addOrUpdateAdditionalRates(req: operations.AddOrUpdateAdditionalRatesRequest, config?: AxiosRequestConfig): Promise<operations.AddOrUpdateAdditionalRatesResponse>;
}
