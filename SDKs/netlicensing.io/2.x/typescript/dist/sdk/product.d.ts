import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Product operations
 *
 * @see {@link https://netlicensing.io/wiki/product-services} - Product Services
 */
export declare class Product {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Product
     *
     * @remarks
     * Creates a new Product
     */
    createProduct(req: operations.CreateProductRequestBody, security: operations.CreateProductSecurity, config?: AxiosRequestConfig): Promise<operations.CreateProductResponse>;
    /**
     * Delete Product
     *
     * @remarks
     * Delete a Product by 'number'
     */
    deleteProduct(req: operations.DeleteProductRequest, security: operations.DeleteProductSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteProductResponse>;
    /**
     * List Products
     *
     * @remarks
     * Return a list of all configured Products for the current Vendor
     */
    listProducts(config?: AxiosRequestConfig): Promise<operations.ListProductsResponse>;
    /**
     * Get Product
     *
     * @remarks
     * Return a Product by 'productNumber'
     */
    productNumber(req: operations.ProductNumberRequest, security: operations.ProductNumberSecurity, config?: AxiosRequestConfig): Promise<operations.ProductNumberResponse>;
    /**
     * Update Product
     *
     * @remarks
     * Sets the provided properties to a Product. Return an updated Product
     */
    updateProduct(req: operations.UpdateProductRequest, security: operations.UpdateProductSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateProductResponse>;
}
