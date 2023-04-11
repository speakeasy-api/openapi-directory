import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The name of a locality load-balancing policy. Valid values include ROUND_ROBIN and, for Java clients, LEAST_REQUEST. For information about these values, see the description of localityLbPolicy. Do not specify the same policy more than once for a backend. If you do, the configuration is rejected.
 */
export declare enum BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum {
    InvalidLbPolicy = "INVALID_LB_POLICY",
    LeastRequest = "LEAST_REQUEST",
    Maglev = "MAGLEV",
    OriginalDestination = "ORIGINAL_DESTINATION",
    Random = "RANDOM",
    RingHash = "RING_HASH",
    RoundRobin = "ROUND_ROBIN",
    WeightedMaglev = "WEIGHTED_MAGLEV"
}
/**
 * The configuration for a built-in load balancing policy.
 */
export declare class BackendServiceLocalityLoadBalancingPolicyConfigPolicy extends SpeakeasyBase {
    /**
     * The name of a locality load-balancing policy. Valid values include ROUND_ROBIN and, for Java clients, LEAST_REQUEST. For information about these values, see the description of localityLbPolicy. Do not specify the same policy more than once for a backend. If you do, the configuration is rejected.
     */
    name?: BackendServiceLocalityLoadBalancingPolicyConfigPolicyNameEnum;
}
