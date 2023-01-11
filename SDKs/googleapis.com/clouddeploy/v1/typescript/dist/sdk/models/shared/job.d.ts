import { SpeakeasyBase } from "../../../internal/utils";
export declare enum JobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Disabled = "DISABLED",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Aborted = "ABORTED"
}
/**
 * Job represents an operation for a `Rollout`.
**/
export declare class Job extends SpeakeasyBase {
    deployJob?: Record<string, any>;
    id?: string;
    jobRun?: string;
    state?: JobStateEnum;
    verifyJob?: Record<string, any>;
}
