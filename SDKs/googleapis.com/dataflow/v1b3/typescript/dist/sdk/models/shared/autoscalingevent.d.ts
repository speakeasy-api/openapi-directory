import { SpeakeasyBase } from "../../../internal/utils";
import { StructuredMessage } from "./structuredmessage";
/**
 * The type of autoscaling event to report.
 */
export declare enum AutoscalingEventEventTypeEnum {
    TypeUnknown = "TYPE_UNKNOWN",
    TargetNumWorkersChanged = "TARGET_NUM_WORKERS_CHANGED",
    CurrentNumWorkersChanged = "CURRENT_NUM_WORKERS_CHANGED",
    ActuationFailure = "ACTUATION_FAILURE",
    NoChange = "NO_CHANGE"
}
/**
 * A structured message reporting an autoscaling decision made by the Dataflow service.
 */
export declare class AutoscalingEvent extends SpeakeasyBase {
    /**
     * The current number of workers the job has.
     */
    currentNumWorkers?: string;
    /**
     * A rich message format, including a human readable string, a key for identifying the message, and structured data associated with the message for programmatic consumption.
     */
    description?: StructuredMessage;
    /**
     * The type of autoscaling event to report.
     */
    eventType?: AutoscalingEventEventTypeEnum;
    /**
     * The target number of workers the worker pool wants to resize to use.
     */
    targetNumWorkers?: string;
    /**
     * The time this event was emitted to indicate a new target or current num_workers value.
     */
    time?: string;
    /**
     * A short and friendly name for the worker pool this event refers to.
     */
    workerPool?: string;
}
