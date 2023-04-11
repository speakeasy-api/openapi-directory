import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ExchangeRate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Exchange Rate List
     *
     * @remarks
     * Get Exchange Rate List
     */
    getExchangeRateList(req: operations.GetExchangeRateListRequest, config?: AxiosRequestConfig): Promise<operations.GetExchangeRateListResponse>;
    /**
     * Create Exchange Rates
     *
     * @remarks
     * Create Exchange Rates
     */
    postExchangeRateJson(req: operations.PostExchangeRateJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostExchangeRateJsonResponse>;
    /**
     * Create Exchange Rates
     *
     * @remarks
     * Create Exchange Rates
     */
    postExchangeRateRaw(req: operations.PostExchangeRateRawRequest, config?: AxiosRequestConfig): Promise<operations.PostExchangeRateRawResponse>;
}
