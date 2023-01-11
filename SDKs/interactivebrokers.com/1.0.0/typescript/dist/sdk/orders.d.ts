import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Orders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteAccountsAccountOrdersCustomerOrderId - Cancel Order
     *
     * Cancels the order with the referenced Customer Order ID for the account passed in the URL.
    **/
    deleteAccountsAccountOrdersCustomerOrderId(req: operations.DeleteAccountsAccountOrdersCustomerOrderIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAccountsAccountOrdersCustomerOrderIdResponse>;
    /**
     * getAccountsAccountOrders - Open Orders
     *
     * Returns a list of orders for the account passed in the URL
    **/
    getAccountsAccountOrders(req: operations.GetAccountsAccountOrdersRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountOrdersResponse>;
    /**
     * getAccountsAccountOrdersCustomerOrderId - Return specific order info
     *
     * Returns the order with the referenced Customer Order ID for the account passed in the URL.
    **/
    getAccountsAccountOrdersCustomerOrderId(req: operations.GetAccountsAccountOrdersCustomerOrderIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountOrdersCustomerOrderIdResponse>;
    /**
     * postAccountsAccountOrders - Place Order
     *
     * Places order
    **/
    postAccountsAccountOrders(req: operations.PostAccountsAccountOrdersRequest, config?: AxiosRequestConfig): Promise<operations.PostAccountsAccountOrdersResponse>;
    /**
     * putAccountsAccountOrdersCustomerOrderId - Modify Order
     *
     * Allows the caller to modify the order with the referenced Customer Order ID specified in the URL. A separate Customer Order ID must be provided in the request body for the modification.
    **/
    putAccountsAccountOrdersCustomerOrderId(req: operations.PutAccountsAccountOrdersCustomerOrderIdRequest, config?: AxiosRequestConfig): Promise<operations.PutAccountsAccountOrdersCustomerOrderIdResponse>;
}
