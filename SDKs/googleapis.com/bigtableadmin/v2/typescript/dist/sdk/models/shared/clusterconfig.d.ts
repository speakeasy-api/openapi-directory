import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterAutoscalingConfig } from "./clusterautoscalingconfig";
/**
 * Configuration for a cluster.
 */
export declare class ClusterConfig extends SpeakeasyBase {
    /**
     * Autoscaling config for a cluster.
     */
    clusterAutoscalingConfig?: ClusterAutoscalingConfig;
}
