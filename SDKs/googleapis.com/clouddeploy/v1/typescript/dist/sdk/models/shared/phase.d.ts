import { SpeakeasyBase } from "../../../internal/utils";
import { ChildRolloutJobs } from "./childrolloutjobs";
import { DeploymentJobs } from "./deploymentjobs";
/**
 * Output only. Current state of the Phase.
 */
export declare enum PhaseStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Aborted = "ABORTED",
    Skipped = "SKIPPED"
}
/**
 * Phase represents a collection of jobs that are logically grouped together for a `Rollout`.
 */
export declare class Phase extends SpeakeasyBase {
    /**
     * ChildRollouts job composition
     */
    childRolloutJobs?: ChildRolloutJobs;
    /**
     * Deployment job composition.
     */
    deploymentJobs?: DeploymentJobs;
    /**
     * Output only. The ID of the Phase.
     */
    id?: string;
    /**
     * Output only. Additional information on why the Phase was skipped, if available.
     */
    skipMessage?: string;
    /**
     * Output only. Current state of the Phase.
     */
    state?: PhaseStateEnum;
}
