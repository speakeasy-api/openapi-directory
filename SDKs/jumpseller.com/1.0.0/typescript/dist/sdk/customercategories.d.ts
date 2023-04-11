import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomerCategories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an existing CustomerCategory.
     */
    deleteCustomerCategoriesIdJson(req: operations.DeleteCustomerCategoriesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomerCategoriesIdJsonResponse>;
    /**
     * Delete Customers from an existing CustomerCategory.
     */
    deleteCustomerCategoriesIdCustomersJson(req: operations.DeleteCustomerCategoriesIdCustomersJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomerCategoriesIdCustomersJsonResponse>;
    /**
     * Retrieve all Customer Categories.
     */
    getCustomerCategoriesJson(req: operations.GetCustomerCategoriesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomerCategoriesJsonResponse>;
    /**
     * Retrieve a single CustomerCategory.
     */
    getCustomerCategoriesIdJson(req: operations.GetCustomerCategoriesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomerCategoriesIdJsonResponse>;
    /**
     * Retrieves the customers in a CustomerCategory.
     */
    getCustomerCategoriesIdCustomersJson(req: operations.GetCustomerCategoriesIdCustomersJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomerCategoriesIdCustomersJsonResponse>;
    /**
     * Create a new CustomerCategory.
     */
    postCustomerCategoriesJson(req: operations.PostCustomerCategoriesJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostCustomerCategoriesJsonResponse>;
    /**
     * Adds Customers to a CustomerCategory.
     */
    postCustomerCategoriesIdCustomersJson(req: operations.PostCustomerCategoriesIdCustomersJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostCustomerCategoriesIdCustomersJsonResponse>;
    /**
     * Update a CustomerCategory.
     */
    putCustomerCategoriesIdJson(req: operations.PutCustomerCategoriesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutCustomerCategoriesIdJsonResponse>;
}
