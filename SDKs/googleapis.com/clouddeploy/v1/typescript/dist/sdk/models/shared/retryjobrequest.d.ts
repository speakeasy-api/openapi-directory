import { SpeakeasyBase } from "../../../internal/utils";
/**
 * RetryJobRequest is the request object used by `RetryJob`.
 */
export declare class RetryJobRequest extends SpeakeasyBase {
    /**
     * Required. The job ID for the Job to retry.
     */
    jobId?: string;
    /**
     * Required. The phase ID the Job to retry belongs to.
     */
    phaseId?: string;
}
