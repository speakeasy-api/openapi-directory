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
     * Delete category
     *
     * @remarks
     * Deletes a particular category by its ID. This will delete all budgets within the category, and uncategorize all transactions assigned to the category.
     */
    deleteCategoriesId(req: operations.DeleteCategoriesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCategoriesIdResponse>;
    /**
     * Get category
     *
     * @remarks
     * Gets a particular category by its ID.
     */
    getCategoriesId(req: operations.GetCategoriesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesIdResponse>;
    /**
     * List categories in user
     *
     * @remarks
     * Lists all categories belonging to a user by their ID.
     */
    getUsersIdCategories(req: operations.GetUsersIdCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdCategoriesResponse>;
    /**
     * Create category in user
     *
     * @remarks
     * Creates a category belonging to the user by their ID.
     */
    postUsersIdCategories(req: operations.PostUsersIdCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdCategoriesResponse>;
    /**
     * Update category
     *
     * @remarks
     * Updates a category by its ID.
     */
    putCategoriesId(req: operations.PutCategoriesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutCategoriesIdResponse>;
}
