import * as operations from "./models/operations";
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
     * Retrieve all Taxes.
     */
    getTaxesJson(req: operations.GetTaxesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetTaxesJsonResponse>;
    /**
     * Retrieve a single Tax information.
     */
    getTaxesIdJson(req: operations.GetTaxesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetTaxesIdJsonResponse>;
    /**
     * Create a new Tax.
     */
    postTaxesJson(req: operations.PostTaxesJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostTaxesJsonResponse>;
}
