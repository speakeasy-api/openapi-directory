import { SpeakeasyBase } from "../../../internal/utils";
import { MetricUpdate } from "./metricupdate";
import { ProgressTimeseries } from "./progresstimeseries";
import { StragglerSummary } from "./stragglersummary";
/**
 * State of this stage.
 */
export declare enum StageSummaryStateEnum {
    ExecutionStateUnknown = "EXECUTION_STATE_UNKNOWN",
    ExecutionStateNotStarted = "EXECUTION_STATE_NOT_STARTED",
    ExecutionStateRunning = "EXECUTION_STATE_RUNNING",
    ExecutionStateSucceeded = "EXECUTION_STATE_SUCCEEDED",
    ExecutionStateFailed = "EXECUTION_STATE_FAILED",
    ExecutionStateCancelled = "EXECUTION_STATE_CANCELLED"
}
/**
 * Information about a particular execution stage of a job.
 */
export declare class StageSummary extends SpeakeasyBase {
    /**
     * End time of this stage. If the work item is completed, this is the actual end time of the stage. Otherwise, it is the predicted end time.
     */
    endTime?: string;
    /**
     * Metrics for this stage.
     */
    metrics?: MetricUpdate[];
    /**
     * Information about the progress of some component of job execution.
     */
    progress?: ProgressTimeseries;
    /**
     * ID of this stage
     */
    stageId?: string;
    /**
     * Start time of this stage.
     */
    startTime?: string;
    /**
     * State of this stage.
     */
    state?: StageSummaryStateEnum;
    /**
     * Summarized straggler identification details.
     */
    stragglerSummary?: StragglerSummary;
}
