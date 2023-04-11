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
     * Retrieve all Orders.
     */
    getOrdersJson(req: operations.GetOrdersJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetOrdersJsonResponse>;
    /**
     * Retrieve orders filtered by Order Id.
     *
     * @remarks
     * For example the GET /orders/after/5000 will return Order 5001, 5002, 5003, etc.
     */
    getOrdersAfterIdJson(req: operations.GetOrdersAfterIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetOrdersAfterIdJsonResponse>;
    /**
     * Count all Orders.
     */
    getOrdersCountJson(req: operations.GetOrdersCountJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetOrdersCountJsonResponse>;
    /**
     * Retrieve orders filtered by status.
     */
    getOrdersStatusStatusJson(req: operations.GetOrdersStatusStatusJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetOrdersStatusStatusJsonResponse>;
    /**
     * Retrieve a single Order.
     */
    getOrdersIdJson(req: operations.GetOrdersIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetOrdersIdJsonResponse>;
    /**
     * Retrieve all Order History.
     */
    getOrdersIdHistoryJson(req: operations.GetOrdersIdHistoryJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetOrdersIdHistoryJsonResponse>;
    /**
     * Create a new Order.
     *
     * @remarks
     * Orders created externally keep the given order product's values (bypassing internal promotion or product amounts).
     */
    postOrdersJson(req: operations.PostOrdersJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostOrdersJsonResponse>;
    /**
     * Create a new Order History Entry.
     */
    postOrdersIdHistoryJson(req: operations.PostOrdersIdHistoryJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostOrdersIdHistoryJsonResponse>;
    /**
     * Modify an existing Order.
     *
     * @remarks
     * Only `status`, `shipment_status`, `tracking_number`, `tracking_company`, `tracking_url`, `additional_information` and `additional_fields` are available for update. An email is send if `shipment_status` changes.
     */
    putOrdersIdJson(req: operations.PutOrdersIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutOrdersIdJsonResponse>;
}
