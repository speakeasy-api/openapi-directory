import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Compute resources associated with the analyze interactive workloads.
 */
export declare class GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources extends SpeakeasyBase {
    /**
     * Optional. Size in GB of the disk. Default is 100 GB.
     */
    diskSizeGb?: number;
    /**
     * Optional. Max configurable nodes. If max_node_count > node_count, then auto-scaling is enabled.
     */
    maxNodeCount?: number;
    /**
     * Optional. Total number of nodes in the sessions created for this environment.
     */
    nodeCount?: number;
}
