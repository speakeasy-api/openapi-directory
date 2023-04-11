import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Returns prices for resources.
 */
export declare class Pricing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all prices
     *
     * @remarks
     * Returns prices for all resources available on the platform. VAT and currency of the Project owner are used for calculations.
     *
     * Both net and gross prices are included in the response.
     *
     */
    getPricing(config?: AxiosRequestConfig): Promise<operations.GetPricingResponse>;
}
