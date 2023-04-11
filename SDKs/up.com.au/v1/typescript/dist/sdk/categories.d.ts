import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Categories enable understanding where your money goes by driving
 *
 * @remarks
 * powerful insights in Up. All categories in Up are pre-defined
 * and are automatically assigned to new purchases in most cases. A
 * parent-child relationship is used to represent categories,
 * however parent categories cannot be directly assigned to
 * transactions.
 *
 */
export declare class Categories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List categories
     *
     * @remarks
     * Retrieve a list of all categories and their ancestry. The returned list
     * is not paginated.
     *
     */
    getCategories(req: operations.GetCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesResponse>;
    /**
     * Retrieve category
     *
     * @remarks
     * Retrieve a specific category by providing its unique identifier.
     *
     */
    getCategoriesId(req: operations.GetCategoriesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesIdResponse>;
    /**
     * Categorize transaction
     *
     * @remarks
     * Updates the category associated with a transaction. Only transactions
     * for which `isCategorizable` is set to true support this operation. The
     * `id` is taken from the list exposed on `/categories` and cannot be one of
     * the top-level (parent) categories. To de-categorize a transaction, set
     * the entire `data` key to `null`. An HTTP `204` is returned on success.
     * The associated category, along with its request URL is also exposed via
     * the `category` relationship on the transaction resource returned from
     * `/transactions/{id}`.
     *
     */
    patchTransactionsTransactionIdRelationshipsCategory(req: operations.PatchTransactionsTransactionIdRelationshipsCategoryRequest, config?: AxiosRequestConfig): Promise<operations.PatchTransactionsTransactionIdRelationshipsCategoryResponse>;
}
