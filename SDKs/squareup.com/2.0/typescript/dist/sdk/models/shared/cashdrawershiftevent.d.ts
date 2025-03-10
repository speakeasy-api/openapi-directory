import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
export declare class CashDrawerShiftEvent extends SpeakeasyBase {
    /**
     * The event time in ISO 8601 format.
     */
    createdAt?: string;
    /**
     * An optional description of the event, entered by the employee that
     *
     * @remarks
     * created the event.
     */
    description?: string;
    /**
     * The ID of the employee that created the event.
     */
    employeeId?: string;
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
    eventMoney?: Money;
    /**
     * The type of cash drawer shift event.
     */
    eventType?: string;
    /**
     * The unique ID of the event.
     */
    id?: string;
}
