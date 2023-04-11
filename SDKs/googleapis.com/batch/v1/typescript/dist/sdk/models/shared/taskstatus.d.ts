import { SpeakeasyBase } from "../../../internal/utils";
import { StatusEvent } from "./statusevent";
/**
 * Task state
 */
export declare enum TaskStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Assigned = "ASSIGNED",
    Running = "RUNNING",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED"
}
/**
 * Status of a task
 */
export declare class TaskStatus extends SpeakeasyBase {
    /**
     * Task state
     */
    state?: TaskStatusStateEnum;
    /**
     * Detailed info about why the state is reached.
     */
    statusEvents?: StatusEvent[];
}
