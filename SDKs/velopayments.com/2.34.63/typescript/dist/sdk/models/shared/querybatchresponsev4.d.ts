import { SpeakeasyBase } from "../../../internal/utils";
import { FailedSubmissionV4 } from "./failedsubmissionv4";
/**
 * Get Batch Status
 */
export declare class QueryBatchResponseV4 extends SpeakeasyBase {
    failureCount?: number;
    failures?: FailedSubmissionV4[];
    pendingCount?: number;
    /**
     * Batch Status. One of the following values: SUBMITTED, ACCEPTED
     */
    status?: string;
}
