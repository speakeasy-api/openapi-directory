import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. A state message specifying the overall job state.
 */
export declare enum JobStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    SetupDone = "SETUP_DONE",
    Running = "RUNNING",
    CancelPending = "CANCEL_PENDING",
    CancelStarted = "CANCEL_STARTED",
    Cancelled = "CANCELLED",
    Done = "DONE",
    Error = "ERROR",
    AttemptFailure = "ATTEMPT_FAILURE"
}
/**
 * Output only. Additional state information, which includes status reported by the agent.
 */
export declare enum JobStatusSubstateEnum {
    Unspecified = "UNSPECIFIED",
    Submitted = "SUBMITTED",
    Queued = "QUEUED",
    StaleStatus = "STALE_STATUS"
}
/**
 * Dataproc job status.
 */
export declare class JobStatus extends SpeakeasyBase {
    /**
     * Optional. Output only. Job state details, such as an error description if the state is ERROR.
     */
    details?: string;
    /**
     * Output only. A state message specifying the overall job state.
     */
    state?: JobStatusStateEnum;
    /**
     * Output only. The time when this state was entered.
     */
    stateStartTime?: string;
    /**
     * Output only. Additional state information, which includes status reported by the agent.
     */
    substate?: JobStatusSubstateEnum;
}
