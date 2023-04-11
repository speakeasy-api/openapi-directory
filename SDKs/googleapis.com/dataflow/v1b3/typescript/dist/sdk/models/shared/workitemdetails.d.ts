import { SpeakeasyBase } from "../../../internal/utils";
import { MetricUpdate } from "./metricupdate";
import { ProgressTimeseries } from "./progresstimeseries";
import { StragglerInfo } from "./stragglerinfo";
/**
 * State of this work item.
 */
export declare enum WorkItemDetailsStateEnum {
    ExecutionStateUnknown = "EXECUTION_STATE_UNKNOWN",
    ExecutionStateNotStarted = "EXECUTION_STATE_NOT_STARTED",
    ExecutionStateRunning = "EXECUTION_STATE_RUNNING",
    ExecutionStateSucceeded = "EXECUTION_STATE_SUCCEEDED",
    ExecutionStateFailed = "EXECUTION_STATE_FAILED",
    ExecutionStateCancelled = "EXECUTION_STATE_CANCELLED"
}
/**
 * Information about an individual work item execution.
 */
export declare class WorkItemDetails extends SpeakeasyBase {
    /**
     * Attempt ID of this work item
     */
    attemptId?: string;
    /**
     * End time of this work item attempt. If the work item is completed, this is the actual end time of the work item. Otherwise, it is the predicted end time.
     */
    endTime?: string;
    /**
     * Metrics for this work item.
     */
    metrics?: MetricUpdate[];
    /**
     * Information about the progress of some component of job execution.
     */
    progress?: ProgressTimeseries;
    /**
     * Start time of this work item attempt.
     */
    startTime?: string;
    /**
     * State of this work item.
     */
    state?: WorkItemDetailsStateEnum;
    /**
     * Information useful for straggler identification and debugging.
     */
    stragglerInfo?: StragglerInfo;
    /**
     * Name of this work item.
     */
    taskId?: string;
}
