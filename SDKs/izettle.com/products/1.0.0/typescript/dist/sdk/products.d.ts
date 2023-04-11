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
     * Retrieve the count of existing products
     */
    countAllProducts(req: operations.CountAllProductsRequest, security: operations.CountAllProductsSecurity, config?: AxiosRequestConfig): Promise<operations.CountAllProductsResponse>;
    /**
     * Create a new product
     */
    createProduct(req: operations.CreateProductRequest, security: operations.CreateProductSecurity, config?: AxiosRequestConfig): Promise<operations.CreateProductResponse>;
    /**
     * Delete a single product
     */
    deleteProduct(req: operations.DeleteProductRequest, security: operations.DeleteProductSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteProductResponse>;
    /**
     * Delete a list of products
     */
    deleteProducts(req: operations.DeleteProductsRequest, security: operations.DeleteProductsSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteProductsResponse>;
    /**
     * Retrieve an aggregate of active Options in the library
     */
    getAllOptions(req: operations.GetAllOptionsRequest, security: operations.GetAllOptionsSecurity, config?: AxiosRequestConfig): Promise<operations.GetAllOptionsResponse>;
    /**
     * Retrieve all products visible in POS
     */
    getAllProductsInPos(req: operations.GetAllProductsInPosRequest, security: operations.GetAllProductsInPosSecurity, config?: AxiosRequestConfig): Promise<operations.GetAllProductsInPosResponse>;
    /**
     * Retrieve all products visible in POS – v2
     */
    getAllProductsV2(req: operations.GetAllProductsV2Request, security: operations.GetAllProductsV2Security, config?: AxiosRequestConfig): Promise<operations.GetAllProductsV2Response>;
    /**
     * Retrieve a single product
     *
     * @remarks
     * Get the full product with the provided UUID. The method supports conditional GET through providing a HttpHeaders.IF_NONE_MATCH header. If the conditional prerequisite is fullfilled, the full product is returned, otherwise a 304 not modified will be returned with an empty body.
     */
    getProduct(req: operations.GetProductRequest, security: operations.GetProductSecurity, config?: AxiosRequestConfig): Promise<operations.GetProductResponse>;
    /**
     * Update a single product
     *
     * @remarks
     * Updates a product entity using JSON merge patch (https://tools.ietf.org/html/rfc7386). This means that only included fields will be changed: null values removes the field on the target entity, and other values updates the field. Conditional updates are supported through the HttpHeaders.IF_MATCH header. If the conditional prerequisite is fullfilled, the product is updated: otherwise a 412 (precondition failed) will be returned with an empty body.
     */
    updateProduct(req: operations.UpdateProductRequest, security: operations.UpdateProductSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateProductResponse>;
}
