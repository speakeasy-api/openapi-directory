import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationCycle } from "./replicationcycle";
/**
 * CutoverStep holds information about the cutover step progress.
 */
export declare class CutoverStep extends SpeakeasyBase {
    /**
     * The time the step has ended.
     */
    endTime?: string;
    /**
     * ReplicationCycle contains information about the current replication cycle status.
     */
    finalSync?: ReplicationCycle;
    /**
     * InstantiatingMigratedVMStep contains specific step details.
     */
    instantiatingMigratedVm?: Record<string, any>;
    /**
     * PreparingVMDisksStep contains specific step details.
     */
    preparingVmDisks?: Record<string, any>;
    /**
     * ReplicationCycle contains information about the current replication cycle status.
     */
    previousReplicationCycle?: ReplicationCycle;
    /**
     * ShuttingDownSourceVMStep contains specific step details.
     */
    shuttingDownSourceVm?: Record<string, any>;
    /**
     * The time the step has started.
     */
    startTime?: string;
}
