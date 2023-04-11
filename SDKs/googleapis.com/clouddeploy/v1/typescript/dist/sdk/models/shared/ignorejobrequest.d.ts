import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request object used by `IgnoreJob`.
 */
export declare class IgnoreJobRequest extends SpeakeasyBase {
    /**
     * Required. The job ID for the Job to ignore.
     */
    jobId?: string;
    /**
     * Required. The phase ID the Job to ignore belongs to.
     */
    phaseId?: string;
}
