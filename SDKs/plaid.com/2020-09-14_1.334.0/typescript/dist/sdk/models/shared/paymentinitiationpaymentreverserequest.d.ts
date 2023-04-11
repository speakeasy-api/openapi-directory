import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PaymentInitiationPaymentReverseRequest defines the request schema for `/payment_initiation/payment/reverse`
 */
export declare class PaymentInitiationPaymentReverseRequest extends SpeakeasyBase {
    /**
     * The amount and currency of a payment
     */
    amount?: Record<string, any>;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * A random key provided by the client, per unique wallet transaction. Maximum of 128 characters.
     *
     * @remarks
     *
     * The API supports idempotency for safely retrying requests without accidentally performing the same operation twice. If a request to execute a wallet transaction fails due to a network connection error, then after a minimum delay of one minute, you can retry the request with the same idempotency key to guarantee that only a single wallet transaction is created. If the request was successfully processed, it will prevent any transaction that uses the same idempotency key, and was received within 24 hours of the first request, from being processed.
     */
    idempotencyKey: string;
    /**
     * The ID of the payment to reverse
     */
    paymentId: string;
    /**
     * A reference for the refund. This must be an alphanumeric string with 6 to 18 characters and must not contain any special characters or spaces.
     */
    reference: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
