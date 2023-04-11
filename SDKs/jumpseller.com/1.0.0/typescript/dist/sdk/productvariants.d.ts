import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ProductVariants {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve all Product Variants.
     */
    getProductsIdVariantsJson(req: operations.GetProductsIdVariantsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdVariantsJsonResponse>;
    /**
     * Count all Product Variants.
     */
    getProductsIdVariantsCountJson(req: operations.GetProductsIdVariantsCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdVariantsCountJsonResponse>;
    /**
     * Retrieve a single Product Variant.
     */
    getProductsIdVariantsVariantIdJson(req: operations.GetProductsIdVariantsVariantIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsIdVariantsVariantIdJsonResponse>;
    /**
     * Create a new Product Variant.
     */
    postProductsIdVariantsJson(req: operations.PostProductsIdVariantsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostProductsIdVariantsJsonResponse>;
    /**
     * Modify an existing Product Variant.
     */
    putProductsIdVariantsVariantIdJson(req: operations.PutProductsIdVariantsVariantIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutProductsIdVariantsVariantIdJsonResponse>;
}
