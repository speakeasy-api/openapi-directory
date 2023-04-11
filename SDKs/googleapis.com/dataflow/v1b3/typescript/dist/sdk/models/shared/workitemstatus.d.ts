import { SpeakeasyBase } from "../../../internal/utils";
import { ApproximateProgress } from "./approximateprogress";
import { ApproximateReportedProgress } from "./approximatereportedprogress";
import { CounterUpdate } from "./counterupdate";
import { DynamicSourceSplit } from "./dynamicsourcesplit";
import { MetricUpdate } from "./metricupdate";
import { Position } from "./position";
import { SourceFork } from "./sourcefork";
import { SourceOperationResponse } from "./sourceoperationresponse";
import { Status } from "./status";
/**
 * Conveys a worker's progress through the work described by a WorkItem.
 */
export declare class WorkItemStatus extends SpeakeasyBase {
    /**
     * True if the WorkItem was completed (successfully or unsuccessfully).
     */
    completed?: boolean;
    /**
     * Worker output counters for this WorkItem.
     */
    counterUpdates?: CounterUpdate[];
    /**
     * When a task splits using WorkItemStatus.dynamic_source_split, this message describes the two parts of the split relative to the description of the current task's input.
     */
    dynamicSourceSplit?: DynamicSourceSplit;
    /**
     * Specifies errors which occurred during processing. If errors are provided, and completed = true, then the WorkItem is considered to have failed.
     */
    errors?: Status[];
    /**
     * DEPRECATED in favor of counter_updates.
     */
    metricUpdates?: MetricUpdate[];
    /**
     * Obsolete in favor of ApproximateReportedProgress and ApproximateSplitRequest.
     */
    progress?: ApproximateProgress;
    /**
     * The report index. When a WorkItem is leased, the lease will contain an initial report index. When a WorkItem's status is reported to the system, the report should be sent with that report index, and the response will contain the index the worker should use for the next report. Reports received with unexpected index values will be rejected by the service. In order to preserve idempotency, the worker should not alter the contents of a report, even if the worker must submit the same report multiple times before getting back a response. The worker should not submit a subsequent report until the response for the previous report had been received from the service.
     */
    reportIndex?: string;
    /**
     * A progress measurement of a WorkItem by a worker.
     */
    reportedProgress?: ApproximateReportedProgress;
    /**
     * Amount of time the worker requests for its lease.
     */
    requestedLeaseDuration?: string;
    /**
     * DEPRECATED in favor of DynamicSourceSplit.
     */
    sourceFork?: SourceFork;
    /**
     * The result of a SourceOperationRequest, specified in ReportWorkItemStatusRequest.source_operation when the work item is completed.
     */
    sourceOperationResponse?: SourceOperationResponse;
    /**
     * Position defines a position within a collection of data. The value can be either the end position, a key (used with ordered collections), a byte offset, or a record index.
     */
    stopPosition?: Position;
    /**
     * Total time the worker spent being throttled by external systems.
     */
    totalThrottlerWaitTimeSeconds?: number;
    /**
     * Identifies the WorkItem.
     */
    workItemId?: string;
}
