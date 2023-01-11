import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Categories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCategory - Get category
     *
     * Returns the category with this slug
    **/
    getCategory(req: operations.GetCategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoryResponse>;
    /**
     * getCategoryDocs - Get docs for category
     *
     * Returns the docs and children docs within this category
    **/
    getCategoryDocs(req: operations.GetCategoryDocsRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoryDocsResponse>;
}
