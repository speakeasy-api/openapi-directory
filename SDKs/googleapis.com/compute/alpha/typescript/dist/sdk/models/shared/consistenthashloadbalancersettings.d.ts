import { SpeakeasyBase } from "../../../internal/utils";
import { ConsistentHashLoadBalancerSettingsHttpCookie } from "./consistenthashloadbalancersettingshttpcookie";
/**
 * This message defines settings for a consistent hash style load balancer.
 */
export declare class ConsistentHashLoadBalancerSettings extends SpeakeasyBase {
    /**
     * The information about the HTTP Cookie on which the hash function is based for load balancing policies that use a consistent hash.
     */
    httpCookie?: ConsistentHashLoadBalancerSettingsHttpCookie;
    /**
     * The hash based on the value of the specified header field. This field is applicable if the sessionAffinity is set to HEADER_FIELD.
     */
    httpHeaderName?: string;
    /**
     * The minimum number of virtual nodes to use for the hash ring. Defaults to 1024. Larger ring sizes result in more granular load distributions. If the number of hosts in the load balancing pool is larger than the ring size, each host will be assigned a single virtual node.
     */
    minimumRingSize?: string;
}
