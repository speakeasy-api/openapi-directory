import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Customers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an existing Customer.
     */
    deleteCustomersIdJson(req: operations.DeleteCustomersIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomersIdJsonResponse>;
    /**
     * Retrieve all Customers.
     */
    getCustomersJson(req: operations.GetCustomersJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomersJsonResponse>;
    /**
     * Count all Customers.
     */
    getCustomersCountJson(req: operations.GetCustomersCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomersCountJsonResponse>;
    /**
     * Retrieve a single Customer by email.
     */
    getCustomersEmailEmailJson(req: operations.GetCustomersEmailEmailJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomersEmailEmailJsonResponse>;
    /**
     * Retrieve a single Customer by id.
     */
    getCustomersIdJson(req: operations.GetCustomersIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomersIdJsonResponse>;
    /**
     * Create a new Customer.
     */
    postCustomersJson(req: operations.PostCustomersJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostCustomersJsonResponse>;
    /**
     * Update a new Customer.
     */
    putCustomersIdJson(req: operations.PutCustomersIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutCustomersIdJsonResponse>;
}
