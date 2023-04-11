import { SpeakeasyBase } from "../../../internal/utils";
import { Position } from "./position";
import { ReportedParallelism } from "./reportedparallelism";
/**
 * A progress measurement of a WorkItem by a worker.
 */
export declare class ApproximateReportedProgress extends SpeakeasyBase {
    /**
     * Represents the level of parallelism in a WorkItem's input, reported by the worker.
     */
    consumedParallelism?: ReportedParallelism;
    /**
     * Completion as fraction of the input consumed, from 0.0 (beginning, nothing consumed), to 1.0 (end of the input, entire input consumed).
     */
    fractionConsumed?: number;
    /**
     * Position defines a position within a collection of data. The value can be either the end position, a key (used with ordered collections), a byte offset, or a record index.
     */
    position?: Position;
    /**
     * Represents the level of parallelism in a WorkItem's input, reported by the worker.
     */
    remainingParallelism?: ReportedParallelism;
}
