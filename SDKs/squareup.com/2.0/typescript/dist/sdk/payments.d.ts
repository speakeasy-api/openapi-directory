import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Payments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CancelPayment
     *
     * @remarks
     * Cancels (voids) a payment. You can use this endpoint to cancel a payment with
     * the APPROVED `status`.
     */
    cancelPayment(req: operations.CancelPaymentRequest, security: operations.CancelPaymentSecurity, config?: AxiosRequestConfig): Promise<operations.CancelPaymentResponse>;
    /**
     * CancelPaymentByIdempotencyKey
     *
     * @remarks
     * Cancels (voids) a payment identified by the idempotency key that is specified in the
     * request.
     *
     * Use this method when the status of a `CreatePayment` request is unknown (for example, after you send a
     * `CreatePayment` request, a network error occurs and you do not get a response). In this case, you can
     * direct Square to cancel the payment using this endpoint. In the request, you provide the same
     * idempotency key that you provided in your `CreatePayment` request that you want to cancel. After
     * canceling the payment, you can submit your `CreatePayment` request again.
     *
     * Note that if no payment with the specified idempotency key is found, no action is taken and the endpoint
     * returns successfully.
     */
    cancelPaymentByIdempotencyKey(req: shared.CancelPaymentByIdempotencyKeyRequest, security: operations.CancelPaymentByIdempotencyKeySecurity, config?: AxiosRequestConfig): Promise<operations.CancelPaymentByIdempotencyKeyResponse>;
    /**
     * CompletePayment
     *
     * @remarks
     * Completes (captures) a payment.
     * By default, payments are set to complete immediately after they are created.
     *
     * You can use this endpoint to complete a payment with the APPROVED `status`.
     */
    completePayment(req: operations.CompletePaymentRequest, security: operations.CompletePaymentSecurity, config?: AxiosRequestConfig): Promise<operations.CompletePaymentResponse>;
    /**
     * CreatePayment
     *
     * @remarks
     * Creates a payment using the provided source. You can use this endpoint
     * to charge a card (credit/debit card or
     * Square gift card) or record a payment that the seller received outside of Square
     * (cash payment from a buyer or a payment that an external entity
     * processed on behalf of the seller).
     *
     * The endpoint creates a
     * `Payment` object and returns it in the response.
     */
    createPayment(req: shared.CreatePaymentRequest, security: operations.CreatePaymentSecurity, config?: AxiosRequestConfig): Promise<operations.CreatePaymentResponse>;
    /**
     * GetPayment
     *
     * @remarks
     * Retrieves details for a specific payment.
     */
    getPayment(req: operations.GetPaymentRequest, security: operations.GetPaymentSecurity, config?: AxiosRequestConfig): Promise<operations.GetPaymentResponse>;
    /**
     * UpdatePayment
     *
     * @remarks
     * Updates a payment with the APPROVED status.
     * You can update the `amount_money` and `tip_money` using this endpoint.
     */
    updatePayment(req: operations.UpdatePaymentRequest, security: operations.UpdatePaymentSecurity, config?: AxiosRequestConfig): Promise<operations.UpdatePaymentResponse>;
    /**
     * ListPayments
     *
     * @remarks
     * Retrieves a list of payments taken by the account making the request.
     *
     * Results are eventually consistent, and new payments or changes to payments might take several
     * seconds to appear.
     *
     * The maximum results per page is 100.
     */
    getV2Payments(req: operations.GetV2PaymentsRequest, security: operations.GetV2PaymentsSecurity, config?: AxiosRequestConfig): Promise<operations.GetV2PaymentsResponse>;
}
