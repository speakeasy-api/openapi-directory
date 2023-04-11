import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Type of the algorithm
 */
export declare enum PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}
/**
 * Algorithm of the Load Balancer
 */
export declare class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm extends SpeakeasyBase {
    /**
     * Type of the algorithm
     */
    type: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum;
}
/**
 * User-defined labels (key-value pairs)
 */
export declare class PostLoadBalancersCreateLoadBalancerRequestLabels extends SpeakeasyBase {
    /**
     * New label
     */
    labelkey?: string;
}
/**
 * Additional configuration for protocol http
 */
export declare class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp extends SpeakeasyBase {
    /**
     * Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.
     */
    domain: string;
    /**
     * HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.
     */
    path: string;
    /**
     * String that must be contained in HTTP response in order to pass the health check
     */
    response?: string;
    /**
     * List of returned HTTP status codes in order to pass the health check. Supports the wildcards `?` for exactly one character and `*` for multiple ones. The default is to pass the health check for any status code between 2?? and 3??.
     */
    statusCodes?: string[];
    /**
     * Use HTTPS for health check
     */
    tls?: boolean;
}
/**
 * Type of the health check
 */
export declare enum PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum {
    Tcp = "tcp",
    Http = "http"
}
/**
 * Service health check
 */
export declare class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck extends SpeakeasyBase {
    /**
     * Additional configuration for protocol http
     */
    http?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
    /**
     * Time interval in seconds health checks are performed
     */
    interval: number;
    /**
     * Port the health check will be performed on
     */
    port: number;
    /**
     * Type of the health check
     */
    protocol: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;
    /**
     * Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again
     */
    retries: number;
    /**
     * Time in seconds after an attempt is considered a timeout
     */
    timeout: number;
}
/**
 * Configuration option for protocols http and https
 */
export declare class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHTTP extends SpeakeasyBase {
    /**
     * IDs of the Certificates to use for TLS/SSL termination by the Load Balancer; empty for TLS/SSL passthrough or if `protocol` is "http"
     */
    certificates?: number[];
    /**
     * Lifetime of the cookie used for sticky sessions
     */
    cookieLifetime?: number;
    /**
     * Name of the cookie used for sticky sessions
     */
    cookieName?: string;
    /**
     * Redirect HTTP requests to HTTPS. Only available if protocol is "https". Default `false`
     */
    redirectHttp?: boolean;
    /**
     * Use sticky sessions. Only available if protocol is "http" or "https". Default `false`
     */
    stickySessions?: boolean;
}
/**
 * Protocol of the Load Balancer
 */
export declare enum PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum {
    Tcp = "tcp",
    Http = "http",
    Https = "https"
}
export declare class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService extends SpeakeasyBase {
    /**
     * Port the Load Balancer will balance to
     */
    destinationPort: number;
    /**
     * Service health check
     */
    healthCheck: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck;
    /**
     * Configuration option for protocols http and https
     */
    http?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHTTP;
    /**
     * Port the Load Balancer listens on
     */
    listenPort: number;
    /**
     * Protocol of the Load Balancer
     */
    protocol: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum;
    /**
     * Is Proxyprotocol enabled or not
     */
    proxyprotocol: boolean;
}
export declare enum PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatusStatusEnum {
    Healthy = "healthy",
    Unhealthy = "unhealthy",
    Unknown = "unknown"
}
export declare class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus extends SpeakeasyBase {
    listenPort?: number;
    status?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatusStatusEnum;
}
/**
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
 */
export declare class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIp extends SpeakeasyBase {
    /**
     * IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.
     */
    ip: string;
}
/**
 * Label selector and a list of selected targets
 */
export declare class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector extends SpeakeasyBase {
    /**
     * Label selector
     */
    selector: string;
}
/**
 * Server where the traffic should be routed through
 */
export declare class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer extends SpeakeasyBase {
    /**
     * ID of the Server
     */
    id: number;
}
export declare enum PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsHealthStatusStatusEnum {
    Healthy = "healthy",
    Unhealthy = "unhealthy",
    Unknown = "unknown"
}
export declare class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsHealthStatus extends SpeakeasyBase {
    listenPort?: number;
    status?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsHealthStatusStatusEnum;
}
export declare class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsServer extends SpeakeasyBase {
    /**
     * ID of the Server
     */
    id: number;
}
export declare class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets extends SpeakeasyBase {
    healthStatus?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsHealthStatus[];
    server?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsServer;
    type?: string;
    usePrivateIp?: boolean;
}
/**
 * Type of the resource
 */
export declare enum PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum {
    Server = "server",
    LabelSelector = "label_selector",
    Ip = "ip"
}
export declare class PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget extends SpeakeasyBase {
    /**
     * List of health statuses of the services on this target
     */
    healthStatus?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus[];
    /**
     * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
     */
    ip?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIp;
    /**
     * Label selector and a list of selected targets
     */
    labelSelector?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector;
    /**
     * Server where the traffic should be routed through
     */
    server?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer;
    /**
     * List of selected targets
     */
    targets?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets[];
    /**
     * Type of the resource
     */
    type: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum;
    /**
     * Use the private network IP instead of the public IP. Default value is false.
     */
    usePrivateIp?: boolean;
}
export declare class PostLoadBalancersCreateLoadBalancerRequest extends SpeakeasyBase {
    /**
     * Algorithm of the Load Balancer
     */
    algorithm: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm;
    /**
     * User-defined labels (key-value pairs)
     */
    labels?: PostLoadBalancersCreateLoadBalancerRequestLabels;
    /**
     * ID or name of the Load Balancer type this Load Balancer should be created with
     */
    loadBalancerType: string;
    /**
     * ID or name of Location to create Load Balancer in
     */
    location?: string;
    /**
     * Name of the Load Balancer
     */
    name: string;
    /**
     * ID of the network the Load Balancer should be attached to on creation
     */
    network?: number;
    /**
     * Name of network zone
     */
    networkZone?: string;
    /**
     * Enable or disable the public interface of the Load Balancer
     */
    publicInterface?: boolean;
    /**
     * Array of services
     */
    services?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService[];
    /**
     * Array of targets
     */
    targets?: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget[];
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostLoadBalancers201ApplicationJSONActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostLoadBalancers201ApplicationJSONActionResources extends SpeakeasyBase {
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Type of resource referenced
     */
    type: string;
}
/**
 * Status of the Action
 */
export declare enum PostLoadBalancers201ApplicationJSONActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostLoadBalancers201ApplicationJSONAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostLoadBalancers201ApplicationJSONActionError;
    /**
     * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
     */
    finished: string;
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Progress of Action in percent
     */
    progress: number;
    /**
     * Resources the Action relates to
     */
    resources: PostLoadBalancers201ApplicationJSONActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostLoadBalancers201ApplicationJSONActionStatusEnum;
}
/**
 * Type of the algorithm
 */
export declare enum PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithmTypeEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}
/**
 * Algorithm of the Load Balancer
 */
export declare class PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithm extends SpeakeasyBase {
    /**
     * Type of the algorithm
     */
    type: PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithmTypeEnum;
}
/**
 * Hourly costs for a Resource in this Location
 */
export declare class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly extends SpeakeasyBase {
    /**
     * Price with VAT added
     */
    gross: string;
    /**
     * Price without VAT
     */
    net: string;
}
/**
 * Monthly costs for a Resource in this Location
 */
export declare class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly extends SpeakeasyBase {
    /**
     * Price with VAT added
     */
    gross: string;
    /**
     * Price without VAT
     */
    net: string;
}
export declare class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePrices extends SpeakeasyBase {
    /**
     * Name of the Location the price is for
     */
    location: string;
    /**
     * Hourly costs for a Resource in this Location
     */
    priceHourly: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly;
    /**
     * Monthly costs for a Resource in this Location
     */
    priceMonthly: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly;
}
export declare class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerType extends SpeakeasyBase {
    /**
     * Point in time when the Load Balancer type is deprecated (in ISO-8601 format)
     */
    deprecated: string;
    /**
     * Description of the Load Balancer type
     */
    description: string;
    /**
     * ID of the Load Balancer type
     */
    id: number;
    /**
     * Number of SSL Certificates that can be assigned to a single Load Balancer
     */
    maxAssignedCertificates: number;
    /**
     * Number of maximum simultaneous open connections
     */
    maxConnections: number;
    /**
     * Number of services a Load Balancer of this type can have
     */
    maxServices: number;
    /**
     * Number of targets a single Load Balancer can have
     */
    maxTargets: number;
    /**
     * Unique identifier of the Load Balancer type
     */
    name: string;
    /**
     * Prices in different network zones
     */
    prices: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTypePrices[];
}
export declare class PostLoadBalancers201ApplicationJSONLoadBalancerLocation extends SpeakeasyBase {
    /**
     * City the Location is closest to
     */
    city: string;
    /**
     * ISO 3166-1 alpha-2 code of the country the Location resides in
     */
    country: string;
    /**
     * Description of the Location
     */
    description: string;
    /**
     * ID of the Location
     */
    id: number;
    /**
     * Latitude of the city closest to the Location
     */
    latitude: number;
    /**
     * Longitude of the city closest to the Location
     */
    longitude: number;
    /**
     * Unique identifier of the Location
     */
    name: string;
    /**
     * Name of network zone this Location resides in
     */
    networkZone: string;
}
export declare class PostLoadBalancers201ApplicationJSONLoadBalancerPrivateNet extends SpeakeasyBase {
    ip?: string;
    network?: number;
}
/**
 * Protection configuration for the Resource
 */
export declare class PostLoadBalancers201ApplicationJSONLoadBalancerProtection extends SpeakeasyBase {
    /**
     * If true, prevents the Resource from being deleted
     */
    delete: boolean;
}
/**
 * IP address (v4)
 */
export declare class PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv4 extends SpeakeasyBase {
    /**
     * Reverse DNS PTR entry for the IPv4 address of this Load Balancer
     */
    dnsPtr?: string;
    /**
     * IP address (v4) of this Load Balancer
     */
    ip?: string;
}
/**
 * IP address (v6)
 */
export declare class PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv6 extends SpeakeasyBase {
    /**
     * Reverse DNS PTR entry for the IPv6 address of this Load Balancer
     */
    dnsPtr?: string;
    /**
     * IP address (v6) of this Load Balancer
     */
    ip?: string;
}
/**
 * Public network information
 */
export declare class PostLoadBalancers201ApplicationJSONLoadBalancerPublicNet extends SpeakeasyBase {
    /**
     * Public Interface enabled or not
     */
    enabled: boolean;
    /**
     * IP address (v4)
     */
    ipv4: PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv4;
    /**
     * IP address (v6)
     */
    ipv6: PostLoadBalancers201ApplicationJSONLoadBalancerPublicNetIpv6;
}
/**
 * Additional configuration for protocol http
 */
export declare class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp extends SpeakeasyBase {
    /**
     * Host header to send in the HTTP request. May not contain spaces, percent or backslash symbols. Can be null, in that case no host header is sent.
     */
    domain: string;
    /**
     * HTTP path to use for health checks. May not contain literal spaces, use percent-encoding instead.
     */
    path: string;
    /**
     * String that must be contained in HTTP response in order to pass the health check
     */
    response?: string;
    /**
     * List of returned HTTP status codes in order to pass the health check. Supports the wildcards `?` for exactly one character and `*` for multiple ones. The default is to pass the health check for any status code between 2?? and 3??.
     */
    statusCodes?: string[];
    /**
     * Use HTTPS for health check
     */
    tls?: boolean;
}
/**
 * Type of the health check
 */
export declare enum PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum {
    Tcp = "tcp",
    Http = "http"
}
/**
 * Service health check
 */
export declare class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck extends SpeakeasyBase {
    /**
     * Additional configuration for protocol http
     */
    http?: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
    /**
     * Time interval in seconds health checks are performed
     */
    interval: number;
    /**
     * Port the health check will be performed on
     */
    port: number;
    /**
     * Type of the health check
     */
    protocol: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;
    /**
     * Unsuccessful retries needed until a target is considered unhealthy; an unhealthy target needs the same number of successful retries to become healthy again
     */
    retries: number;
    /**
     * Time in seconds after an attempt is considered a timeout
     */
    timeout: number;
}
/**
 * Configuration option for protocols http and https
 */
export declare class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHTTP extends SpeakeasyBase {
    /**
     * IDs of the Certificates to use for TLS/SSL termination by the Load Balancer; empty for TLS/SSL passthrough or if `protocol` is "http"
     */
    certificates?: number[];
    /**
     * Lifetime of the cookie used for sticky sessions
     */
    cookieLifetime?: number;
    /**
     * Name of the cookie used for sticky sessions
     */
    cookieName?: string;
    /**
     * Redirect HTTP requests to HTTPS. Only available if protocol is "https". Default `false`
     */
    redirectHttp?: boolean;
    /**
     * Use sticky sessions. Only available if protocol is "http" or "https". Default `false`
     */
    stickySessions?: boolean;
}
/**
 * Protocol of the Load Balancer
 */
export declare enum PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum {
    Tcp = "tcp",
    Http = "http",
    Https = "https"
}
export declare class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerService extends SpeakeasyBase {
    /**
     * Port the Load Balancer will balance to
     */
    destinationPort: number;
    /**
     * Service health check
     */
    healthCheck: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck;
    /**
     * Configuration option for protocols http and https
     */
    http?: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHTTP;
    /**
     * Port the Load Balancer listens on
     */
    listenPort: number;
    /**
     * Protocol of the Load Balancer
     */
    protocol: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum;
    /**
     * Is Proxyprotocol enabled or not
     */
    proxyprotocol: boolean;
}
export declare enum PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatusStatusEnum {
    Healthy = "healthy",
    Unhealthy = "unhealthy",
    Unknown = "unknown"
}
export declare class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatus extends SpeakeasyBase {
    listenPort?: number;
    status?: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatusStatusEnum;
}
/**
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
 */
export declare class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetIp extends SpeakeasyBase {
    /**
     * IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.
     */
    ip: string;
}
/**
 * Label selector and a list of selected targets
 */
export declare class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector extends SpeakeasyBase {
    /**
     * Label selector
     */
    selector: string;
}
/**
 * Server where the traffic should be routed through
 */
export declare class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer extends SpeakeasyBase {
    /**
     * ID of the Server
     */
    id: number;
}
export declare enum PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatusStatusEnum {
    Healthy = "healthy",
    Unhealthy = "unhealthy",
    Unknown = "unknown"
}
export declare class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatus extends SpeakeasyBase {
    listenPort?: number;
    status?: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatusStatusEnum;
}
export declare class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTargetsServer extends SpeakeasyBase {
    /**
     * ID of the Server
     */
    id: number;
}
export declare class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTargets extends SpeakeasyBase {
    healthStatus?: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatus[];
    server?: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTargetsServer;
    type?: string;
    usePrivateIp?: boolean;
}
/**
 * Type of the resource
 */
export declare enum PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum {
    Server = "server",
    LabelSelector = "label_selector",
    Ip = "ip"
}
export declare class PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTarget extends SpeakeasyBase {
    /**
     * List of health statuses of the services on this target
     */
    healthStatus?: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatus[];
    /**
     * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
     */
    ip?: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetIp;
    /**
     * Label selector and a list of selected targets
     */
    labelSelector?: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector;
    /**
     * Server where the traffic should be routed through
     */
    server?: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer;
    /**
     * List of selected targets
     */
    targets?: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTargets[];
    /**
     * Type of the resource
     */
    type: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum;
    /**
     * Use the private network IP instead of the public IP. Default value is false.
     */
    usePrivateIp?: boolean;
}
export declare class PostLoadBalancers201ApplicationJSONLoadBalancer extends SpeakeasyBase {
    /**
     * Algorithm of the Load Balancer
     */
    algorithm: PostLoadBalancers201ApplicationJSONLoadBalancerAlgorithm;
    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Free Traffic for the current billing period in bytes
     */
    includedTraffic: number;
    /**
     * Inbound Traffic for the current billing period in bytes
     */
    ingoingTraffic: number;
    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;
    loadBalancerType: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerType;
    location: PostLoadBalancers201ApplicationJSONLoadBalancerLocation;
    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;
    /**
     * Outbound Traffic for the current billing period in bytes
     */
    outgoingTraffic: number;
    /**
     * Private networks information
     */
    privateNet: PostLoadBalancers201ApplicationJSONLoadBalancerPrivateNet[];
    /**
     * Protection configuration for the Resource
     */
    protection: PostLoadBalancers201ApplicationJSONLoadBalancerProtection;
    /**
     * Public network information
     */
    publicNet: PostLoadBalancers201ApplicationJSONLoadBalancerPublicNet;
    /**
     * List of services that belong to this Load Balancer
     */
    services: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerService[];
    /**
     * List of targets that belong to this Load Balancer
     */
    targets: PostLoadBalancers201ApplicationJSONLoadBalancerLoadBalancerTarget[];
}
/**
 * The `load_balancer` key contains the Load Balancer that was just created
 */
export declare class PostLoadBalancers201ApplicationJSON extends SpeakeasyBase {
    action: PostLoadBalancers201ApplicationJSONAction;
    loadBalancer: PostLoadBalancers201ApplicationJSONLoadBalancer;
}
export declare class PostLoadBalancersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `load_balancer` key contains the Load Balancer that was just created
     */
    postLoadBalancers201ApplicationJSONObject?: PostLoadBalancers201ApplicationJSON;
}
