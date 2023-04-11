import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * Describes a request to refund a payment using [RefundPayment](https://developer.squareup.com/reference/square_2021-08-18/refunds-api/refund-payment).
 */
export declare class RefundPaymentRequest extends SpeakeasyBase {
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     *
     * @remarks
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    amountMoney: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     *
     * @remarks
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    appFeeMoney?: Money;
    /**
     *  A unique string that identifies this `RefundPayment` request. The key can be any valid string
     *
     * @remarks
     * but must be unique for every `RefundPayment` request.
     *
     * For more information, see [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency).
     */
    idempotencyKey: string;
    /**
     * The unique ID of the payment being refunded.
     */
    paymentId: string;
    /**
     * A description of the reason for the refund.
     */
    reason?: string;
}
