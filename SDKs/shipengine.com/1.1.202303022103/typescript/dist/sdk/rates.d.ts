import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Make sure you ship as cost-effectively as possible by [quickly comparing rates](https://www.shipengine.com/docs/rates/) using the ShipEngine Rates API. As long as you have the carrier connected to your account, you'll be able to see and compare different rates and services.
 *
 * @remarks
 *
 *
 * @see {@link https://www.shipengine.com/docs/rates/} - This quick start guide shows you how to get shipping rates for multiple carriers so you can choose the fastest, cheapest, or most reliable option.
 *
 */
export declare class Rates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Shipping Rates
     *
     * @remarks
     * It's not uncommon that you want to give your customer the choice between whether they want to ship the fastest, cheapest, or the most trusted route. Most companies don't solely ship things using a single shipping option;
     * so we provide functionality to show you all your options!
     *
     */
    calculateRates(req: shared.CalculateRatesRequestBody, config?: AxiosRequestConfig): Promise<operations.CalculateRatesResponse>;
    /**
     * Get Bulk Rates
     *
     * @remarks
     * Get Bulk Shipment Rates
     */
    compareBulkRates(req: shared.CompareBulkRatesRequestBody, config?: AxiosRequestConfig): Promise<operations.CompareBulkRatesResponse>;
    /**
     * Estimate Rates
     *
     * @remarks
     * Get Rate Estimates
     */
    estimateRates(req: shared.EstimateRatesRequestBody, config?: AxiosRequestConfig): Promise<operations.EstimateRatesResponse>;
    /**
     * Get Rate By ID
     *
     * @remarks
     * Retrieve a previously queried rate by its ID
     */
    getRateById(req: operations.GetRateByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRateByIdResponse>;
}
