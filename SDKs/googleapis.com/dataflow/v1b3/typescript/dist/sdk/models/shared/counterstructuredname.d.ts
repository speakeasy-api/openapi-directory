import { SpeakeasyBase } from "../../../internal/utils";
/**
 * One of the standard Origins defined above.
 */
export declare enum CounterStructuredNameOriginEnum {
    System = "SYSTEM",
    User = "USER"
}
/**
 * Portion of this counter, either key or value.
 */
export declare enum CounterStructuredNamePortionEnum {
    All = "ALL",
    Key = "KEY",
    Value = "VALUE"
}
/**
 * Identifies a counter within a per-job namespace. Counters whose structured names are the same get merged into a single value for the job.
 */
export declare class CounterStructuredName extends SpeakeasyBase {
    /**
     * Name of the optimized step being executed by the workers.
     */
    componentStepName?: string;
    /**
     * Name of the stage. An execution step contains multiple component steps.
     */
    executionStepName?: string;
    /**
     * Index of an input collection that's being read from/written to as a side input. The index identifies a step's side inputs starting by 1 (e.g. the first side input has input_index 1, the third has input_index 3). Side inputs are identified by a pair of (original_step_name, input_index). This field helps uniquely identify them.
     */
    inputIndex?: number;
    /**
     * Counter name. Not necessarily globally-unique, but unique within the context of the other fields. Required.
     */
    name?: string;
    /**
     * One of the standard Origins defined above.
     */
    origin?: CounterStructuredNameOriginEnum;
    /**
     * A string containing a more specific namespace of the counter's origin.
     */
    originNamespace?: string;
    /**
     * The step name requesting an operation, such as GBK. I.e. the ParDo causing a read/write from shuffle to occur, or a read from side inputs.
     */
    originalRequestingStepName?: string;
    /**
     * System generated name of the original step in the user's graph, before optimization.
     */
    originalStepName?: string;
    /**
     * Portion of this counter, either key or value.
     */
    portion?: CounterStructuredNamePortionEnum;
    /**
     * ID of a particular worker.
     */
    workerId?: string;
}
