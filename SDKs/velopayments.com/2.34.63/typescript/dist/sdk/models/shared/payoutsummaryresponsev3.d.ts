import { SpeakeasyBase } from "../../../internal/utils";
import { AcceptedPaymentV3 } from "./acceptedpaymentv3";
import { PayoutScheduleV3 } from "./payoutschedulev3";
import { QuoteFxSummaryV3 } from "./quotefxsummaryv3";
import { RejectedPaymentV3 } from "./rejectedpaymentv3";
import { SourceAccountV3 } from "./sourceaccountv3";
/**
 * Details of Payout
 */
export declare class PayoutSummaryResponseV3 extends SpeakeasyBase {
    acceptedPayments: AcceptedPaymentV3[];
    accounts: SourceAccountV3[];
    fxSummaries: QuoteFxSummaryV3[];
    /**
     * The number of payments that were accepted in the payout
     */
    paymentsAccepted?: number;
    /**
     * The number of payments that were rejected in the payout
     */
    paymentsRejected?: number;
    /**
     * The number of payments that were submitted in the payout
     */
    paymentsSubmitted?: number;
    /**
     * The number of payments that were withdrawn in the payout
     */
    paymentsWithdrawn: number;
    /**
     * The id of the payout
     */
    payoutId?: string;
    rejectedPayments: RejectedPaymentV3[];
    /**
     * Details relating to a payout that was executed via a schedule or is still waiting to be executed
     */
    schedule?: PayoutScheduleV3;
    /**
     * The status of the payout (one of SUBMITTED, ACCEPTED, REJECTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, WITHDRAWN)
     */
    status?: string;
}
