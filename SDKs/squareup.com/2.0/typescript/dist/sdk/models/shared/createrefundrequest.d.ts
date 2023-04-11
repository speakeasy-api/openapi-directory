import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * Defines the body parameters that can be included in
 *
 * @remarks
 * a request to the [CreateRefund](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/create-refund) endpoint.
 *
 * Deprecated - recommend using [RefundPayment](https://developer.squareup.com/reference/square_2021-08-18/refunds-api/refund-payment)
 */
export declare class CreateRefundRequest extends SpeakeasyBase {
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
     * A value you specify that uniquely identifies this
     *
     * @remarks
     * refund among refunds you've created for the tender.
     *
     * If you're unsure whether a particular refund succeeded,
     * you can reattempt it with the same idempotency key without
     * worrying about duplicating the refund.
     *
     * See [Idempotency keys](https://developer.squareup.com/docs/working-with-apis/idempotency) for more information.
     */
    idempotencyKey: string;
    /**
     * A description of the reason for the refund.
     *
     * @remarks
     *
     * Default value: `Refund via API`
     */
    reason?: string;
    /**
     * The ID of the tender to refund.
     *
     * @remarks
     *
     * A [`Transaction`](https://developer.squareup.com/reference/square_2021-08-18/objects/Transaction) has one or more `tenders` (i.e., methods
     * of payment) associated with it, and you refund each tender separately with
     * the Connect API.
     */
    tenderId: string;
}
