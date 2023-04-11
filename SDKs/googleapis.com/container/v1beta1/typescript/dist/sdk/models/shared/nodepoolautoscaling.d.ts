import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Location policy used when scaling up a nodepool.
 */
export declare enum NodePoolAutoscalingLocationPolicyEnum {
    LocationPolicyUnspecified = "LOCATION_POLICY_UNSPECIFIED",
    Balanced = "BALANCED",
    Any = "ANY"
}
/**
 * NodePoolAutoscaling contains information required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.
 */
export declare class NodePoolAutoscaling extends SpeakeasyBase {
    /**
     * Can this node pool be deleted automatically.
     */
    autoprovisioned?: boolean;
    /**
     * Is autoscaling enabled for this node pool.
     */
    enabled?: boolean;
    /**
     * Location policy used when scaling up a nodepool.
     */
    locationPolicy?: NodePoolAutoscalingLocationPolicyEnum;
    /**
     * Maximum number of nodes for one location in the NodePool. Must be >= min_node_count. There has to be enough quota to scale up the cluster.
     */
    maxNodeCount?: number;
    /**
     * Minimum number of nodes for one location in the NodePool. Must be >= 1 and <= max_node_count.
     */
    minNodeCount?: number;
    /**
     * Maximum number of nodes in the node pool. Must be greater than total_min_node_count. There has to be enough quota to scale up the cluster. The total_*_node_count fields are mutually exclusive with the *_node_count fields.
     */
    totalMaxNodeCount?: number;
    /**
     * Minimum number of nodes in the node pool. Must be greater than 1 less than total_max_node_count. The total_*_node_count fields are mutually exclusive with the *_node_count fields.
     */
    totalMinNodeCount?: number;
}
