import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum {
    Undefined = "undefined",
    Tcp = "tcp",
    Udp = "udp"
}
export declare enum RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum {
    None = "none",
    RegionalL4ilb = "regionalL4ilb"
}
export declare class RRSetRoutingPolicyLoadBalancerTarget extends SpeakeasyBase {
    /**
     * The frontend IP address of the
     */
    ipAddress?: string;
    ipProtocol?: RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum;
    kind?: string;
    loadBalancerType?: RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum;
    /**
     * The fully qualified url of the network on which the ILB is
     */
    networkUrl?: string;
    /**
     * Load Balancer to health check. The configured port of the Load Balancer.
     */
    port?: string;
    /**
     * present. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} The project ID in which the ILB exists.
     */
    project?: string;
    /**
     * The region for regional ILBs.
     */
    region?: string;
}
