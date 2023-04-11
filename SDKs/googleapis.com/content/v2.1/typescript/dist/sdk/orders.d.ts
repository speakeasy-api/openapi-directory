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
     * Marks an order as acknowledged.
     */
    contentOrdersAcknowledge(req: operations.ContentOrdersAcknowledgeRequest, security: operations.ContentOrdersAcknowledgeSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrdersAcknowledgeResponse>;
    /**
     * Sandbox only. Moves a test order from state "`inProgress`" to state "`pendingShipment`".
     */
    contentOrdersAdvancetestorder(req: operations.ContentOrdersAdvancetestorderRequest, security: operations.ContentOrdersAdvancetestorderSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrdersAdvancetestorderResponse>;
    /**
     * Cancels all line items in an order, making a full refund.
     */
    contentOrdersCancel(req: operations.ContentOrdersCancelRequest, security: operations.ContentOrdersCancelSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrdersCancelResponse>;
    /**
     * Cancels a line item, making a full refund.
     */
    contentOrdersCancellineitem(req: operations.ContentOrdersCancellineitemRequest, security: operations.ContentOrdersCancellineitemSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrdersCancellineitemResponse>;
    /**
     * Sandbox only. Cancels a test order for customer-initiated cancellation.
     */
    contentOrdersCanceltestorderbycustomer(req: operations.ContentOrdersCanceltestorderbycustomerRequest, security: operations.ContentOrdersCanceltestorderbycustomerSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrdersCanceltestorderbycustomerResponse>;
    /**
     * Capture funds from the customer for the current order total. This method should be called after the merchant verifies that they are able and ready to start shipping the order. This method blocks until a response is received from the payment processsor. If this method succeeds, the merchant is guaranteed to receive funds for the order after shipment. If the request fails, it can be retried or the order may be cancelled. This method cannot be called after the entire order is already shipped. A rejected error code is returned when the payment service provider has declined the charge. This indicates a problem between the PSP and either the merchant's or customer's account. Sometimes this error will be resolved by the customer. We recommend retrying these errors once per day or cancelling the order with reason `failedToCaptureFunds` if the items cannot be held.
     */
    contentOrdersCaptureOrder(req: operations.ContentOrdersCaptureOrderRequest, security: operations.ContentOrdersCaptureOrderSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrdersCaptureOrderResponse>;
    /**
     * Sandbox only. Creates a test order.
     */
    contentOrdersCreatetestorder(req: operations.ContentOrdersCreatetestorderRequest, security: operations.ContentOrdersCreatetestorderSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrdersCreatetestorderResponse>;
    /**
     * Sandbox only. Creates a test return.
     */
    contentOrdersCreatetestreturn(req: operations.ContentOrdersCreatetestreturnRequest, security: operations.ContentOrdersCreatetestreturnSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrdersCreatetestreturnResponse>;
    /**
     * Retrieves an order from your Merchant Center account.
     */
    contentOrdersGet(req: operations.ContentOrdersGetRequest, security: operations.ContentOrdersGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrdersGetResponse>;
    /**
     * Retrieves an order using merchant order ID.
     */
    contentOrdersGetbymerchantorderid(req: operations.ContentOrdersGetbymerchantorderidRequest, security: operations.ContentOrdersGetbymerchantorderidSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrdersGetbymerchantorderidResponse>;
    /**
     * Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
     */
    contentOrdersGettestordertemplate(req: operations.ContentOrdersGettestordertemplateRequest, security: operations.ContentOrdersGettestordertemplateSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrdersGettestordertemplateResponse>;
    /**
     * Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (for example, cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding through Google then through an in-store return.
     */
    contentOrdersInstorerefundlineitem(req: operations.ContentOrdersInstorerefundlineitemRequest, security: operations.ContentOrdersInstorerefundlineitemSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrdersInstorerefundlineitemResponse>;
    /**
     * Lists the orders in your Merchant Center account.
     */
    contentOrdersList(req: operations.ContentOrdersListRequest, security: operations.ContentOrdersListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrdersListResponse>;
    /**
     * Issues a partial or total refund for items and shipment.
     */
    contentOrdersRefunditem(req: operations.ContentOrdersRefunditemRequest, security: operations.ContentOrdersRefunditemSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrdersRefunditemResponse>;
    /**
     * Issues a partial or total refund for an order.
     */
    contentOrdersRefundorder(req: operations.ContentOrdersRefundorderRequest, security: operations.ContentOrdersRefundorderSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrdersRefundorderResponse>;
    /**
     * Rejects return on an line item.
     */
    contentOrdersRejectreturnlineitem(req: operations.ContentOrdersRejectreturnlineitemRequest, security: operations.ContentOrdersRejectreturnlineitemSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrdersRejectreturnlineitemResponse>;
    /**
     * Returns and refunds a line item. Note that this method can only be called on fully shipped orders. The Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.
     */
    contentOrdersReturnrefundlineitem(req: operations.ContentOrdersReturnrefundlineitemRequest, security: operations.ContentOrdersReturnrefundlineitemSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrdersReturnrefundlineitemResponse>;
    /**
     * Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided through other methods. Submitted key-value pairs can be retrieved as part of the orders resource.
     */
    contentOrdersSetlineitemmetadata(req: operations.ContentOrdersSetlineitemmetadataRequest, security: operations.ContentOrdersSetlineitemmetadataSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrdersSetlineitemmetadataResponse>;
    /**
     * Marks line item(s) as shipped.
     */
    contentOrdersShiplineitems(req: operations.ContentOrdersShiplineitemsRequest, security: operations.ContentOrdersShiplineitemsSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrdersShiplineitemsResponse>;
    /**
     * Updates ship by and delivery by dates for a line item.
     */
    contentOrdersUpdatelineitemshippingdetails(req: operations.ContentOrdersUpdatelineitemshippingdetailsRequest, security: operations.ContentOrdersUpdatelineitemshippingdetailsSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrdersUpdatelineitemshippingdetailsResponse>;
    /**
     * Updates the merchant order ID for a given order.
     */
    contentOrdersUpdatemerchantorderid(req: operations.ContentOrdersUpdatemerchantorderidRequest, security: operations.ContentOrdersUpdatemerchantorderidSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrdersUpdatemerchantorderidResponse>;
    /**
     * Updates a shipment's status, carrier, and/or tracking ID.
     */
    contentOrdersUpdateshipment(req: operations.ContentOrdersUpdateshipmentRequest, security: operations.ContentOrdersUpdateshipmentSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrdersUpdateshipmentResponse>;
}
