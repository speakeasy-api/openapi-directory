import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ProductsOnline {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a product identifier
     *
     * @remarks
     * Creates a unique slug (identifier) for a product. The slug is used to create a product URL
     */
    createProductSlug(req: operations.CreateProductSlugRequest, security: operations.CreateProductSlugSecurity, config?: AxiosRequestConfig): Promise<operations.CreateProductSlugResponse>;
}
