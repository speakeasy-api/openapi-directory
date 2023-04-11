import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Categories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get category
     *
     * @remarks
     * Returns the category with this slug
     */
    getCategory(req: operations.GetCategoryRequest, security: operations.GetCategorySecurity, config?: AxiosRequestConfig): Promise<operations.GetCategoryResponse>;
    /**
     * Get docs for category
     *
     * @remarks
     * Returns the docs and children docs within this category
     */
    getCategoryDocs(req: operations.GetCategoryDocsRequest, security: operations.GetCategoryDocsSecurity, config?: AxiosRequestConfig): Promise<operations.GetCategoryDocsResponse>;
}
