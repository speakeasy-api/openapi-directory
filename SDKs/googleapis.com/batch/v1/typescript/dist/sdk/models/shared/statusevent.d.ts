import { SpeakeasyBase } from "../../../internal/utils";
import { TaskExecution } from "./taskexecution";
/**
 * Task State
 */
export declare enum StatusEventTaskStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Assigned = "ASSIGNED",
    Running = "RUNNING",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED"
}
/**
 * Status event
 */
export declare class StatusEvent extends SpeakeasyBase {
    /**
     * Description of the event.
     */
    description?: string;
    /**
     * The time this event occurred.
     */
    eventTime?: string;
    /**
     * This Task Execution field includes detail information for task execution procedures, based on StatusEvent types.
     */
    taskExecution?: TaskExecution;
    /**
     * Task State
     */
    taskState?: StatusEventTaskStateEnum;
    /**
     * Type of the event.
     */
    type?: string;
}
