import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ProductOptionValues {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a Product Option Value.
     */
    deleteProductsIdOptionsOptionIdValuesValueIdJson(req: operations.DeleteProductsIdOptionsOptionIdValuesValueIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductsIdOptionsOptionIdValuesValueIdJsonResponse>;
    /**
     * Retrieve all Product Option Values.
     */
    getProductsIdOptionsOptionIdValuesJson(req: operations.GetProductsIdOptionsOptionIdValuesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdOptionsOptionIdValuesJsonResponse>;
    /**
     * Count all Product Option Values.
     */
    getProductsIdOptionsOptionIdValuesCountJson(req: operations.GetProductsIdOptionsOptionIdValuesCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdOptionsOptionIdValuesCountJsonResponse>;
    /**
     * Retrieve a single Product Option Value.
     */
    getProductsIdOptionsOptionIdValuesValueIdJson(req: operations.GetProductsIdOptionsOptionIdValuesValueIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdOptionsOptionIdValuesValueIdJsonResponse>;
    /**
     * Create a new Product Option Value.
     */
    postProductsIdOptionsOptionIdValuesJson(req: operations.PostProductsIdOptionsOptionIdValuesJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostProductsIdOptionsOptionIdValuesJsonResponse>;
    /**
     * Modify an existing Product Option Value.
     */
    putProductsIdOptionsOptionIdValuesValueIdJson(req: operations.PutProductsIdOptionsOptionIdValuesValueIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutProductsIdOptionsOptionIdValuesValueIdJsonResponse>;
}
