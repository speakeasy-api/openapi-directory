import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Customers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCustomer - Represents a customer
    **/
    getCustomer(req: operations.GetCustomerRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomerResponse>;
    /**
     * getCustomers - List all customers or find your own account
    **/
    getCustomers(config?: AxiosRequestConfig): Promise<operations.GetCustomersResponse>;
}
