import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Products {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * countAllProducts - Retrieves the count of existing products
    **/
    countAllProducts(req: operations.CountAllProductsRequest, config?: AxiosRequestConfig): Promise<operations.CountAllProductsResponse>;
    /**
     * createProduct - Creates a new product
    **/
    createProduct(req: operations.CreateProductRequest, config?: AxiosRequestConfig): Promise<operations.CreateProductResponse>;
    /**
     * deleteProduct - Deletes a single product
    **/
    deleteProduct(req: operations.DeleteProductRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductResponse>;
    /**
     * deleteProducts - Deletes a list of products
    **/
    deleteProducts(req: operations.DeleteProductsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProductsResponse>;
    /**
     * getAllOptions - Retrieves an aggregate of active Options in the library
    **/
    getAllOptions(req: operations.GetAllOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllOptionsResponse>;
    /**
     * getAllProductsInPos - Retrieves all products visible in POS
    **/
    getAllProductsInPos(req: operations.GetAllProductsInPosRequest, config?: AxiosRequestConfig): Promise<operations.GetAllProductsInPosResponse>;
    /**
     * getAllProductsV2 - Retrieves all products visible in POS – v2
    **/
    getAllProductsV2(req: operations.GetAllProductsV2Request, config?: AxiosRequestConfig): Promise<operations.GetAllProductsV2Response>;
    /**
     * getProduct - Retrieves a single product
     *
     * Get the full product with the provided UUID. The method supports conditional GET through providing a HttpHeaders.IF_NONE_MATCH header. If the conditional prerequisite is fullfilled, the full product is returned, otherwise a 304 not modified will be returned with an empty body.
    **/
    getProduct(req: operations.GetProductRequest, config?: AxiosRequestConfig): Promise<operations.GetProductResponse>;
    /**
     * updateProduct - Updates a single product
     *
     * Updates a product entity using JSON merge patch (https://tools.ietf.org/html/rfc7386). This means that only included fields will be changed: null values removes the field on the target entity, and other values updates the field. Conditional updates are supported through the HttpHeaders.IF_MATCH header. If the conditional prerequisite is fullfilled, the product is updated: otherwise a 412 (precondition failed) will be returned with an empty body.
    **/
    updateProduct(req: operations.UpdateProductRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProductResponse>;
}
