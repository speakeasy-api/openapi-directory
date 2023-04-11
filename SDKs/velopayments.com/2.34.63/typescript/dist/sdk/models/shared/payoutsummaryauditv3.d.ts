import { SpeakeasyBase } from "../../../internal/utils";
import { FxSummaryV3 } from "./fxsummaryv3";
import { SourceAccountSummaryV3 } from "./sourceaccountsummaryv3";
export declare class PayoutSummaryAuditV3 extends SpeakeasyBase {
    fxSummaries?: FxSummaryV3[];
    instructedDateTime?: string;
    payorId?: string;
    payoutId: string;
    payoutMemo?: string;
    sourceAccountSummary?: SourceAccountSummaryV3[];
    /**
     * Current status of the payout. One of the following values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN
     */
    status: string;
    submittedDateTime: string;
    totalFailedPayments?: number;
    totalIncompletePayments?: number;
    totalPayments?: number;
    withdrawnDateTime?: string;
}
