import { SpeakeasyBase } from "../../../internal/utils";
import { ParallelInstruction } from "./parallelinstruction";
/**
 * Configuration information for a single streaming computation.
 */
export declare class StreamingComputationConfig extends SpeakeasyBase {
    /**
     * Unique identifier for this computation.
     */
    computationId?: string;
    /**
     * Instructions that comprise the computation.
     */
    instructions?: ParallelInstruction[];
    /**
     * Stage name of this computation.
     */
    stageName?: string;
    /**
     * System defined name for this computation.
     */
    systemName?: string;
    /**
     * Map from user name of stateful transforms in this stage to their state family.
     */
    transformUserNameToStateFamily?: Record<string, string>;
}
