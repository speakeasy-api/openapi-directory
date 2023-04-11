import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Reference to an Execution. Use /Executions.GetExecution with the given name to get full execution including the latest status.
 */
export declare class GoogleCloudRunV2ExecutionReference extends SpeakeasyBase {
    /**
     * Creation timestamp of the execution.
     */
    completionTime?: string;
    /**
     * Creation timestamp of the execution.
     */
    createTime?: string;
    /**
     * Name of the execution.
     */
    name?: string;
}
