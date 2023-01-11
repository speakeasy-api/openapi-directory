import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicatingStep } from "./replicatingstep";
/**
 * CycleStep holds information about a step progress.
**/
export declare class CycleStep extends SpeakeasyBase {
    endTime?: string;
    initializingReplication?: Record<string, any>;
    postProcessing?: Record<string, any>;
    replicating?: ReplicatingStep;
    startTime?: string;
}
