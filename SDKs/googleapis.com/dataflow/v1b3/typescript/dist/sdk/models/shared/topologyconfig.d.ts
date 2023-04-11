import { SpeakeasyBase } from "../../../internal/utils";
import { ComputationTopology } from "./computationtopology";
import { DataDiskAssignment } from "./datadiskassignment";
/**
 * Global topology of the streaming Dataflow job, including all computations and their sharded locations.
 */
export declare class TopologyConfig extends SpeakeasyBase {
    /**
     * The computations associated with a streaming Dataflow job.
     */
    computations?: ComputationTopology[];
    /**
     * The disks assigned to a streaming Dataflow job.
     */
    dataDiskAssignments?: DataDiskAssignment[];
    /**
     * The size (in bits) of keys that will be assigned to source messages.
     */
    forwardingKeyBits?: number;
    /**
     * Version number for persistent state.
     */
    persistentStateVersion?: number;
    /**
     * Maps user stage names to stable computation names.
     */
    userStageToComputationNameMap?: Record<string, string>;
}
