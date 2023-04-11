import { SpeakeasyBase } from "../../../internal/utils";
import { BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy } from "./backendservicelocalityloadbalancingpolicyconfigcustompolicy";
import { BackendServiceLocalityLoadBalancingPolicyConfigPolicy } from "./backendservicelocalityloadbalancingpolicyconfigpolicy";
/**
 * Container for either a built-in LB policy supported by gRPC or Envoy or a custom one implemented by the end user.
 */
export declare class BackendServiceLocalityLoadBalancingPolicyConfig extends SpeakeasyBase {
    /**
     * The configuration for a custom policy implemented by the user and deployed with the client.
     */
    customPolicy?: BackendServiceLocalityLoadBalancingPolicyConfigCustomPolicy;
    /**
     * The configuration for a built-in load balancing policy.
     */
    policy?: BackendServiceLocalityLoadBalancingPolicyConfigPolicy;
}
