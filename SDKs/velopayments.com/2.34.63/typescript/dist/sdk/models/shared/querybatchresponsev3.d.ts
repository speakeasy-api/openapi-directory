import { SpeakeasyBase } from "../../../internal/utils";
import { FailedSubmissionV3 } from "./failedsubmissionv3";
/**
 * Get Batch Status
 */
export declare class QueryBatchResponseV3 extends SpeakeasyBase {
    failureCount?: number;
    failures?: FailedSubmissionV3[];
    pendingCount?: number;
    /**
     * Batch Status. One of the following values: SUBMITTED, ACCEPTED
     */
    status?: string;
}
