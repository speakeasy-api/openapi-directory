import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Rates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * calculateRates - Get Shipping Rates
     *
     * It's not uncommon that you want to give your customer the choice between whether they want to ship the fastest, cheapest, or the most trusted route. Most companies don't solely ship things using a single shipping option;
     * so we provide functionality to show you all your options!
     *
    **/
    calculateRates(req: operations.CalculateRatesRequest, config?: AxiosRequestConfig): Promise<operations.CalculateRatesResponse>;
    /**
     * compareBulkRates - Get Bulk Rates
     *
     * Get Bulk Shipment Rates
    **/
    compareBulkRates(req: operations.CompareBulkRatesRequest, config?: AxiosRequestConfig): Promise<operations.CompareBulkRatesResponse>;
    /**
     * estimateRates - Estimate Rates
     *
     * Get Rate Estimates
    **/
    estimateRates(req: operations.EstimateRatesRequest, config?: AxiosRequestConfig): Promise<operations.EstimateRatesResponse>;
    /**
     * getRateById - Get Rate By ID
     *
     * Retrieve a previously queried rate by its ID
    **/
    getRateById(req: operations.GetRateByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRateByIdResponse>;
}
