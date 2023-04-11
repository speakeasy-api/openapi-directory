import { SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerBackend } from "./loadbalancerbackend";
/**
 * Type of load balancer's backend configuration.
 */
export declare enum LoadBalancerInfoBackendTypeEnum {
    BackendTypeUnspecified = "BACKEND_TYPE_UNSPECIFIED",
    BackendService = "BACKEND_SERVICE",
    TargetPool = "TARGET_POOL",
    TargetInstance = "TARGET_INSTANCE"
}
/**
 * Type of the load balancer.
 */
export declare enum LoadBalancerInfoLoadBalancerTypeEnum {
    LoadBalancerTypeUnspecified = "LOAD_BALANCER_TYPE_UNSPECIFIED",
    InternalTcpUdp = "INTERNAL_TCP_UDP",
    NetworkTcpUdp = "NETWORK_TCP_UDP",
    HttpProxy = "HTTP_PROXY",
    TcpProxy = "TCP_PROXY",
    SslProxy = "SSL_PROXY"
}
/**
 * For display only. Metadata associated with a load balancer.
 */
export declare class LoadBalancerInfo extends SpeakeasyBase {
    /**
     * Type of load balancer's backend configuration.
     */
    backendType?: LoadBalancerInfoBackendTypeEnum;
    /**
     * Backend configuration URI.
     */
    backendUri?: string;
    /**
     * Information for the loadbalancer backends.
     */
    backends?: LoadBalancerBackend[];
    /**
     * URI of the health check for the load balancer.
     */
    healthCheckUri?: string;
    /**
     * Type of the load balancer.
     */
    loadBalancerType?: LoadBalancerInfoLoadBalancerTypeEnum;
}
