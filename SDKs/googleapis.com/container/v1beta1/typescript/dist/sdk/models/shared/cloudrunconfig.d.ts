import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Which load balancer type is installed for Cloud Run.
 */
export declare enum CloudRunConfigLoadBalancerTypeEnum {
    LoadBalancerTypeUnspecified = "LOAD_BALANCER_TYPE_UNSPECIFIED",
    LoadBalancerTypeExternal = "LOAD_BALANCER_TYPE_EXTERNAL",
    LoadBalancerTypeInternal = "LOAD_BALANCER_TYPE_INTERNAL"
}
/**
 * Configuration options for the Cloud Run feature.
 */
export declare class CloudRunConfig extends SpeakeasyBase {
    /**
     * Whether Cloud Run addon is enabled for this cluster.
     */
    disabled?: boolean;
    /**
     * Which load balancer type is installed for Cloud Run.
     */
    loadBalancerType?: CloudRunConfigLoadBalancerTypeEnum;
}
