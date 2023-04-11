import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The current state of the Job.
 */
export declare enum JobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Disabled = "DISABLED",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Aborted = "ABORTED",
    Skipped = "SKIPPED",
    Ignored = "IGNORED"
}
/**
 * Job represents an operation for a `Rollout`.
 */
export declare class Job extends SpeakeasyBase {
    /**
     * An advanceChildRollout Job.
     */
    advanceChildRolloutJob?: Record<string, any>;
    /**
     * A createChildRollout Job.
     */
    createChildRolloutJob?: Record<string, any>;
    /**
     * A deploy Job.
     */
    deployJob?: Record<string, any>;
    /**
     * Output only. The ID of the Job.
     */
    id?: string;
    /**
     * Output only. The name of the `JobRun` responsible for the most recent invocation of this Job.
     */
    jobRun?: string;
    /**
     * Output only. Additional information on why the Job was skipped, if available.
     */
    skipMessage?: string;
    /**
     * Output only. The current state of the Job.
     */
    state?: JobStateEnum;
    /**
     * A verify Job.
     */
    verifyJob?: Record<string, any>;
}
