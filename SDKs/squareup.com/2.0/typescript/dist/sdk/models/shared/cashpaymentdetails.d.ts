import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * Stores details about a cash payment. Contains only non-confidential information. For more information, see
 *
 * @remarks
 * [Take Cash Payments](https://developer.squareup.com/docs/payments-api/take-payments/cash-payments).
 */
export declare class CashPaymentDetails extends SpeakeasyBase {
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
    buyerSuppliedMoney: Money;
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
    changeBackMoney?: Money;
}
