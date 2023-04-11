import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message that helps aggregate all sub-executions triggered by one execution and keeps track of child-parent relationships.
 */
export declare class EnterpriseCrmEventbusProtoExecutionTraceInfo extends SpeakeasyBase {
    /**
     * Parent event execution info id that triggers the current execution through SubWorkflowExecutorTask.
     */
    parentEventExecutionInfoId?: string;
    /**
     * Used to aggregate ExecutionTraceInfo.
     */
    traceId?: string;
}
