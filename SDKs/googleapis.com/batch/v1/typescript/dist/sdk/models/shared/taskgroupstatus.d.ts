import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceStatus } from "./instancestatus";
/**
 * Aggregated task status for a TaskGroup.
 */
export declare class TaskGroupStatus extends SpeakeasyBase {
    /**
     * Count of task in each state in the TaskGroup. The map key is task state name.
     */
    counts?: Record<string, string>;
    /**
     * Status of instances allocated for the TaskGroup.
     */
    instances?: InstanceStatus[];
}
