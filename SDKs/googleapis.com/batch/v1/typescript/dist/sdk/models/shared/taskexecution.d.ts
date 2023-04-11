import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This Task Execution field includes detail information for task execution procedures, based on StatusEvent types.
 */
export declare class TaskExecution extends SpeakeasyBase {
    /**
     * When task is completed as the status of FAILED or SUCCEEDED, exit code is for one task execution result, default is 0 as success.
     */
    exitCode?: number;
}
