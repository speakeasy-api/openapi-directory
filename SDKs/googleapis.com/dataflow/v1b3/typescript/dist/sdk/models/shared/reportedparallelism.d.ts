import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the level of parallelism in a WorkItem's input, reported by the worker.
 */
export declare class ReportedParallelism extends SpeakeasyBase {
    /**
     * Specifies whether the parallelism is infinite. If true, "value" is ignored. Infinite parallelism means the service will assume that the work item can always be split into more non-empty work items by dynamic splitting. This is a work-around for lack of support for infinity by the current JSON-based Java RPC stack.
     */
    isInfinite?: boolean;
    /**
     * Specifies the level of parallelism in case it is finite.
     */
    value?: number;
}
