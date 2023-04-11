import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Orders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Cancel Order
     *
     * @remarks
     * Cancels the order with the referenced Customer Order ID for the account passed in the URL.
     */
    deleteAccountsAccountOrdersCustomerOrderId(req: operations.DeleteAccountsAccountOrdersCustomerOrderIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAccountsAccountOrdersCustomerOrderIdResponse>;
    /**
     * Open Orders
     *
     * @remarks
     * Returns a list of orders for the account passed in the URL
     */
    getAccountsAccountOrders(req: operations.GetAccountsAccountOrdersRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountOrdersResponse>;
    /**
     * Return specific order info
     *
     * @remarks
     * Returns the order with the referenced Customer Order ID for the account passed in the URL.
     */
    getAccountsAccountOrdersCustomerOrderId(req: operations.GetAccountsAccountOrdersCustomerOrderIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountOrdersCustomerOrderIdResponse>;
    /**
     * Place Order
     *
     * @remarks
     * Places order
     */
    postAccountsAccountOrders(req: operations.PostAccountsAccountOrdersRequest, config?: AxiosRequestConfig): Promise<operations.PostAccountsAccountOrdersResponse>;
    /**
     * Modify Order
     *
     * @remarks
     * Allows the caller to modify the order with the referenced Customer Order ID specified in the URL. A separate Customer Order ID must be provided in the request body for the modification.
     */
    putAccountsAccountOrdersCustomerOrderId(req: operations.PutAccountsAccountOrdersCustomerOrderIdRequest, config?: AxiosRequestConfig): Promise<operations.PutAccountsAccountOrdersCustomerOrderIdResponse>;
}
