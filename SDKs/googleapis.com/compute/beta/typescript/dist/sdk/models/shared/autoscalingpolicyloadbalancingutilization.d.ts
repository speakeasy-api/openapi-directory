import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration parameters of autoscaling based on load balancing.
 */
export declare class AutoscalingPolicyLoadBalancingUtilization extends SpeakeasyBase {
    /**
     * Fraction of backend capacity utilization (set in HTTP(S) load balancing configuration) that the autoscaler maintains. Must be a positive float value. If not defined, the default is 0.8.
     */
    utilizationTarget?: number;
}
