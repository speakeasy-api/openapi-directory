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
     * Delete an existing Category.
     */
    deleteCategoriesIdJson(req: operations.DeleteCategoriesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCategoriesIdJsonResponse>;
    /**
     * Retrieve all Categories.
     */
    getCategoriesJson(req: operations.GetCategoriesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesJsonResponse>;
    /**
     * Count all Categories.
     */
    getCategoriesCountJson(req: operations.GetCategoriesCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesCountJsonResponse>;
    /**
     * Retrieve a single Category.
     */
    getCategoriesIdJson(req: operations.GetCategoriesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesIdJsonResponse>;
    /**
     * Create a new Category.
     *
     * @remarks
     * Category's permalink is automatically generated from the given category's name.
     */
    postCategoriesJson(req: operations.PostCategoriesJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostCategoriesJsonResponse>;
    /**
     * Modify an existing Category.
     */
    putCategoriesIdJson(req: operations.PutCategoriesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutCategoriesIdJsonResponse>;
}
