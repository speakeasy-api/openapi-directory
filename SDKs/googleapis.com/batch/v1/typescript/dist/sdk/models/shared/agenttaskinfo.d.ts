import { SpeakeasyBase } from "../../../internal/utils";
import { TaskStatus } from "./taskstatus";
/**
 * Task Info
 */
export declare class AgentTaskInfo extends SpeakeasyBase {
    /**
     * The highest index of a runnable started by the agent for this task. The runnables are indexed from 1. Value 0 is undefined.
     */
    runnable?: string;
    /**
     * ID of the Task
     */
    taskId?: string;
    /**
     * Status of a task
     */
    taskStatus?: TaskStatus;
}
