import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationCycle } from "./replicationcycle";
/**
 * CutoverStep holds information about the cutover step progress.
**/
export declare class CutoverStep extends SpeakeasyBase {
    endTime?: string;
    finalSync?: ReplicationCycle;
    instantiatingMigratedVm?: Record<string, any>;
    preparingVmDisks?: Record<string, any>;
    previousReplicationCycle?: ReplicationCycle;
    shuttingDownSourceVm?: Record<string, any>;
    startTime?: string;
}
