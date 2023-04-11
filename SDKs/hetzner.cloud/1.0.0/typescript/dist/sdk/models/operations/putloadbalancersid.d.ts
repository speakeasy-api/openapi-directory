import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutLoadBalancersIdRequestBody extends SpeakeasyBase {
    /**
     * User-defined labels (key-value pairs)
     */
    labels?: Record<string, any>;
    /**
     * New Load Balancer name
     */
    name?: string;
}
export declare class PutLoadBalancersIdRequest extends SpeakeasyBase {
    requestBody?: PutLoadBalancersIdRequestBody;
    /**
     * ID of the Load Balancer
     */
    id: number;
}
/**
 * Type of the algorithm
 */
export declare enum PutLoadBalancersId200ApplicationJSONLoadBalancerAlgorithmTypeEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}
/**
 * Algorithm of the Load Balancer
 */
export declare class PutLoadBalancersId200ApplicationJSONLoadBalancerAlgorithm extends SpeakeasyBase {
    /**
     * Type of the algorithm
     */
    type: PutLoadBalancersId200ApplicationJSONLoadBalancerAlgorithmTypeEnum;
}
/**
 * Hourly costs for a Resource in this Location
 */
export declare class PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly extends SpeakeasyBase {
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
export declare class PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly extends SpeakeasyBase {
    /**
     * Price with VAT added
     */
    gross: string;
    /**
     * Price without VAT
     */
    net: string;
}
export declare class PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTypePrices extends SpeakeasyBase {
    /**
     * Name of the Location the price is for
     */
    location: string;
    /**
     * Hourly costs for a Resource in this Location
     */
    priceHourly: PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceHourly;
    /**
     * Monthly costs for a Resource in this Location
     */
    priceMonthly: PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTypePricesPriceMonthly;
}
export declare class PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerType extends SpeakeasyBase {
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
    prices: PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTypePrices[];
}
export declare class PutLoadBalancersId200ApplicationJSONLoadBalancerLocation extends SpeakeasyBase {
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
export declare class PutLoadBalancersId200ApplicationJSONLoadBalancerPrivateNet extends SpeakeasyBase {
    ip?: string;
    network?: number;
}
/**
 * Protection configuration for the Resource
 */
export declare class PutLoadBalancersId200ApplicationJSONLoadBalancerProtection extends SpeakeasyBase {
    /**
     * If true, prevents the Resource from being deleted
     */
    delete: boolean;
}
/**
 * IP address (v4)
 */
export declare class PutLoadBalancersId200ApplicationJSONLoadBalancerPublicNetIpv4 extends SpeakeasyBase {
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
export declare class PutLoadBalancersId200ApplicationJSONLoadBalancerPublicNetIpv6 extends SpeakeasyBase {
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
export declare class PutLoadBalancersId200ApplicationJSONLoadBalancerPublicNet extends SpeakeasyBase {
    /**
     * Public Interface enabled or not
     */
    enabled: boolean;
    /**
     * IP address (v4)
     */
    ipv4: PutLoadBalancersId200ApplicationJSONLoadBalancerPublicNetIpv4;
    /**
     * IP address (v6)
     */
    ipv6: PutLoadBalancersId200ApplicationJSONLoadBalancerPublicNetIpv6;
}
/**
 * Additional configuration for protocol http
 */
export declare class PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp extends SpeakeasyBase {
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
export declare enum PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum {
    Tcp = "tcp",
    Http = "http"
}
/**
 * Service health check
 */
export declare class PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck extends SpeakeasyBase {
    /**
     * Additional configuration for protocol http
     */
    http?: PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
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
    protocol: PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;
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
export declare class PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHTTP extends SpeakeasyBase {
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
export declare enum PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum {
    Tcp = "tcp",
    Http = "http",
    Https = "https"
}
export declare class PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerService extends SpeakeasyBase {
    /**
     * Port the Load Balancer will balance to
     */
    destinationPort: number;
    /**
     * Service health check
     */
    healthCheck: PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck;
    /**
     * Configuration option for protocols http and https
     */
    http?: PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerServiceLoadBalancerServiceHTTP;
    /**
     * Port the Load Balancer listens on
     */
    listenPort: number;
    /**
     * Protocol of the Load Balancer
     */
    protocol: PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerServiceProtocolEnum;
    /**
     * Is Proxyprotocol enabled or not
     */
    proxyprotocol: boolean;
}
export declare enum PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatusStatusEnum {
    Healthy = "healthy",
    Unhealthy = "unhealthy",
    Unknown = "unknown"
}
export declare class PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatus extends SpeakeasyBase {
    listenPort?: number;
    status?: PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatusStatusEnum;
}
/**
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
 */
export declare class PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetIp extends SpeakeasyBase {
    /**
     * IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.
     */
    ip: string;
}
/**
 * Label selector and a list of selected targets
 */
export declare class PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector extends SpeakeasyBase {
    /**
     * Label selector
     */
    selector: string;
}
/**
 * Server where the traffic should be routed through
 */
export declare class PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer extends SpeakeasyBase {
    /**
     * ID of the Server
     */
    id: number;
}
export declare enum PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatusStatusEnum {
    Healthy = "healthy",
    Unhealthy = "unhealthy",
    Unknown = "unknown"
}
export declare class PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatus extends SpeakeasyBase {
    listenPort?: number;
    status?: PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatusStatusEnum;
}
export declare class PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsServer extends SpeakeasyBase {
    /**
     * ID of the Server
     */
    id: number;
}
export declare class PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetTargets extends SpeakeasyBase {
    healthStatus?: PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsHealthStatus[];
    server?: PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetTargetsServer;
    type?: string;
    usePrivateIp?: boolean;
}
/**
 * Type of the resource
 */
export declare enum PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum {
    Server = "server",
    LabelSelector = "label_selector",
    Ip = "ip"
}
export declare class PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTarget extends SpeakeasyBase {
    /**
     * List of health statuses of the services on this target
     */
    healthStatus?: PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetHealthStatus[];
    /**
     * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
     */
    ip?: PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetIp;
    /**
     * Label selector and a list of selected targets
     */
    labelSelector?: PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetLabelSelector;
    /**
     * Server where the traffic should be routed through
     */
    server?: PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetLoadBalancerTargetServer;
    /**
     * List of selected targets
     */
    targets?: PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetTargets[];
    /**
     * Type of the resource
     */
    type: PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTargetTypeEnum;
    /**
     * Use the private network IP instead of the public IP. Default value is false.
     */
    usePrivateIp?: boolean;
}
export declare class PutLoadBalancersId200ApplicationJSONLoadBalancer extends SpeakeasyBase {
    /**
     * Algorithm of the Load Balancer
     */
    algorithm: PutLoadBalancersId200ApplicationJSONLoadBalancerAlgorithm;
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
    loadBalancerType: PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerType;
    location: PutLoadBalancersId200ApplicationJSONLoadBalancerLocation;
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
    privateNet: PutLoadBalancersId200ApplicationJSONLoadBalancerPrivateNet[];
    /**
     * Protection configuration for the Resource
     */
    protection: PutLoadBalancersId200ApplicationJSONLoadBalancerProtection;
    /**
     * Public network information
     */
    publicNet: PutLoadBalancersId200ApplicationJSONLoadBalancerPublicNet;
    /**
     * List of services that belong to this Load Balancer
     */
    services: PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerService[];
    /**
     * List of targets that belong to this Load Balancer
     */
    targets: PutLoadBalancersId200ApplicationJSONLoadBalancerLoadBalancerTarget[];
}
/**
 * The `load_balancer` key contains the updated Load Balancer
 */
export declare class PutLoadBalancersId200ApplicationJSON extends SpeakeasyBase {
    loadBalancer: PutLoadBalancersId200ApplicationJSONLoadBalancer;
}
export declare class PutLoadBalancersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `load_balancer` key contains the updated Load Balancer
     */
    putLoadBalancersId200ApplicationJSONObject?: PutLoadBalancersId200ApplicationJSON;
}
