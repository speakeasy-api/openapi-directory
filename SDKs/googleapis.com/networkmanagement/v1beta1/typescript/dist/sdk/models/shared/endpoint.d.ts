import { SpeakeasyBase } from "../../../internal/utils";
import { AppEngineVersionEndpoint } from "./appengineversionendpoint";
import { CloudFunctionEndpoint } from "./cloudfunctionendpoint";
import { CloudRunRevisionEndpoint } from "./cloudrunrevisionendpoint";
/**
 * Type of the network where the endpoint is located. Applicable only to source endpoint, as destination network type can be inferred from the source.
 */
export declare enum EndpointNetworkTypeEnum {
    NetworkTypeUnspecified = "NETWORK_TYPE_UNSPECIFIED",
    GcpNetwork = "GCP_NETWORK",
    NonGcpNetwork = "NON_GCP_NETWORK"
}
/**
 * Source or destination of the Connectivity Test.
 */
export declare class EndpointInput extends SpeakeasyBase {
    /**
     * Wrapper for app engine service version attributes.
     */
    appEngineVersion?: AppEngineVersionEndpoint;
    /**
     * Wrapper for Cloud Function attributes.
     */
    cloudFunction?: CloudFunctionEndpoint;
    /**
     * Wrapper for Cloud Run revision attributes.
     */
    cloudRunRevision?: CloudRunRevisionEndpoint;
    /**
     * A [Cloud SQL](https://cloud.google.com/sql) instance URI.
     */
    cloudSqlInstance?: string;
    /**
     * Forwarding rule URI. Forwarding rules are frontends for load balancers, PSC endpoints and Protocol Forwarding. Format: projects/{project}/global/forwardingRules/{id} or projects/{project}/regions/{region}/forwardingRules/{id}
     */
    forwardingRule?: string;
    /**
     * A cluster URI for [Google Kubernetes Engine master](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture).
     */
    gkeMasterCluster?: string;
    /**
     * A Compute Engine instance URI.
     */
    instance?: string;
    /**
     * The IP address of the endpoint, which can be an external or internal IP. An IPv6 address is only allowed when the test's destination is a [global load balancer VIP](https://cloud.google.com/load-balancing/docs/load-balancing-overview).
     */
    ipAddress?: string;
    /**
     * A Compute Engine network URI.
     */
    network?: string;
    /**
     * Type of the network where the endpoint is located. Applicable only to source endpoint, as destination network type can be inferred from the source.
     */
    networkType?: EndpointNetworkTypeEnum;
    /**
     * The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.
     */
    port?: number;
    /**
     * Project ID where the endpoint is located. The Project ID can be derived from the URI if you provide a VM instance or network URI. The following are two cases where you must provide the project ID: 1. Only the IP address is specified, and the IP address is within a GCP project. 2. When you are using Shared VPC and the IP address that you provide is from the service project. In this case, the network that the IP address resides in is defined in the host project.
     */
    projectId?: string;
}
/**
 * Output only. Specifies the type of the target of the forwarding rule.
 */
export declare enum EndpointForwardingRuleTargetEnum {
    ForwardingRuleTargetUnspecified = "FORWARDING_RULE_TARGET_UNSPECIFIED",
    Instance = "INSTANCE",
    LoadBalancer = "LOAD_BALANCER",
    VpnGateway = "VPN_GATEWAY",
    Psc = "PSC"
}
/**
 * Output only. Type of the load balancer the forwarding rule points to.
 */
export declare enum EndpointLoadBalancerTypeEnum {
    LoadBalancerTypeUnspecified = "LOAD_BALANCER_TYPE_UNSPECIFIED",
    HttpsAdvancedLoadBalancer = "HTTPS_ADVANCED_LOAD_BALANCER",
    HttpsLoadBalancer = "HTTPS_LOAD_BALANCER",
    RegionalHttpsLoadBalancer = "REGIONAL_HTTPS_LOAD_BALANCER",
    InternalHttpsLoadBalancer = "INTERNAL_HTTPS_LOAD_BALANCER",
    SslProxyLoadBalancer = "SSL_PROXY_LOAD_BALANCER",
    TcpProxyLoadBalancer = "TCP_PROXY_LOAD_BALANCER",
    InternalTcpProxyLoadBalancer = "INTERNAL_TCP_PROXY_LOAD_BALANCER",
    NetworkLoadBalancer = "NETWORK_LOAD_BALANCER",
    LegacyNetworkLoadBalancer = "LEGACY_NETWORK_LOAD_BALANCER",
    TcpUdpInternalLoadBalancer = "TCP_UDP_INTERNAL_LOAD_BALANCER"
}
/**
 * Source or destination of the Connectivity Test.
 */
export declare class Endpoint extends SpeakeasyBase {
    /**
     * Wrapper for app engine service version attributes.
     */
    appEngineVersion?: AppEngineVersionEndpoint;
    /**
     * Wrapper for Cloud Function attributes.
     */
    cloudFunction?: CloudFunctionEndpoint;
    /**
     * Wrapper for Cloud Run revision attributes.
     */
    cloudRunRevision?: CloudRunRevisionEndpoint;
    /**
     * A [Cloud SQL](https://cloud.google.com/sql) instance URI.
     */
    cloudSqlInstance?: string;
    /**
     * Forwarding rule URI. Forwarding rules are frontends for load balancers, PSC endpoints and Protocol Forwarding. Format: projects/{project}/global/forwardingRules/{id} or projects/{project}/regions/{region}/forwardingRules/{id}
     */
    forwardingRule?: string;
    /**
     * Output only. Specifies the type of the target of the forwarding rule.
     */
    forwardingRuleTarget?: EndpointForwardingRuleTargetEnum;
    /**
     * A cluster URI for [Google Kubernetes Engine master](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture).
     */
    gkeMasterCluster?: string;
    /**
     * A Compute Engine instance URI.
     */
    instance?: string;
    /**
     * The IP address of the endpoint, which can be an external or internal IP. An IPv6 address is only allowed when the test's destination is a [global load balancer VIP](https://cloud.google.com/load-balancing/docs/load-balancing-overview).
     */
    ipAddress?: string;
    /**
     * Output only. ID of the load balancer the forwarding rule points to. Empty for forwarding rules not related to load balancers.
     */
    loadBalancerId?: string;
    /**
     * Output only. Type of the load balancer the forwarding rule points to.
     */
    loadBalancerType?: EndpointLoadBalancerTypeEnum;
    /**
     * A Compute Engine network URI.
     */
    network?: string;
    /**
     * Type of the network where the endpoint is located. Applicable only to source endpoint, as destination network type can be inferred from the source.
     */
    networkType?: EndpointNetworkTypeEnum;
    /**
     * The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.
     */
    port?: number;
    /**
     * Project ID where the endpoint is located. The Project ID can be derived from the URI if you provide a VM instance or network URI. The following are two cases where you must provide the project ID: 1. Only the IP address is specified, and the IP address is within a GCP project. 2. When you are using Shared VPC and the IP address that you provide is from the service project. In this case, the network that the IP address resides in is defined in the host project.
     */
    projectId?: string;
}
