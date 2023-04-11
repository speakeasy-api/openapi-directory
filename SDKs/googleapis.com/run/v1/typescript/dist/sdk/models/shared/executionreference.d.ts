import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Reference to an Execution. Use /Executions.GetExecution with the given name to get full execution including the latest status.
 */
export declare class ExecutionReference extends SpeakeasyBase {
    /**
     * Optional. Completion timestamp of the execution.
     */
    completionTimestamp?: string;
    /**
     * Optional. Creation timestamp of the execution.
     */
    creationTimestamp?: string;
    /**
     * Optional. Name of the execution.
     */
    name?: string;
}
