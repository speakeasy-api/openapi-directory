import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Transactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CaptureTransaction
     *
     * @remarks
     * Captures a transaction that was created with the [Charge](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/charge)
     * endpoint with a `delay_capture` value of `true`.
     *
     *
     * See [Delayed capture transactions](https://developer.squareup.com/docs/payments/transactions/overview#delayed-capture)
     * for more information.
     */
    captureTransaction(req: operations.CaptureTransactionRequest, security: operations.CaptureTransactionSecurity, config?: AxiosRequestConfig): Promise<operations.CaptureTransactionResponse>;
    /**
     * Charge
     *
     * @remarks
     * Charges a card represented by a card nonce or a customer's card on file.
     *
     * Your request to this endpoint must include _either_:
     *
     * - A value for the `card_nonce` parameter (to charge a card payment token generated
     * with the Web Payments SDK)
     * - Values for the `customer_card_id` and `customer_id` parameters (to charge
     * a customer's card on file)
     *
     * In order for an eCommerce payment to potentially qualify for
     * [Square chargeback protection](https://squareup.com/help/article/5394), you
     * _must_ provide values for the following parameters in your request:
     *
     * - `buyer_email_address`
     * - At least one of `billing_address` or `shipping_address`
     *
     * When this response is returned, the amount of Square's processing fee might not yet be
     * calculated. To obtain the processing fee, wait about ten seconds and call
     * [RetrieveTransaction](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/retrieve-transaction). See the `processing_fee_money`
     * field of each [Tender included](https://developer.squareup.com/reference/square_2021-08-18/objects/Tender) in the transaction.
     */
    charge(req: operations.ChargeRequest, security: operations.ChargeSecurity, config?: AxiosRequestConfig): Promise<operations.ChargeResponse>;
    /**
     * ListTransactions
     *
     * @remarks
     * Lists transactions for a particular location.
     *
     * Transactions include payment information from sales and exchanges and refund
     * information from returns and exchanges.
     *
     * Max results per [page](https://developer.squareup.com/docs/working-with-apis/pagination): 50
     */
    listTransactions(req: operations.ListTransactionsRequest, security: operations.ListTransactionsSecurity, config?: AxiosRequestConfig): Promise<operations.ListTransactionsResponse>;
    /**
     * RetrieveTransaction
     *
     * @remarks
     * Retrieves details for a single transaction.
     */
    retrieveTransaction(req: operations.RetrieveTransactionRequest, security: operations.RetrieveTransactionSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveTransactionResponse>;
    /**
     * VoidTransaction
     *
     * @remarks
     * Cancels a transaction that was created with the [Charge](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/charge)
     * endpoint with a `delay_capture` value of `true`.
     *
     *
     * See [Delayed capture transactions](https://developer.squareup.com/docs/payments/transactions/overview#delayed-capture)
     * for more information.
     */
    voidTransaction(req: operations.VoidTransactionRequest, security: operations.VoidTransactionSecurity, config?: AxiosRequestConfig): Promise<operations.VoidTransactionResponse>;
    /**
     * ListRefunds
     *
     * @remarks
     * Lists refunds for one of a business's locations.
     *
     * In addition to full or partial tender refunds processed through Square APIs,
     * refunds may result from itemized returns or exchanges through Square's
     * Point of Sale applications.
     *
     * Refunds with a `status` of `PENDING` are not currently included in this
     * endpoint's response.
     *
     * Max results per [page](https://developer.squareup.com/docs/working-with-apis/pagination): 50
     */
    getV2LocationsLocationIdRefunds(req: operations.GetV2LocationsLocationIdRefundsRequest, security: operations.GetV2LocationsLocationIdRefundsSecurity, config?: AxiosRequestConfig): Promise<operations.GetV2LocationsLocationIdRefundsResponse>;
    /**
     * CreateRefund
     *
     * @remarks
     * Initiates a refund for a previously charged tender.
     *
     * You must issue a refund within 120 days of the associated payment. See
     * [this article](https://squareup.com/help/us/en/article/5060) for more information
     * on refund behavior.
     *
     * NOTE: Card-present transactions with Interac credit cards **cannot be
     * refunded using the Connect API**. Interac transactions must refunded
     * in-person (e.g., dipping the card using POS app).
     */
    postV2LocationsLocationIdTransactionsTransactionIdRefund(req: operations.PostV2LocationsLocationIdTransactionsTransactionIdRefundRequest, security: operations.PostV2LocationsLocationIdTransactionsTransactionIdRefundSecurity, config?: AxiosRequestConfig): Promise<operations.PostV2LocationsLocationIdTransactionsTransactionIdRefundResponse>;
}
