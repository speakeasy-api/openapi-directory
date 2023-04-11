import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CategoryRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List category rules in user
     *
     * @remarks
     * Lists all category rules belonging to a user by their ID.
     */
    getUsersIdCategoryRules(req: operations.GetUsersIdCategoryRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdCategoryRulesResponse>;
    /**
     * Create category rule in category
     *
     * @remarks
     * Creates a rule to allocate a category to transactions.
     */
    postCategoriesIdCategoryRules(req: operations.PostCategoriesIdCategoryRulesRequest, config?: AxiosRequestConfig): Promise<operations.PostCategoriesIdCategoryRulesResponse>;
}
