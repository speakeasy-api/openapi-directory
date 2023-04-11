import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Status } from "./status";
/**
 * The call logging level associated to this execution.
 */
export declare enum ExecutionCallLogLevelEnum {
    CallLogLevelUnspecified = "CALL_LOG_LEVEL_UNSPECIFIED",
    LogAllCalls = "LOG_ALL_CALLS",
    LogErrorsOnly = "LOG_ERRORS_ONLY"
}
/**
 * Output only. Current state of the execution.
 */
export declare enum ExecutionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelled = "CANCELLED"
}
/**
 * A running instance of a [Workflow](/workflows/docs/reference/rest/v1beta/projects.locations.workflows).
 */
export declare class Execution extends SpeakeasyBase {
    /**
     * Input parameters of the execution represented as a JSON string. The size limit is 32KB. *Note*: If you are using the REST API directly to run your workflow, you must escape any JSON string value of `argument`. Example: `'{"argument":"{\"firstName\":\"FIRST\",\"lastName\":\"LAST\"}"}'`
     */
    argument?: string;
    /**
     * The call logging level associated to this execution.
     */
    callLogLevel?: ExecutionCallLogLevelEnum;
    /**
     * Output only. Marks the end of execution, successful or not.
     */
    endTime?: string;
    /**
     * Error describes why the execution was abnormally terminated.
     */
    error?: ErrorT;
    /**
     * Output only. The resource name of the execution. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}
     */
    name?: string;
    /**
     * Output only. Output of the execution represented as a JSON string. The value can only be present if the execution's state is `SUCCEEDED`.
     */
    result?: string;
    /**
     * Output only. Marks the beginning of execution.
     */
    startTime?: string;
    /**
     * Output only. Current state of the execution.
     */
    state?: ExecutionStateEnum;
    /**
     * Represents the current status of this execution.
     */
    status?: Status;
    /**
     * Output only. Revision of the workflow this execution is using.
     */
    workflowRevisionId?: string;
}
/**
 * A running instance of a [Workflow](/workflows/docs/reference/rest/v1beta/projects.locations.workflows).
 */
export declare class ExecutionInput extends SpeakeasyBase {
    /**
     * Input parameters of the execution represented as a JSON string. The size limit is 32KB. *Note*: If you are using the REST API directly to run your workflow, you must escape any JSON string value of `argument`. Example: `'{"argument":"{\"firstName\":\"FIRST\",\"lastName\":\"LAST\"}"}'`
     */
    argument?: string;
    /**
     * The call logging level associated to this execution.
     */
    callLogLevel?: ExecutionCallLogLevelEnum;
    /**
     * Error describes why the execution was abnormally terminated.
     */
    error?: ErrorT;
    /**
     * Represents the current status of this execution.
     */
    status?: Status;
}
