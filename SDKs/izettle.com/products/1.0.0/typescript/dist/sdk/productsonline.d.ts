import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ProductsOnline {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createProductSlug - Creates a product identifier
     *
     * Creates a unique slug (identifier) for a product. The slug is used to create a product URL
    **/
    createProductSlug(req: operations.CreateProductSlugRequest, config?: AxiosRequestConfig): Promise<operations.CreateProductSlugResponse>;
}
