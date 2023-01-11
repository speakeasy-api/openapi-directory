import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Taxes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createTaxRates - Creates new tax rates
    **/
    createTaxRates(req: operations.CreateTaxRatesRequest, config?: AxiosRequestConfig): Promise<operations.CreateTaxRatesResponse>;
    /**
     * deleteTaxRate - Deletes a single tax rate
    **/
    deleteTaxRate(req: operations.DeleteTaxRateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTaxRateResponse>;
    /**
     * getProductCountForAllTaxes - Gets all tax rates and a count of products associated with each
    **/
    getProductCountForAllTaxes(req: operations.GetProductCountForAllTaxesRequest, config?: AxiosRequestConfig): Promise<operations.GetProductCountForAllTaxesResponse>;
    /**
     * getTaxRate - Gets a single tax rate
    **/
    getTaxRate(req: operations.GetTaxRateRequest, config?: AxiosRequestConfig): Promise<operations.GetTaxRateResponse>;
    /**
     * getTaxRates - Gets all tax rates available
    **/
    getTaxRates(req: operations.GetTaxRatesRequest, config?: AxiosRequestConfig): Promise<operations.GetTaxRatesResponse>;
    /**
     * getTaxSettings - Gets the organization tax settings
    **/
    getTaxSettings(req: operations.GetTaxSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetTaxSettingsResponse>;
    /**
     * setTaxationMode - Updates the organization tax settings
    **/
    setTaxationMode(req: operations.SetTaxationModeRequest, config?: AxiosRequestConfig): Promise<operations.SetTaxationModeResponse>;
    /**
     * updateTaxRate - Updates a single tax rate
    **/
    updateTaxRate(req: operations.UpdateTaxRateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTaxRateResponse>;
}
