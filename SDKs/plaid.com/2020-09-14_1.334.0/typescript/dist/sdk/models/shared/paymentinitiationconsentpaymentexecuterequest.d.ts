import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PaymentInitiationConsentPaymentExecuteRequest defines the request schema for `/payment_initiation/consent/payment/execute`
 */
export declare class PaymentInitiationConsentPaymentExecuteRequest extends SpeakeasyBase {
    /**
     * The amount and currency of a payment
     */
    amount: Record<string, any>;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The consent ID.
     */
    consentId: string;
    /**
     * A random key provided by the client, per unique consent payment. Maximum of 128 characters.
     *
     * @remarks
     *
     * The API supports idempotency for safely retrying requests without accidentally performing the same operation twice. If a request to execute a consent payment fails due to a network connection error, you can retry the request with the same idempotency key to guarantee that only a single payment is created. If the request was successfully processed, it will prevent any payment that uses the same idempotency key, and was received within 24 hours of the first request, from being processed.
     */
    idempotencyKey: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
