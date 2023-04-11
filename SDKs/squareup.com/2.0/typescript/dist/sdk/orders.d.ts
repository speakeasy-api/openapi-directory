import * as operations from "./models/operations";
import * as shared from "./models/shared";
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
     * BatchRetrieveOrders
     *
     * @remarks
     * Retrieves a set of [orders](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) by their IDs.
     *
     * If a given order ID does not exist, the ID is ignored instead of generating an error.
     */
    batchRetrieveOrders(req: shared.BatchRetrieveOrdersRequest, security: operations.BatchRetrieveOrdersSecurity, config?: AxiosRequestConfig): Promise<operations.BatchRetrieveOrdersResponse>;
    /**
     * CalculateOrder
     *
     * @remarks
     * Enables applications to preview order pricing without creating an order.
     */
    calculateOrder(req: shared.CalculateOrderRequest, security: operations.CalculateOrderSecurity, config?: AxiosRequestConfig): Promise<operations.CalculateOrderResponse>;
    /**
     * CreateOrder
     *
     * @remarks
     * Creates a new [order](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) that can include information about products for
     * purchase and settings to apply to the purchase.
     *
     * To pay for a created order, see
     * [Pay for Orders](https://developer.squareup.com/docs/orders-api/pay-for-orders).
     *
     * You can modify open orders using the [UpdateOrder](https://developer.squareup.com/reference/square_2021-08-18/orders-api/update-order) endpoint.
     */
    createOrder(req: shared.CreateOrderRequest, security: operations.CreateOrderSecurity, config?: AxiosRequestConfig): Promise<operations.CreateOrderResponse>;
    /**
     * PayOrder
     *
     * @remarks
     * Pay for an [order](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) using one or more approved [payments](https://developer.squareup.com/reference/square_2021-08-18/objects/Payment)
     * or settle an order with a total of `0`.
     *
     * The total of the `payment_ids` listed in the request must be equal to the order
     * total. Orders with a total amount of `0` can be marked as paid by specifying an empty
     * array of `payment_ids` in the request.
     *
     * To be used with `PayOrder`, a payment must:
     *
     * - Reference the order by specifying the `order_id` when [creating the payment](https://developer.squareup.com/reference/square_2021-08-18/payments-api/create-payment).
     * Any approved payments that reference the same `order_id` not specified in the
     * `payment_ids` is canceled.
     * - Be approved with [delayed capture](https://developer.squareup.com/docs/payments-api/take-payments#delayed-capture).
     * Using a delayed capture payment with `PayOrder` completes the approved payment.
     */
    payOrder(req: operations.PayOrderRequest, security: operations.PayOrderSecurity, config?: AxiosRequestConfig): Promise<operations.PayOrderResponse>;
    /**
     * SearchOrders
     *
     * @remarks
     * Search all orders for one or more locations. Orders include all sales,
     * returns, and exchanges regardless of how or when they entered the Square
     * ecosystem (such as Point of Sale, Invoices, and Connect APIs).
     *
     * `SearchOrders` requests need to specify which locations to search and define a
     * [SearchOrdersQuery](https://developer.squareup.com/reference/square_2021-08-18/objects/SearchOrdersQuery) object that controls
     * how to sort or filter the results. Your `SearchOrdersQuery` can:
     *
     *   Set filter criteria.
     *   Set the sort order.
     *   Determine whether to return results as complete `Order` objects or as
     * [OrderEntry](https://developer.squareup.com/reference/square_2021-08-18/objects/OrderEntry) objects.
     *
     * Note that details for orders processed with Square Point of Sale while in
     * offline mode might not be transmitted to Square for up to 72 hours. Offline
     * orders have a `created_at` value that reflects the time the order was created,
     * not the time it was subsequently transmitted to Square.
     */
    searchOrders(req: shared.SearchOrdersRequest, security: operations.SearchOrdersSecurity, config?: AxiosRequestConfig): Promise<operations.SearchOrdersResponse>;
    /**
     * RetrieveOrder
     *
     * @remarks
     * Retrieves an [Order](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) by ID.
     */
    getV2OrdersOrderId(req: operations.GetV2OrdersOrderIdRequest, security: operations.GetV2OrdersOrderIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetV2OrdersOrderIdResponse>;
    /**
     * UpdateOrder
     *
     * @remarks
     * Updates an open [order](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) by adding, replacing, or deleting
     * fields. Orders with a `COMPLETED` or `CANCELED` state cannot be updated.
     *
     * An `UpdateOrder` request requires the following:
     *
     * - The `order_id` in the endpoint path, identifying the order to update.
     * - The latest `version` of the order to update.
     * - The [sparse order](https://developer.squareup.com/docs/orders-api/manage-orders#sparse-order-objects)
     * containing only the fields to update and the version to which the update is
     * being applied.
     * - If deleting fields, the [dot notation paths](https://developer.squareup.com/docs/orders-api/manage-orders#on-dot-notation)
     * identifying the fields to clear.
     *
     * To pay for an order, see
     * [Pay for Orders](https://developer.squareup.com/docs/orders-api/pay-for-orders).
     */
    putV2OrdersOrderId(req: operations.PutV2OrdersOrderIdRequest, security: operations.PutV2OrdersOrderIdSecurity, config?: AxiosRequestConfig): Promise<operations.PutV2OrdersOrderIdResponse>;
}
