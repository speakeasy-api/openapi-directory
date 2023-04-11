import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetLoadBalancersIdRequest extends SpeakeasyBase {
    /**
     * ID of the Load Balancer
     */
    id: number;
}
/**
 * Type of the algorithm
 */
export declare enum GetLoadBalancersId200ApplicationJSONLoadBalancerAlgorithmTypeEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}
/**
 * Algorithm of the Load Balancer
 */
export declare class GetLoadBalancersId200ApplicationJSONLoadBalancerAlgorithm extends SpeakeasyBase {
    /**
     * Type of the algorithm
     */
    type: GetLoadBalancersId200ApplicationJSONLoadBalancerAlgorithmTypeEnum;
}
/**
 * Hourly costs for a Resource in this Location
 */
export declare class GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly extends SpeakeasyBase {
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
export declare class GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly extends SpeakeasyBase {
    /**
     * Price with VAT added
     */
    gross: string;
    /**
     * Price without VAT
     */
    net: string;
}
export declare class GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTypePrices extends SpeakeasyBase {
    /**
     * Name of the Location the price is for
     */
    location: string;
    /**
     * Hourly costs for a Resource in this Location
     */
    priceHourly: GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly;
    /**
     * Monthly costs for a Resource in this Location
     */
    priceMonthly: GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly;
}
export declare class GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerType extends SpeakeasyBase {
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
    prices: GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTypePrices[];
}
export declare class GetLoadBalancersId200ApplicationJSONLoadBalancerLocation extends SpeakeasyBase {
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
export declare class GetLoadBalancersId200ApplicationJSONLoadBalancerPrivateNet extends SpeakeasyBase {
    ip?: string;
    network?: number;
}
/**
 * Protection configuration for the Resource
 */
export declare class GetLoadBalancersId200ApplicationJSONLoadBalancerProtection extends SpeakeasyBase {
    /**
     * If true, prevents the Resource from being deleted
     */
    delete: boolean;
}
/**
 * IP address (v4)
 */
export declare class GetLoadBalancersId200ApplicationJSONLoadBalancerPublicNetIpv4 extends SpeakeasyBase {
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
export declare class GetLoadBalancersId200ApplicationJSONLoadBalancerPublicNetIpv6 extends SpeakeasyBase {
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
export declare class GetLoadBalancersId200ApplicationJSONLoadBalancerPublicNet extends SpeakeasyBase {
    /**
     * Public Interface enabled or not
     */
    enabled: boolean;
    /**
     * IP address (v4)
     */
    ipv4: GetLoadBalancersId200ApplicationJSONLoadBalancerPublicNetIpv4;
    /**
     * IP address (v6)
     */
    ipv6: GetLoadBalancersId200ApplicationJSONLoadBalancerPublicNetIpv6;
}
/**
 * Additional configuration for protocol http
 */
export declare class GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp extends SpeakeasyBase {
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
export declare enum GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum {
    Tcp = "tcp",
    Http = "http"
}
/**
 * Service health check
 */
export declare class GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck extends SpeakeasyBase {
    /**
     * Additional configuration for protocol http
     */
    http?: GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
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
    protocol: GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;
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
export declare class GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHTTP extends SpeakeasyBase {
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
export declare enum GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum {
    Tcp = "tcp",
    Http = "http",
    Https = "https"
}
export declare class GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerService extends SpeakeasyBase {
    /**
     * Port the Load Balancer will balance to
     */
    destinationPort: number;
    /**
     * Service health check
     */
    healthCheck: GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck;
    /**
     * Configuration option for protocols http and https
     */
    http?: GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHTTP;
    /**
     * Port the Load Balancer listens on
     */
    listenPort: number;
    /**
     * Protocol of the Load Balancer
     */
    protocol: GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum;
    /**
     * Is Proxyprotocol enabled or not
     */
    proxyprotocol: boolean;
}
export declare enum GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatusStatusEnum {
    Healthy = "healthy",
    Unhealthy = "unhealthy",
    Unknown = "unknown"
}
export declare class GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatus extends SpeakeasyBase {
    listenPort?: number;
    status?: GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatusStatusEnum;
}
/**
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
 */
export declare class GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetIp extends SpeakeasyBase {
    /**
     * IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.
     */
    ip: string;
}
/**
 * Label selector and a list of selected targets
 */
export declare class GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector extends SpeakeasyBase {
    /**
     * Label selector
     */
    selector: string;
}
/**
 * Server where the traffic should be routed through
 */
export declare class GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer extends SpeakeasyBase {
    /**
     * ID of the Server
     */
    id: number;
}
export declare enum GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatusStatusEnum {
    Healthy = "healthy",
    Unhealthy = "unhealthy",
    Unknown = "unknown"
}
export declare class GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatus extends SpeakeasyBase {
    listenPort?: number;
    status?: GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatusStatusEnum;
}
export declare class GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsServer extends SpeakeasyBase {
    /**
     * ID of the Server
     */
    id: number;
}
export declare class GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetTargets extends SpeakeasyBase {
    healthStatus?: GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatus[];
    server?: GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsServer;
    type?: string;
    usePrivateIp?: boolean;
}
/**
 * Type of the resource
 */
export declare enum GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum {
    Server = "server",
    LabelSelector = "label_selector",
    Ip = "ip"
}
export declare class GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTarget extends SpeakeasyBase {
    /**
     * List of health statuses of the services on this target
     */
    healthStatus?: GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatus[];
    /**
     * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
     */
    ip?: GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetIp;
    /**
     * Label selector and a list of selected targets
     */
    labelSelector?: GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector;
    /**
     * Server where the traffic should be routed through
     */
    server?: GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer;
    /**
     * List of selected targets
     */
    targets?: GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetTargets[];
    /**
     * Type of the resource
     */
    type: GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum;
    /**
     * Use the private network IP instead of the public IP. Default value is false.
     */
    usePrivateIp?: boolean;
}
export declare class GetLoadBalancersId200ApplicationJSONLoadBalancer extends SpeakeasyBase {
    /**
     * Algorithm of the Load Balancer
     */
    algorithm: GetLoadBalancersId200ApplicationJSONLoadBalancerAlgorithm;
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
    loadBalancerType: GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerType;
    location: GetLoadBalancersId200ApplicationJSONLoadBalancerLocation;
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
    privateNet: GetLoadBalancersId200ApplicationJSONLoadBalancerPrivateNet[];
    /**
     * Protection configuration for the Resource
     */
    protection: GetLoadBalancersId200ApplicationJSONLoadBalancerProtection;
    /**
     * Public network information
     */
    publicNet: GetLoadBalancersId200ApplicationJSONLoadBalancerPublicNet;
    /**
     * List of services that belong to this Load Balancer
     */
    services: GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerService[];
    /**
     * List of targets that belong to this Load Balancer
     */
    targets: GetLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTarget[];
}
/**
 * The `load_balancer` key contains the Load Balancer
 */
export declare class GetLoadBalancersId200ApplicationJSON extends SpeakeasyBase {
    loadBalancer: GetLoadBalancersId200ApplicationJSONLoadBalancer;
}
export declare class GetLoadBalancersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `load_balancer` key contains the Load Balancer
     */
    getLoadBalancersId200ApplicationJSONObject?: GetLoadBalancersId200ApplicationJSON;
}
