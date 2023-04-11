import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Order {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a specific buy order
     *
     * @remarks
     * Get a specific buy order
     */
    getBuyOrder(req: operations.GetBuyOrderRequest, config?: AxiosRequestConfig): Promise<operations.GetBuyOrderResponse>;
    /**
     * List the buy orders
     *
     * @remarks
     * List the buy orders
     */
    getBuyOrderList(req: operations.GetBuyOrderListRequest, config?: AxiosRequestConfig): Promise<operations.GetBuyOrderListResponse>;
    /**
     * List the buy orders of workgroup
     *
     * @remarks
     * List the buy orders of workgroup
     */
    getBuyOrderListOfWorkgroup(req: operations.GetBuyOrderListOfWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.GetBuyOrderListOfWorkgroupResponse>;
    /**
     * Get a specific buy order of workgroup
     *
     * @remarks
     * Get a specific buy order of workgroup
     */
    getBuyOrderOfWorkgroup(req: operations.GetBuyOrderOfWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.GetBuyOrderOfWorkgroupResponse>;
    /**
     * Get a specific buy/sell order
     *
     * @remarks
     * Get a specific buy/sell order
     */
    getOrder(req: operations.GetOrderRequest, config?: AxiosRequestConfig): Promise<operations.GetOrderResponse>;
    /**
     * Get a specific sell order
     *
     * @remarks
     * Get a specific sell order
     */
    getSellOrder(req: operations.GetSellOrderRequest, config?: AxiosRequestConfig): Promise<operations.GetSellOrderResponse>;
    /**
     * List the sell orders
     *
     * @remarks
     * List the sell orders
     */
    getSellOrderList(req: operations.GetSellOrderListRequest, config?: AxiosRequestConfig): Promise<operations.GetSellOrderListResponse>;
    /**
     * List the sell orders of workgrop
     *
     * @remarks
     * List the sell orders of workgrop
     */
    getSellOrderListOfWorkgroup(req: operations.GetSellOrderListOfWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.GetSellOrderListOfWorkgroupResponse>;
    /**
     * Get a specific sell order
     *
     * @remarks
     * Get a specific sell order
     */
    getSellOrderOfWorkgroup(req: operations.GetSellOrderOfWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.GetSellOrderOfWorkgroupResponse>;
    /**
     * Create a quick buy order
     *
     * @remarks
     * Create a quick buy order
     */
    postBuyOrderJson(req: operations.PostBuyOrderJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostBuyOrderJsonResponse>;
    /**
     * Create a quick buy order
     *
     * @remarks
     * Create a quick buy order
     */
    postBuyOrderRaw(req: operations.PostBuyOrderRawRequest, config?: AxiosRequestConfig): Promise<operations.PostBuyOrderRawResponse>;
    /**
     * Update a specific buy order
     *
     * @remarks
     * Update a specific buy order
     */
    putBuyOrderJson(req: operations.PutBuyOrderJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutBuyOrderJsonResponse>;
    /**
     * Update a specific buy order
     *
     * @remarks
     * Update a specific buy order
     */
    putBuyOrderRaw(req: operations.PutBuyOrderRawRequest, config?: AxiosRequestConfig): Promise<operations.PutBuyOrderRawResponse>;
    /**
     * Update / Accept or Reject a specific sell order
     *
     * @remarks
     * Update / Accept or Reject a specific sell order
     */
    putSellOrderJson(req: operations.PutSellOrderJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutSellOrderJsonResponse>;
    /**
     * Update / Accept or Reject a specific sell order
     *
     * @remarks
     * Update / Accept or Reject a specific sell order
     */
    putSellOrderRaw(req: operations.PutSellOrderRawRequest, config?: AxiosRequestConfig): Promise<operations.PutSellOrderRawResponse>;
}
