import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentInstructionV3 } from "./paymentinstructionv3";
/**
 * Post amount to transfer using stored funding account details.
 */
export declare class CreatePayoutRequestV3 extends SpeakeasyBase {
    payments: PaymentInstructionV3[];
    /**
     * <p>The id of the payor whose source account(s) will be debited</p>
     *
     * @remarks
     * <p>payoutFromPayorId and payoutToPayorId must be both supplied or both omitted</p>
     *
     */
    payoutFromPayorId?: string;
    /**
     * <p>Text applied to all payment memos unless specified explicitly on a payment</p>
     *
     * @remarks
     * <p>This should be the reference field on the statement seen by the payee (but not via ACH)</p>
     *
     */
    payoutMemo?: string;
    /**
     * <p>The id of the payor whose payees will be paid</p>
     *
     * @remarks
     * <p>payoutFromPayorId and payoutToPayorId must be both supplied or both omitted</p>
     *
     */
    payoutToPayorId?: string;
}
