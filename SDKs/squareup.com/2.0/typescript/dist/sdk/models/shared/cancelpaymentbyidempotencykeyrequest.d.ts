import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a request to cancel a payment using
 *
 * @remarks
 * [CancelPaymentByIdempotencyKey](https://developer.squareup.com/reference/square_2021-08-18/payments-api/cancel-payment-by-idempotency-key).
 */
export declare class CancelPaymentByIdempotencyKeyRequest extends SpeakeasyBase {
    /**
     * The `idempotency_key` identifying the payment to be canceled.
     */
    idempotencyKey: string;
}
