import { SpeakeasyBase } from "../../../internal/utils";
import { StreamingApplianceSnapshotConfig } from "./streamingappliancesnapshotconfig";
import { TopologyConfig } from "./topologyconfig";
/**
 * A task which initializes part of a streaming Dataflow job.
 */
export declare class StreamingSetupTask extends SpeakeasyBase {
    /**
     * The user has requested drain.
     */
    drain?: boolean;
    /**
     * The TCP port on which the worker should listen for messages from other streaming computation workers.
     */
    receiveWorkPort?: number;
    /**
     * Streaming appliance snapshot configuration.
     */
    snapshotConfig?: StreamingApplianceSnapshotConfig;
    /**
     * Global topology of the streaming Dataflow job, including all computations and their sharded locations.
     */
    streamingComputationTopology?: TopologyConfig;
    /**
     * The TCP port used by the worker to communicate with the Dataflow worker harness.
     */
    workerHarnessPort?: number;
}
