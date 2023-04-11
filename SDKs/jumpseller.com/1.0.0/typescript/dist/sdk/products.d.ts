import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Products {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an existing Product.
     */
    deleteProductsIdJson(req: operations.DeleteProductsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductsIdJsonResponse>;
    /**
     * Retrieve all Products.
     */
    getProductsJson(req: operations.GetProductsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsJsonResponse>;
    /**
     * Retrieves Products after the given id.
     */
    getProductsAfterIdJson(req: operations.GetProductsAfterIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsAfterIdJsonResponse>;
    /**
     * Retrieve Products filtered by category.
     */
    getProductsCategoryCategoryIdJson(req: operations.GetProductsCategoryCategoryIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsCategoryCategoryIdJsonResponse>;
    /**
     * Count Products filtered by category.
     */
    getProductsCategoryCategoryIdCountJson(req: operations.GetProductsCategoryCategoryIdCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsCategoryCategoryIdCountJsonResponse>;
    /**
     * Count all Products.
     */
    getProductsCountJson(req: operations.GetProductsCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsCountJsonResponse>;
    /**
     * Retrieve a Product List from a query.
     *
     * @remarks
     * Endpoint example:
     *
     * ```text
     * https://api.jumpseller.com/v1/products/search.json?login=XXXXXX&authtoken=XXXXX&query=test&fields=name,description
     * ```
     */
    getProductsSearchJson(req: operations.GetProductsSearchJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsSearchJsonResponse>;
    /**
     * Retrieve Products filtered by status.
     */
    getProductsStatusStatusJson(req: operations.GetProductsStatusStatusJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsStatusStatusJsonResponse>;
    /**
     * Count Products filtered by status.
     */
    getProductsStatusStatusCountJson(req: operations.GetProductsStatusStatusCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsStatusStatusCountJsonResponse>;
    /**
     * Retrieve a single Product.
     */
    getProductsIdJson(req: operations.GetProductsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdJsonResponse>;
    /**
     * Create a new Product.
     */
    postProductsJson(req: operations.PostProductsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostProductsJsonResponse>;
    /**
     * Modify an existing Product.
     */
    putProductsIdJson(req: operations.PutProductsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutProductsIdJsonResponse>;
}
