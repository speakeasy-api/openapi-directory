import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ProductCustomFields {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete value of Product Custom Field
     */
    deleteProductsProductIdFieldsFieldIdJson(req: operations.DeleteProductsProductIdFieldsFieldIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductsProductIdFieldsFieldIdJsonResponse>;
    /**
     * Retrieve all Product Custom Fields
     */
    getProductsIdFieldsJson(req: operations.GetProductsIdFieldsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdFieldsJsonResponse>;
    /**
     * Count all Product Custom Fields.
     */
    getProductsIdFieldsCountJson(req: operations.GetProductsIdFieldsCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdFieldsCountJsonResponse>;
    /**
     * Add an existing Custom Field to a Product.
     */
    postProductsIdFieldsJson(req: operations.PostProductsIdFieldsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostProductsIdFieldsJsonResponse>;
    /**
     * Update value of Product Custom Field
     */
    putProductsProductIdFieldsFieldIdJson(req: operations.PutProductsProductIdFieldsFieldIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutProductsProductIdFieldsFieldIdJsonResponse>;
}
