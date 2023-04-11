import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * A request to calculate the points that a buyer can earn from
 *
 * @remarks
 * a specified purchase.
 */
export declare class CalculateLoyaltyPointsRequest extends SpeakeasyBase {
    /**
     * The [order](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) ID for which to calculate the points.
     *
     * @remarks
     * Specify this field if your application uses the Orders API to process orders.
     * Otherwise, specify the `transaction_amount_money`.
     */
    orderId?: string;
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
    transactionAmountMoney?: Money;
}
