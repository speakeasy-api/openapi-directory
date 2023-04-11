import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ProductImages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a Product Image.
     */
    deleteProductsIdImagesImageIdJson(req: operations.DeleteProductsIdImagesImageIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductsIdImagesImageIdJsonResponse>;
    /**
     * Retrieve all Product Images.
     */
    getProductsIdImagesJson(req: operations.GetProductsIdImagesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdImagesJsonResponse>;
    /**
     * Count all Product Images.
     */
    getProductsIdImagesCountJson(req: operations.GetProductsIdImagesCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdImagesCountJsonResponse>;
    /**
     * Retrieve a single Product Image.
     */
    getProductsIdImagesImageIdJson(req: operations.GetProductsIdImagesImageIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdImagesImageIdJsonResponse>;
    /**
     * Create a new Product Image.
     */
    postProductsIdImagesJson(req: operations.PostProductsIdImagesJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostProductsIdImagesJsonResponse>;
}
