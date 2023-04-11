import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Limits for the number of nodes a Cluster can autoscale up/down to.
 */
export declare class AutoscalingLimits extends SpeakeasyBase {
    /**
     * Required. Maximum number of nodes to scale up to.
     */
    maxServeNodes?: number;
    /**
     * Required. Minimum number of nodes to scale down to.
     */
    minServeNodes?: number;
}
