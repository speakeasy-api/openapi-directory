import { SpeakeasyBase } from "../../../internal/utils";
/**
 * GkeNodePoolAutoscaling contains information the cluster autoscaler needs to adjust the size of the node pool to the current cluster usage.
 */
export declare class GkeNodePoolAutoscalingConfig extends SpeakeasyBase {
    /**
     * The maximum number of nodes in the node pool. Must be >= min_node_count, and must be > 0. Note: Quota must be sufficient to scale up the cluster.
     */
    maxNodeCount?: number;
    /**
     * The minimum number of nodes in the node pool. Must be >= 0 and <= max_node_count.
     */
    minNodeCount?: number;
}
