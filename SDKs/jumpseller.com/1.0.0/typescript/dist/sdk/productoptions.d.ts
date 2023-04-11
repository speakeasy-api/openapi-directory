import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ProductOptions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a Product Option.
     */
    deleteProductsIdOptionsOptionIdJson(req: operations.DeleteProductsIdOptionsOptionIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductsIdOptionsOptionIdJsonResponse>;
    /**
     * Retrieve all Product Options.
     */
    getProductsIdOptionsJson(req: operations.GetProductsIdOptionsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdOptionsJsonResponse>;
    /**
     * Count all Product Options.
     */
    getProductsIdOptionsCountJson(req: operations.GetProductsIdOptionsCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdOptionsCountJsonResponse>;
    /**
     * Retrieve a single Product Option.
     */
    getProductsIdOptionsOptionIdJson(req: operations.GetProductsIdOptionsOptionIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdOptionsOptionIdJsonResponse>;
    /**
     * Create a new Product Option.
     */
    postProductsIdOptionsJson(req: operations.PostProductsIdOptionsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostProductsIdOptionsJsonResponse>;
    /**
     * Modify an existing Product Option.
     */
    putProductsIdOptionsOptionIdJson(req: operations.PutProductsIdOptionsOptionIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutProductsIdOptionsOptionIdJsonResponse>;
}
