import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Taxes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create new tax rates
     */
    createTaxRates(req: shared.TaxRatesCreateRequest, security: operations.CreateTaxRatesSecurity, config?: AxiosRequestConfig): Promise<operations.CreateTaxRatesResponse>;
    /**
     * Delete a single tax rate
     */
    deleteTaxRate(req: operations.DeleteTaxRateRequest, security: operations.DeleteTaxRateSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteTaxRateResponse>;
    /**
     * Get all tax rates and a count of products associated with each
     */
    getProductCountForAllTaxes(config?: AxiosRequestConfig): Promise<operations.GetProductCountForAllTaxesResponse>;
    /**
     * Get a single tax rate
     */
    getTaxRate(req: operations.GetTaxRateRequest, security: operations.GetTaxRateSecurity, config?: AxiosRequestConfig): Promise<operations.GetTaxRateResponse>;
    /**
     * Get all available tax rates
     */
    getTaxRates(config?: AxiosRequestConfig): Promise<operations.GetTaxRatesResponse>;
    /**
     * Get the organization tax settings
     */
    getTaxSettings(config?: AxiosRequestConfig): Promise<operations.GetTaxSettingsResponse>;
    /**
     * Update the organization tax settings
     */
    setTaxationMode(req: shared.TaxSettingsUpdateRequest, security: operations.SetTaxationModeSecurity, config?: AxiosRequestConfig): Promise<operations.SetTaxationModeResponse>;
    /**
     * Update a single tax rate
     */
    updateTaxRate(req: operations.UpdateTaxRateRequest, security: operations.UpdateTaxRateSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateTaxRateResponse>;
}
