import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ProductDigitalProducts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a Product DigitalProduct.
     */
    deleteProductsIdDigitalProductsDigitalProductIdJson(req: operations.DeleteProductsIdDigitalProductsDigitalProductIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductsIdDigitalProductsDigitalProductIdJsonResponse>;
    /**
     * Retrieve all Product DigitalProducts.
     */
    getProductsIdDigitalProductsJson(req: operations.GetProductsIdDigitalProductsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdDigitalProductsJsonResponse>;
    /**
     * Count all Product DigitalProducts.
     */
    getProductsIdDigitalProductsCountJson(req: operations.GetProductsIdDigitalProductsCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdDigitalProductsCountJsonResponse>;
    /**
     * Retrieve a single Product DigitalProduct.
     */
    getProductsIdDigitalProductsDigitalProductIdJson(req: operations.GetProductsIdDigitalProductsDigitalProductIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdDigitalProductsDigitalProductIdJsonResponse>;
    /**
     * Create a new Product DigitalProduct.
     */
    postProductsIdDigitalProductsJson(req: operations.PostProductsIdDigitalProductsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostProductsIdDigitalProductsJsonResponse>;
}
