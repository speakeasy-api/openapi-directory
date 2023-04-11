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
     * /products
     *
     * @remarks
     * ### Get products
     *
     * Get a list of insurance [products](https://www.heraldapi.com/docs/products).
     */
    getProducts(req: operations.GetProductsRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsResponse>;
}
