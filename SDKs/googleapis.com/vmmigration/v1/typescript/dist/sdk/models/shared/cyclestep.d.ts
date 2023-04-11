import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicatingStep } from "./replicatingstep";
/**
 * CycleStep holds information about a step progress.
 */
export declare class CycleStep extends SpeakeasyBase {
    /**
     * The time the cycle step has ended.
     */
    endTime?: string;
    /**
     * InitializingReplicationStep contains specific step details.
     */
    initializingReplication?: Record<string, any>;
    /**
     * PostProcessingStep contains specific step details.
     */
    postProcessing?: Record<string, any>;
    /**
     * ReplicatingStep contains specific step details.
     */
    replicating?: ReplicatingStep;
    /**
     * The time the cycle step has started.
     */
    startTime?: string;
}
