import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the fields that are included in requests to the
 *
 * @remarks
 * [PayOrder](https://developer.squareup.com/reference/square_2021-08-18/orders-api/pay-order) endpoint.
 */
export declare class PayOrderRequest extends SpeakeasyBase {
    /**
     * A value you specify that uniquely identifies this request among requests you have sent. If
     *
     * @remarks
     * you are unsure whether a particular payment request was completed successfully, you can reattempt
     * it with the same idempotency key without worrying about duplicate payments.
     *
     * For more information, see [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency).
     */
    idempotencyKey: string;
    /**
     * The version of the order being paid. If not supplied, the latest version will be paid.
     */
    orderVersion?: number;
    /**
     * The IDs of the [payments](https://developer.squareup.com/reference/square_2021-08-18/objects/Payment) to collect.
     *
     * @remarks
     * The payment total must match the order total.
     */
    paymentIds?: string[];
}
