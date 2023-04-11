import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * The summary of a closed cash drawer shift.
 *
 * @remarks
 * This model contains only the money counted to start a cash drawer shift, counted
 * at the end of the shift, and the amount that should be in the drawer at shift
 * end based on summing all cash drawer shift events.
 */
export declare class CashDrawerShiftSummary extends SpeakeasyBase {
    /**
     * The shift close time in ISO 8601 format.
     */
    closedAt?: string;
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
    closedCashMoney?: Money;
    /**
     * An employee free-text description of a cash drawer shift.
     */
    description?: string;
    /**
     * The shift end time in ISO 8601 format.
     */
    endedAt?: string;
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
    expectedCashMoney?: Money;
    /**
     * The shift unique ID.
     */
    id?: string;
    /**
     * The shift start time in ISO 8601 format.
     */
    openedAt?: string;
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
    openedCashMoney?: Money;
    /**
     * The shift current state.
     */
    state?: string;
}
