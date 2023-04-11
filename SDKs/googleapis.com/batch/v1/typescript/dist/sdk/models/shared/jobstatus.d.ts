import { SpeakeasyBase } from "../../../internal/utils";
import { StatusEvent } from "./statusevent";
import { TaskGroupStatus } from "./taskgroupstatus";
/**
 * Job state
 */
export declare enum JobStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Queued = "QUEUED",
    Scheduled = "SCHEDULED",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    DeletionInProgress = "DELETION_IN_PROGRESS"
}
/**
 * Job status.
 */
export declare class JobStatus extends SpeakeasyBase {
    /**
     * The duration of time that the Job spent in status RUNNING.
     */
    runDuration?: string;
    /**
     * Job state
     */
    state?: JobStatusStateEnum;
    /**
     * Job status events
     */
    statusEvents?: StatusEvent[];
    /**
     * Aggregated task status for each TaskGroup in the Job. The map key is TaskGroup ID.
     */
    taskGroups?: Record<string, TaskGroupStatus>;
}
