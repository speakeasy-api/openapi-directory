import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Product Module operations
 *
 * @see {@link https://netlicensing.io/wiki/product-module-services} - Product Module Services
 */
export declare class ProductModule {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Product Module
     *
     * @remarks
     * Creates a new Product Module
     */
    createProductModule(req: operations.CreateProductModuleRequestBody, security: operations.CreateProductModuleSecurity, config?: AxiosRequestConfig): Promise<operations.CreateProductModuleResponse>;
    /**
     * Delete Product Module
     *
     * @remarks
     * Delete a Product Module by 'number'
     */
    deleteProductModule(req: operations.DeleteProductModuleRequest, security: operations.DeleteProductModuleSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteProductModuleResponse>;
    /**
     * Get Product Module
     *
     * @remarks
     * Return a Product Module by 'productModuleNumber'
     */
    getProductModule(req: operations.GetProductModuleRequest, security: operations.GetProductModuleSecurity, config?: AxiosRequestConfig): Promise<operations.GetProductModuleResponse>;
    /**
     * List Product Modules
     *
     * @remarks
     * Return a list of all Product Modules for the current Vendor
     */
    listProductModules(config?: AxiosRequestConfig): Promise<operations.ListProductModulesResponse>;
    /**
     * Update Product Module
     *
     * @remarks
     * Sets the provided properties to a Product Module. Return an updated Product Module
     */
    updateProductModule(req: operations.UpdateProductModuleRequest, security: operations.UpdateProductModuleSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateProductModuleResponse>;
}
