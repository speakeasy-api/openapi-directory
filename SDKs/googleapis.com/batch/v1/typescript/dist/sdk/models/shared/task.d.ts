import { SpeakeasyBase } from "../../../internal/utils";
import { TaskStatus } from "./taskstatus";
/**
 * A Cloud Batch task.
 */
export declare class Task extends SpeakeasyBase {
    /**
     * Task name. The name is generated from the parent TaskGroup name and 'id' field. For example: "projects/123456/locations/us-west1/jobs/job01/taskGroups/group01/tasks/task01".
     */
    name?: string;
    /**
     * Status of a task
     */
    status?: TaskStatus;
}
