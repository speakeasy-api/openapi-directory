import { SpeakeasyBase } from "../../../internal/utils";
import { ParallelInstruction } from "./parallelinstruction";
/**
 * MapTask consists of an ordered set of instructions, each of which describes one particular low-level operation for the worker to perform in order to accomplish the MapTask's WorkItem. Each instruction must appear in the list before any instructions which depends on its output.
 */
export declare class MapTask extends SpeakeasyBase {
    /**
     * Counter prefix that can be used to prefix counters. Not currently used in Dataflow.
     */
    counterPrefix?: string;
    /**
     * The instructions in the MapTask.
     */
    instructions?: ParallelInstruction[];
    /**
     * System-defined name of the stage containing this MapTask. Unique across the workflow.
     */
    stageName?: string;
    /**
     * System-defined name of this MapTask. Unique across the workflow.
     */
    systemName?: string;
}
