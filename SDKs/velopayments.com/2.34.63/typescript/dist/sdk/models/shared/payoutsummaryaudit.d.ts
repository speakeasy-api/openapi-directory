import { SpeakeasyBase } from "../../../internal/utils";
import { FxSummary } from "./fxsummary";
import { PayoutSchedule } from "./payoutschedule";
import { SourceAccountSummary } from "./sourceaccountsummary";
export declare class PayoutSummaryAudit extends SpeakeasyBase {
    dateTime?: Date;
    fxSummaries?: FxSummary[];
    instructedDateTime?: string;
    payorId?: string;
    payorName: string;
    payoutId?: string;
    payoutMemo?: string;
    /**
     * The type of payout. One of the following values: STANDARD, AS, ON_BEHALF_OF
     */
    payoutType: string;
    /**
     * Details relating to a payout that was executed via a schedule or is still waiting to be executed
     */
    schedule?: PayoutSchedule;
    sourceAccountSummary?: SourceAccountSummary[];
    /**
     * Current status of the Payout. One of the following values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN
     */
    status: string;
    submittedDateTime: string;
    totalIncompletePayments?: number;
    totalPayments?: number;
    totalReturnedPayments?: number;
    totalWithdrawnPayments?: number;
    withdrawnDateTime?: Date;
}
