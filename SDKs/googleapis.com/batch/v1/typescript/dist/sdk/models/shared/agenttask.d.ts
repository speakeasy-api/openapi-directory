import { SpeakeasyBase } from "../../../internal/utils";
import { TaskSpec } from "./taskspec";
import { TaskStatus } from "./taskstatus";
/**
 * The intended state of the task.
 */
export declare enum AgentTaskIntendedStateEnum {
    IntendedStateUnspecified = "INTENDED_STATE_UNSPECIFIED",
    Assigned = "ASSIGNED",
    Cancelled = "CANCELLED",
    Deleted = "DELETED"
}
/**
 * TODO(b/182501497) The message needs to be redefined when the Agent API server updates data in storage per the backend design.
 */
export declare class AgentTask extends SpeakeasyBase {
    /**
     * The intended state of the task.
     */
    intendedState?: AgentTaskIntendedStateEnum;
    /**
     * The highest barrier reached by all tasks in the task's TaskGroup.
     */
    reachedBarrier?: string;
    /**
     * Spec of a task
     */
    spec?: TaskSpec;
    /**
     * Status of a task
     */
    status?: TaskStatus;
    /**
     * Task name.
     */
    task?: string;
}
