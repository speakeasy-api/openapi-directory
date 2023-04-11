import { SpeakeasyBase } from "../../../internal/utils";
import { CashDrawerDevice } from "./cashdrawerdevice";
import { Money } from "./money";
/**
 * This model gives the details of a cash drawer shift.
 *
 * @remarks
 * The cash_payment_money, cash_refund_money, cash_paid_in_money,
 * and cash_paid_out_money fields are all computed by summing their respective
 * event types.
 */
export declare class CashDrawerShift extends SpeakeasyBase {
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
    cashPaidInMoney?: Money;
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
    cashPaidOutMoney?: Money;
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
    cashPaymentMoney?: Money;
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
    cashRefundsMoney?: Money;
    /**
     * The time when the shift was closed, in ISO 8601 format.
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
     * The ID of the employee that closed the cash drawer shift by auditing
     *
     * @remarks
     * the cash drawer contents.
     */
    closingEmployeeId?: string;
    /**
     * The free-form text description of a cash drawer by an employee.
     */
    description?: string;
    device?: CashDrawerDevice;
    /**
     * The IDs of all employees that were logged into Square Point of Sale at any
     *
     * @remarks
     * point while the cash drawer shift was open.
     */
    employeeIds?: string[];
    /**
     * The time when the shift ended, in ISO 8601 format.
     */
    endedAt?: string;
    /**
     * The ID of the employee that ended the cash drawer shift.
     */
    endingEmployeeId?: string;
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
     * The time when the shift began, in ISO 8601 format.
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
     * The ID of the employee that started the cash drawer shift.
     */
    openingEmployeeId?: string;
    /**
     * The shift current state.
     */
    state?: string;
}
