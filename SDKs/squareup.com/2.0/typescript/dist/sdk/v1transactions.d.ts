import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class V1Transactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CreateRefund
     *
     * @remarks
     * Issues a refund for a previously processed payment. You must issue
     * a refund within 60 days of the associated payment.
     *
     * You cannot issue a partial refund for a split tender payment. You must
     * instead issue a full or partial refund for a particular tender, by
     * providing the applicable tender id to the V1CreateRefund endpoint.
     * Issuing a full refund for a split tender payment refunds all tenders
     * associated with the payment.
     *
     * Issuing a refund for a card payment is not reversible. For development
     * purposes, you can create fake cash payments in Square Point of Sale and
     * refund them.
     */
    createRefund(req: operations.CreateRefundRequest, security: operations.CreateRefundSecurity, config?: AxiosRequestConfig): Promise<operations.CreateRefundResponse>;
    /**
     * ListOrders
     *
     * @remarks
     * Provides summary information for a merchant's online store orders.
     */
    listOrders(req: operations.ListOrdersRequest, security: operations.ListOrdersSecurity, config?: AxiosRequestConfig): Promise<operations.ListOrdersResponse>;
    /**
     * ListPayments
     *
     * @remarks
     * Provides summary information for all payments taken for a given
     * Square account during a date range. Date ranges cannot exceed 1 year in
     * length. See Date ranges for details of inclusive and exclusive dates.
     *
     * *Note**: Details for payments processed with Square Point of Sale while
     * in offline mode may not be transmitted to Square for up to 72 hours.
     * Offline payments have a `created_at` value that reflects the time the
     * payment was originally processed, not the time it was subsequently
     * transmitted to Square. Consequently, the ListPayments endpoint might
     * list an offline payment chronologically between online payments that
     * were seen in a previous request.
     */
    listPayments(req: operations.ListPaymentsRequest, security: operations.ListPaymentsSecurity, config?: AxiosRequestConfig): Promise<operations.ListPaymentsResponse>;
    /**
     * ListRefunds
     *
     * @remarks
     * Provides the details for all refunds initiated by a merchant or any of the merchant's mobile staff during a date range. Date ranges cannot exceed one year in length.
     */
    listRefunds(req: operations.ListRefundsRequest, security: operations.ListRefundsSecurity, config?: AxiosRequestConfig): Promise<operations.ListRefundsResponse>;
    /**
     * ListSettlements
     *
     * @remarks
     * Provides summary information for all deposits and withdrawals
     * initiated by Square to a linked bank account during a date range. Date
     * ranges cannot exceed one year in length.
     *
     * *Note**: the ListSettlements endpoint does not provide entry
     * information.
     */
    listSettlements(req: operations.ListSettlementsRequest, security: operations.ListSettlementsSecurity, config?: AxiosRequestConfig): Promise<operations.ListSettlementsResponse>;
    /**
     * RetrieveOrder
     *
     * @remarks
     * Provides comprehensive information for a single online store order, including the order's history.
     */
    retrieveOrder(req: operations.RetrieveOrderRequest, security: operations.RetrieveOrderSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveOrderResponse>;
    /**
     * RetrievePayment
     *
     * @remarks
     * Provides comprehensive information for a single payment.
     */
    retrievePayment(req: operations.RetrievePaymentRequest, security: operations.RetrievePaymentSecurity, config?: AxiosRequestConfig): Promise<operations.RetrievePaymentResponse>;
    /**
     * RetrieveSettlement
     *
     * @remarks
     * Provides comprehensive information for a single settlement.
     *
     * The returned `Settlement` objects include an `entries` field that lists
     * the transactions that contribute to the settlement total. Most
     * settlement entries correspond to a payment payout, but settlement
     * entries are also generated for less common events, like refunds, manual
     * adjustments, or chargeback holds.
     *
     * Square initiates its regular deposits as indicated in the
     * [Deposit Options with Square](https://squareup.com/help/us/en/article/3807)
     * help article. Details for a regular deposit are usually not available
     * from Connect API endpoints before 10 p.m. PST the same day.
     *
     * Square does not know when an initiated settlement **completes**, only
     * whether it has failed. A completed settlement is typically reflected in
     * a bank account within 3 business days, but in exceptional cases it may
     * take longer.
     */
    retrieveSettlement(req: operations.RetrieveSettlementRequest, security: operations.RetrieveSettlementSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveSettlementResponse>;
    /**
     * UpdateOrder
     *
     * @remarks
     * Updates the details of an online store order. Every update you perform on an order corresponds to one of three actions:
     */
    updateOrder(req: operations.UpdateOrderRequest, security: operations.UpdateOrderSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateOrderResponse>;
}
