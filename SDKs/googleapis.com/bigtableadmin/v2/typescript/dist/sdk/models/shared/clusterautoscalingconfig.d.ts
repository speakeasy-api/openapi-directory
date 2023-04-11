import { SpeakeasyBase } from "../../../internal/utils";
import { AutoscalingLimits } from "./autoscalinglimits";
import { AutoscalingTargets } from "./autoscalingtargets";
/**
 * Autoscaling config for a cluster.
 */
export declare class ClusterAutoscalingConfig extends SpeakeasyBase {
    /**
     * Limits for the number of nodes a Cluster can autoscale up/down to.
     */
    autoscalingLimits?: AutoscalingLimits;
    /**
     * The Autoscaling targets for a Cluster. These determine the recommended nodes.
     */
    autoscalingTargets?: AutoscalingTargets;
}
