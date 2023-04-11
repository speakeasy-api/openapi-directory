import { SpeakeasyBase } from "../../../internal/utils";
import { Backend } from "./backend";
import { BackendServiceCdnPolicy } from "./backendservicecdnpolicy";
import { BackendServiceConnectionTrackingPolicy } from "./backendserviceconnectiontrackingpolicy";
import { BackendServiceFailoverPolicy } from "./backendservicefailoverpolicy";
import { BackendServiceIAP } from "./backendserviceiap";
import { BackendServiceLocalityLoadBalancingPolicyConfig } from "./backendservicelocalityloadbalancingpolicyconfig";
import { BackendServiceLogConfig } from "./backendservicelogconfig";
import { CircuitBreakers } from "./circuitbreakers";
import { ConnectionDraining } from "./connectiondraining";
import { ConsistentHashLoadBalancerSettings } from "./consistenthashloadbalancersettings";
import { Duration } from "./duration";
import { OutlierDetection } from "./outlierdetection";
import { SecuritySettings } from "./securitysettings";
import { Subsetting } from "./subsetting";
/**
 * Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header.
 */
export declare enum BackendServiceCompressionModeEnum {
    Automatic = "AUTOMATIC",
    Disabled = "DISABLED"
}
/**
 * Specifies preference of traffic to the backend (from the proxy and from the client for proxyless gRPC). The possible values are: - IPV4_ONLY: Only send IPv4 traffic to the backends of the Backend Service (Instance Group, Managed Instance Group, Network Endpoint Group) regardless of traffic from the client to the proxy. Only IPv4 health-checks are used to check the health of the backends. This is the default setting. - PREFER_IPV6: Prioritize the connection to the endpoints IPv6 address over its IPv4 address (provided there is a healthy IPv6 address). - IPV6_ONLY: Only send IPv6 traffic to the backends of the Backend Service (Instance Group, Managed Instance Group, Network Endpoint Group) regardless of traffic from the client to the proxy. Only IPv6 health-checks are used to check the health of the backends. This field is applicable to either: - Advanced Global External HTTPS Load Balancing (load balancing scheme EXTERNAL_MANAGED), - Regional External HTTPS Load Balancing, - Internal TCP Proxy (load balancing scheme INTERNAL_MANAGED), - Regional Internal HTTPS Load Balancing (load balancing scheme INTERNAL_MANAGED), - Traffic Director with Envoy proxies and proxyless gRPC (load balancing scheme INTERNAL_SELF_MANAGED).
 */
export declare enum BackendServiceIpAddressSelectionPolicyEnum {
    Ipv4Only = "IPV4_ONLY",
    Ipv6Only = "IPV6_ONLY",
    IpAddressSelectionPolicyUnspecified = "IP_ADDRESS_SELECTION_POLICY_UNSPECIFIED",
    PreferIpv6 = "PREFER_IPV6"
}
/**
 * Specifies the load balancer type. A backend service created for one type of load balancer cannot be used with another. For more information, refer to Choosing a load balancer.
 */
export declare enum BackendServiceLoadBalancingSchemeEnum {
    External = "EXTERNAL",
    ExternalManaged = "EXTERNAL_MANAGED",
    Internal = "INTERNAL",
    InternalManaged = "INTERNAL_MANAGED",
    InternalSelfManaged = "INTERNAL_SELF_MANAGED",
    InvalidLoadBalancingScheme = "INVALID_LOAD_BALANCING_SCHEME"
}
/**
 * The load balancing algorithm used within the scope of the locality. The possible values are: - ROUND_ROBIN: This is a simple policy in which each healthy backend is selected in round robin order. This is the default. - LEAST_REQUEST: An O(1) algorithm which selects two random healthy hosts and picks the host which has fewer active requests. - RING_HASH: The ring/modulo hash load balancer implements consistent hashing to backends. The algorithm has the property that the addition/removal of a host from a set of N hosts only affects 1/N of the requests. - RANDOM: The load balancer selects a random healthy host. - ORIGINAL_DESTINATION: Backend host is selected based on the client connection metadata, i.e., connections are opened to the same address as the destination address of the incoming connection before the connection was redirected to the load balancer. - MAGLEV: used as a drop in replacement for the ring hash load balancer. Maglev is not as stable as ring hash but has faster table lookup build times and host selection times. For more information about Maglev, see https://ai.google/research/pubs/pub44824 This field is applicable to either: - A regional backend service with the service_protocol set to HTTP, HTTPS, or HTTP2, and load_balancing_scheme set to INTERNAL_MANAGED. - A global backend service with the load_balancing_scheme set to INTERNAL_SELF_MANAGED. If sessionAffinity is not NONE, and this field is not set to MAGLEV or RING_HASH, session affinity settings will not take effect. Only ROUND_ROBIN and RING_HASH are supported when the backend service is referenced by a URL map that is bound to target gRPC proxy that has validateForProxyless field set to true.
 */
export declare enum BackendServiceLocalityLbPolicyEnum {
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
 * The protocol this BackendService uses to communicate with backends. Possible values are HTTP, HTTPS, HTTP2, TCP, SSL, UDP or GRPC. depending on the chosen load balancer or Traffic Director configuration. Refer to the documentation for the load balancers or for Traffic Director for more information. Must be set to GRPC when the backend service is referenced by a URL map that is bound to target gRPC proxy.
 */
export declare enum BackendServiceProtocolEnum {
    All = "ALL",
    Grpc = "GRPC",
    Http = "HTTP",
    Http2 = "HTTP2",
    Https = "HTTPS",
    Ssl = "SSL",
    Tcp = "TCP",
    Udp = "UDP",
    Unspecified = "UNSPECIFIED"
}
/**
 * Type of session affinity to use. The default is NONE. Only NONE and HEADER_FIELD are supported when the backend service is referenced by a URL map that is bound to target gRPC proxy that has validateForProxyless field set to true. For more details, see: [Session Affinity](https://cloud.google.com/load-balancing/docs/backend-service#session_affinity).
 */
export declare enum BackendServiceSessionAffinityEnum {
    ClientIp = "CLIENT_IP",
    ClientIpNoDestination = "CLIENT_IP_NO_DESTINATION",
    ClientIpPortProto = "CLIENT_IP_PORT_PROTO",
    ClientIpProto = "CLIENT_IP_PROTO",
    GeneratedCookie = "GENERATED_COOKIE",
    HeaderField = "HEADER_FIELD",
    HttpCookie = "HTTP_COOKIE",
    None = "NONE"
}
/**
 * The network scope of the backends that can be added to the backend service. This field can be either GLOBAL_VPC_NETWORK or REGIONAL_VPC_NETWORK. A backend service with the VPC scope set to GLOBAL_VPC_NETWORK is only allowed to have backends in global VPC networks. When the VPC scope is set to REGIONAL_VPC_NETWORK the backend service is only allowed to have backends in regional networks in the same scope as the backend service. Note: if not specified then GLOBAL_VPC_NETWORK will be used.
 */
export declare enum BackendServiceVpcNetworkScopeEnum {
    GlobalVpcNetwork = "GLOBAL_VPC_NETWORK",
    RegionalVpcNetwork = "REGIONAL_VPC_NETWORK"
}
/**
 * Represents a Backend Service resource. A backend service defines how Google Cloud load balancers distribute traffic. The backend service configuration contains a set of values, such as the protocol used to connect to backends, various distribution and session settings, health checks, and timeouts. These settings provide fine-grained control over how your load balancer behaves. Most of the settings have default values that allow for easy configuration if you need to get started quickly. Backend services in Google Compute Engine can be either regionally or globally scoped. * [Global](https://cloud.google.com/compute/docs/reference/rest/alpha/backendServices) * [Regional](https://cloud.google.com/compute/docs/reference/rest/alpha/regionBackendServices) For more information, see Backend Services.
 */
export declare class BackendService extends SpeakeasyBase {
    /**
     * Lifetime of cookies in seconds. This setting is applicable to external and internal HTTP(S) load balancers and Traffic Director and requires GENERATED_COOKIE or HTTP_COOKIE session affinity. If set to 0, the cookie is non-persistent and lasts only until the end of the browser session (or equivalent). The maximum allowed value is two weeks (1,209,600). Not supported when the backend service is referenced by a URL map that is bound to target gRPC proxy that has validateForProxyless field set to true.
     */
    affinityCookieTtlSec?: number;
    /**
     * The list of backends that serve this BackendService.
     */
    backends?: Backend[];
    /**
     * Message containing Cloud CDN configuration for a backend service.
     */
    cdnPolicy?: BackendServiceCdnPolicy;
    /**
     * Settings controlling the volume of requests, connections and retries to this backend service.
     */
    circuitBreakers?: CircuitBreakers;
    /**
     * Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header.
     */
    compressionMode?: BackendServiceCompressionModeEnum;
    /**
     * Message containing connection draining configuration.
     */
    connectionDraining?: ConnectionDraining;
    /**
     * Connection Tracking configuration for this BackendService.
     */
    connectionTrackingPolicy?: BackendServiceConnectionTrackingPolicy;
    /**
     * This message defines settings for a consistent hash style load balancer.
     */
    consistentHash?: ConsistentHashLoadBalancerSettings;
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * Headers that the load balancer adds to proxied requests. See [Creating custom headers](https://cloud.google.com/load-balancing/docs/custom-headers).
     */
    customRequestHeaders?: string[];
    /**
     * Headers that the load balancer adds to proxied responses. See [Creating custom headers](https://cloud.google.com/load-balancing/docs/custom-headers).
     */
    customResponseHeaders?: string[];
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    /**
     * [Output Only] The resource URL for the edge security policy associated with this backend service.
     */
    edgeSecurityPolicy?: string;
    /**
     * If true, enables Cloud CDN for the backend service of an external HTTP(S) load balancer.
     */
    enableCDN?: boolean;
    /**
     * For load balancers that have configurable failover: [Internal TCP/UDP Load Balancing](https://cloud.google.com/load-balancing/docs/internal/failover-overview) and [external TCP/UDP Load Balancing](https://cloud.google.com/load-balancing/docs/network/networklb-failover-overview). On failover or failback, this field indicates whether connection draining will be honored. Google Cloud has a fixed connection draining timeout of 10 minutes. A setting of true terminates existing TCP connections to the active pool during failover and failback, immediately draining traffic. A setting of false allows existing TCP connections to persist, even on VMs no longer in the active pool, for up to the duration of the connection draining timeout (10 minutes).
     */
    failoverPolicy?: BackendServiceFailoverPolicy;
    /**
     * Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when inserting a BackendService. An up-to-date fingerprint must be provided in order to update the BackendService, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve a BackendService.
     */
    fingerprint?: string;
    /**
     * The list of URLs to the healthChecks, httpHealthChecks (legacy), or httpsHealthChecks (legacy) resource for health checking this backend service. Not all backend services support legacy health checks. See Load balancer guide. Currently, at most one health check can be specified for each backend service. Backend services with instance group or zonal NEG backends must have a health check. Backend services with internet or serverless NEG backends must not have a health check.
     */
    healthChecks?: string[];
    /**
     * Identity-Aware Proxy
     */
    iap?: BackendServiceIAP;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * Specifies preference of traffic to the backend (from the proxy and from the client for proxyless gRPC). The possible values are: - IPV4_ONLY: Only send IPv4 traffic to the backends of the Backend Service (Instance Group, Managed Instance Group, Network Endpoint Group) regardless of traffic from the client to the proxy. Only IPv4 health-checks are used to check the health of the backends. This is the default setting. - PREFER_IPV6: Prioritize the connection to the endpoints IPv6 address over its IPv4 address (provided there is a healthy IPv6 address). - IPV6_ONLY: Only send IPv6 traffic to the backends of the Backend Service (Instance Group, Managed Instance Group, Network Endpoint Group) regardless of traffic from the client to the proxy. Only IPv6 health-checks are used to check the health of the backends. This field is applicable to either: - Advanced Global External HTTPS Load Balancing (load balancing scheme EXTERNAL_MANAGED), - Regional External HTTPS Load Balancing, - Internal TCP Proxy (load balancing scheme INTERNAL_MANAGED), - Regional Internal HTTPS Load Balancing (load balancing scheme INTERNAL_MANAGED), - Traffic Director with Envoy proxies and proxyless gRPC (load balancing scheme INTERNAL_SELF_MANAGED).
     */
    ipAddressSelectionPolicy?: BackendServiceIpAddressSelectionPolicyEnum;
    /**
     * [Output Only] Type of resource. Always compute#backendService for backend services.
     */
    kind?: string;
    /**
     * Specifies the load balancer type. A backend service created for one type of load balancer cannot be used with another. For more information, refer to Choosing a load balancer.
     */
    loadBalancingScheme?: BackendServiceLoadBalancingSchemeEnum;
    /**
     * A list of locality load-balancing policies to be used in order of preference. When you use localityLbPolicies, you must set at least one value for either the localityLbPolicies[].policy or the localityLbPolicies[].customPolicy field. localityLbPolicies overrides any value set in the localityLbPolicy field. For an example of how to use this field, see Define a list of preferred policies. Caution: This field and its children are intended for use in a service mesh that includes gRPC clients only. Envoy proxies can't use backend services that have this configuration.
     */
    localityLbPolicies?: BackendServiceLocalityLoadBalancingPolicyConfig[];
    /**
     * The load balancing algorithm used within the scope of the locality. The possible values are: - ROUND_ROBIN: This is a simple policy in which each healthy backend is selected in round robin order. This is the default. - LEAST_REQUEST: An O(1) algorithm which selects two random healthy hosts and picks the host which has fewer active requests. - RING_HASH: The ring/modulo hash load balancer implements consistent hashing to backends. The algorithm has the property that the addition/removal of a host from a set of N hosts only affects 1/N of the requests. - RANDOM: The load balancer selects a random healthy host. - ORIGINAL_DESTINATION: Backend host is selected based on the client connection metadata, i.e., connections are opened to the same address as the destination address of the incoming connection before the connection was redirected to the load balancer. - MAGLEV: used as a drop in replacement for the ring hash load balancer. Maglev is not as stable as ring hash but has faster table lookup build times and host selection times. For more information about Maglev, see https://ai.google/research/pubs/pub44824 This field is applicable to either: - A regional backend service with the service_protocol set to HTTP, HTTPS, or HTTP2, and load_balancing_scheme set to INTERNAL_MANAGED. - A global backend service with the load_balancing_scheme set to INTERNAL_SELF_MANAGED. If sessionAffinity is not NONE, and this field is not set to MAGLEV or RING_HASH, session affinity settings will not take effect. Only ROUND_ROBIN and RING_HASH are supported when the backend service is referenced by a URL map that is bound to target gRPC proxy that has validateForProxyless field set to true.
     */
    localityLbPolicy?: BackendServiceLocalityLbPolicyEnum;
    /**
     * The available logging options for the load balancer traffic served by this backend service.
     */
    logConfig?: BackendServiceLogConfig;
    /**
     * A Duration represents a fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". Range is approximately 10,000 years.
     */
    maxStreamDuration?: Duration;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * The URL of the network to which this backend service belongs. This field can only be specified when the load balancing scheme is set to INTERNAL.
     */
    network?: string;
    /**
     * Settings controlling the eviction of unhealthy hosts from the load balancing pool for the backend service.
     */
    outlierDetection?: OutlierDetection;
    /**
     * Deprecated in favor of portName. The TCP port to connect on the backend. The default value is 80. For Internal TCP/UDP Load Balancing and Network Load Balancing, omit port.
     */
    port?: number;
    /**
     * A named port on a backend instance group representing the port for communication to the backend VMs in that group. The named port must be [defined on each backend instance group](https://cloud.google.com/load-balancing/docs/backend-service#named_ports). This parameter has no meaning if the backends are NEGs. For Internal TCP/UDP Load Balancing and Network Load Balancing, omit port_name.
     */
    portName?: string;
    /**
     * The protocol this BackendService uses to communicate with backends. Possible values are HTTP, HTTPS, HTTP2, TCP, SSL, UDP or GRPC. depending on the chosen load balancer or Traffic Director configuration. Refer to the documentation for the load balancers or for Traffic Director for more information. Must be set to GRPC when the backend service is referenced by a URL map that is bound to target gRPC proxy.
     */
    protocol?: BackendServiceProtocolEnum;
    /**
     * [Output Only] URL of the region where the regional backend service resides. This field is not applicable to global backend services. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
     */
    region?: string;
    /**
     * [Output Only] The resource URL for the security policy associated with this backend service.
     */
    securityPolicy?: string;
    /**
     * The authentication and authorization settings for a BackendService.
     */
    securitySettings?: SecuritySettings;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] Server-defined URL for this resource with the resource id.
     */
    selfLinkWithId?: string;
    /**
     * URLs of networkservices.ServiceBinding resources. Can only be set if load balancing scheme is INTERNAL_SELF_MANAGED. If set, lists of backends and health checks must be both empty.
     */
    serviceBindings?: string[];
    /**
     * URL to networkservices.ServiceLbPolicy resource. Can only be set if load balancing scheme is EXTERNAL, INTERNAL_MANAGED or INTERNAL_SELF_MANAGED. If used with a backend service, must reference a global policy. If used with a regional backend service, must reference a regional policy.
     */
    serviceLbPolicy?: string;
    /**
     * Type of session affinity to use. The default is NONE. Only NONE and HEADER_FIELD are supported when the backend service is referenced by a URL map that is bound to target gRPC proxy that has validateForProxyless field set to true. For more details, see: [Session Affinity](https://cloud.google.com/load-balancing/docs/backend-service#session_affinity).
     */
    sessionAffinity?: BackendServiceSessionAffinityEnum;
    /**
     * Subsetting configuration for this BackendService. Currently this is applicable only for Internal TCP/UDP load balancing, Internal HTTP(S) load balancing and Traffic Director.
     */
    subsetting?: Subsetting;
    /**
     * The backend service timeout has a different meaning depending on the type of load balancer. For more information see, Backend service settings. The default is 30 seconds. The full range of timeout values allowed goes from 1 through 2,147,483,647 seconds. This value can be overridden in the PathMatcher configuration of the UrlMap that references this backend service. Not supported when the backend service is referenced by a URL map that is bound to target gRPC proxy that has validateForProxyless field set to true. Instead, use maxStreamDuration.
     */
    timeoutSec?: number;
    /**
     * The network scope of the backends that can be added to the backend service. This field can be either GLOBAL_VPC_NETWORK or REGIONAL_VPC_NETWORK. A backend service with the VPC scope set to GLOBAL_VPC_NETWORK is only allowed to have backends in global VPC networks. When the VPC scope is set to REGIONAL_VPC_NETWORK the backend service is only allowed to have backends in regional networks in the same scope as the backend service. Note: if not specified then GLOBAL_VPC_NETWORK will be used.
     */
    vpcNetworkScope?: BackendServiceVpcNetworkScopeEnum;
}
