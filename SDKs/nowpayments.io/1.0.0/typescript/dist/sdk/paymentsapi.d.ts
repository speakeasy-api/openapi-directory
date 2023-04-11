import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PaymentsAPI {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get estimated price
     *
     * @remarks
     * This is a method for calculating the approximate price in cryptocurrency for a given value in Fiat currency. You will need to provide the initial cost in the Fiat currency (amount, currency_from) and the necessary cryptocurrency (currency_to)
     * Currently following fiat currencies are available: usd, eur, nzd, brl, gbp.
     */
    getEstimatedPrice(req: operations.GetEstimatedPriceRequest, config?: AxiosRequestConfig): Promise<operations.GetEstimatedPriceResponse>;
    /**
     * Get list of payments
     *
     * @remarks
     * Returns the entire list of all transactions, created with certain API key.
     * The list of optional parameters:
     * - limit - number of records in one page. (possible values: from 1 to 500)
     * - page - the page number you want to get (possible values: from 0 to **page count - 1**)
     * - sortBy - sort the received list by a paramenter. Set to **created_at** by default (possible values: payment_id, payment_status, pay_address, price_amount, price_currency, pay_amount, actually_paid, pay_currency, order_id, order_description, purchase_id, outcome_amount, outcome_currency)
     * - orderBy - display the list in ascending or descending order. Set to **asc** by default (possible values: asc, desc)
     * - dateFrom - select the displayed period start date (date format: YYYY-MM-DD or yy-MM-ddTHH:mm:ss.SSSZ).
     * - dateTo - select the displayed period end date (date format: YYYY-MM-DD or yy-MM-ddTHH:mm:ss.SSSZ).
     */
    getListOfPayments(req: operations.GetListOfPaymentsRequest, config?: AxiosRequestConfig): Promise<operations.GetListOfPaymentsResponse>;
    /**
     * Get payment status
     *
     * @remarks
     * Get the actual information about the payment. You need to provide the ID of the payment in the request.
     *
     * NOTE! You should make the get payment status request with the same API key that you used in the create payment request.
     * Here is the list of avalable statuses:
     * - waiting - waiting for the customer to send the payment. The initial status of each payment.
     * - confirming - the transaction is being processed on the blockchain. Appears when NOWPayments detect the funds from the user on the blockchain.
     * - confirmed -  the process is confirmed by the blockchain. Customer’s funds have accumulated enough confirmations.
     * - sending - the funds are being sent to your personal wallet. We are in the process of sending the funds to you.
     * - partially_paid -  it shows that the customer sent the less than the actual price. Appears when the funds have arrived in your wallet.
     * - finished - the funds have reached your personal address and the payment is finished.
     * - failed -  the payment wasn't completed due to the error of some kind.
     * - refunded -  the funds were refunded back to the user.
     * - expired - the user didn't send the funds to the specified address in the 24 hour time window.
     *
     * Additional info:
     * - outcome_amount - this parameter shows the amount that will be (or is already) received on your Outcome Wallet once the transaction is settled.
     * - outcome_currency - this parameter shows the currency in which the transaction will be settled.
     * - invoice_id - this parameter shows invoice ID from which the payment was created
     */
    getPaymentStatus(req: operations.GetPaymentStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentStatusResponse>;
    /**
     * Get the minimum payment amount
     *
     * @remarks
     * Get the minimum payment amount for a specific pair.
     *
     * You can provide both currencies in the pair or just currency\_from, and we will calculate the minimum payment amount for currency\_from and currency which you have specified as the outcome in the Store Settings.
     *
     * You can also specify one of the fiat currencies in the currency\_from. In this case, the minimum payment will be calculated in this fiat currency.
     *
     * You can also add field fiat\_equivalent (optional field) to get the fiat equivalent of the minimum amount.
     *
     * In the case of several outcome wallets we will calculate the minimum amount in the same way we route your payment to a specific wallet.
     */
    getTheMinimumPaymentAmount(req: operations.GetTheMinimumPaymentAmountRequest, config?: AxiosRequestConfig): Promise<operations.GetTheMinimumPaymentAmountResponse>;
    /**
     * Get/Update payment estimate
     *
     * @remarks
     * This endpoint is required to get the current estimate on the payment, and update the current estimate.
     * Please note! Calling this estimate before `expiration_estimate_date` will return the current estimate, it won’t be updated.
     *
     * `:id` \- payment ID, for which you want to get the estimate
     *
     * Response:
     * `id` \- payment ID
     * `token_id` - id of api key used to create this payment (please discard this parameter)
     * `pay_amount` - payment estimate, the exact amount the user will have to send to complete the payment
     * `expiration_estimate_date` - expiration date of this estimate
     */
    getUpdatePaymentEstimate(req: operations.GetUpdatePaymentEstimateRequest, config?: AxiosRequestConfig): Promise<operations.GetUpdatePaymentEstimateResponse>;
}
