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
     * Create a new category
     */
    createCategories(req: operations.CreateCategoriesRequest, security: operations.CreateCategoriesSecurity, config?: AxiosRequestConfig): Promise<operations.CreateCategoriesResponse>;
    /**
     * Delete a category
     */
    deleteCategory(req: operations.DeleteCategoryRequest, security: operations.DeleteCategorySecurity, config?: AxiosRequestConfig): Promise<operations.DeleteCategoryResponse>;
    /**
     * Retrieve all categories
     */
    getProductTypes(req: operations.GetProductTypesRequest, security: operations.GetProductTypesSecurity, config?: AxiosRequestConfig): Promise<operations.GetProductTypesResponse>;
    /**
     * Rename a category
     */
    renameCategory(req: operations.RenameCategoryRequest, security: operations.RenameCategorySecurity, config?: AxiosRequestConfig): Promise<operations.RenameCategoryResponse>;
}
