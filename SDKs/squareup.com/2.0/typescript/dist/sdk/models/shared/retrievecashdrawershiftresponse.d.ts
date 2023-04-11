import { SpeakeasyBase } from "../../../internal/utils";
import { CashDrawerShift } from "./cashdrawershift";
import { ErrorT } from "./error";
/**
 * Success
 */
export declare class RetrieveCashDrawerShiftResponse extends SpeakeasyBase {
    /**
     * This model gives the details of a cash drawer shift.
     *
     * @remarks
     * The cash_payment_money, cash_refund_money, cash_paid_in_money,
     * and cash_paid_out_money fields are all computed by summing their respective
     * event types.
     */
    cashDrawerShift?: CashDrawerShift;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
}
