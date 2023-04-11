import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Can be used multiple times.
 */
export declare enum GetLoadBalancersSortEnum {
    Id = "id",
    IdAsc = "id:asc",
    IdDesc = "id:desc",
    Name = "name",
    NameAsc = "name:asc",
    NameDesc = "name:desc",
    Created = "created",
    CreatedAsc = "created:asc",
    CreatedDesc = "created:desc"
}
export declare class GetLoadBalancersRequest extends SpeakeasyBase {
    /**
     * Can be used to filter resources by labels. The response will only contain resources matching the label selector.
     */
    labelSelector?: string;
    /**
     * Can be used to filter resources by their name. The response will only contain the resources matching the specified name
     */
    name?: string;
    /**
     * Can be used multiple times.
     */
    sort?: GetLoadBalancersSortEnum;
}
/**
 * Type of the algorithm
 */
export declare enum GetLoadBalancers200ApplicationJSONLoadBalancersAlgorithmTypeEnum {
    RoundRobin = "round_robin",
    LeastConnections = "least_connections"
}
/**
 * Algorithm of the Load Balancer
 */
export declare class GetLoadBalancers200ApplicationJSONLoadBalancersAlgorithm extends SpeakeasyBase {
    /**
     * Type of the algorithm
     */
    type: GetLoadBalancers200ApplicationJSONLoadBalancersAlgorithmTypeEnum;
}
/**
 * Hourly costs for a Resource in this Location
 */
export declare class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePricesPriceHourly extends SpeakeasyBase {
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
export declare class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePricesPriceMonthly extends SpeakeasyBase {
    /**
     * Price with VAT added
     */
    gross: string;
    /**
     * Price without VAT
     */
    net: string;
}
export declare class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePrices extends SpeakeasyBase {
    /**
     * Name of the Location the price is for
     */
    location: string;
    /**
     * Hourly costs for a Resource in this Location
     */
    priceHourly: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePricesPriceHourly;
    /**
     * Monthly costs for a Resource in this Location
     */
    priceMonthly: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePricesPriceMonthly;
}
export declare class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerType extends SpeakeasyBase {
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
    prices: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTypePrices[];
}
export declare class GetLoadBalancers200ApplicationJSONLoadBalancersLocation extends SpeakeasyBase {
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
export declare class GetLoadBalancers200ApplicationJSONLoadBalancersPrivateNet extends SpeakeasyBase {
    ip?: string;
    network?: number;
}
/**
 * Protection configuration for the Resource
 */
export declare class GetLoadBalancers200ApplicationJSONLoadBalancersProtection extends SpeakeasyBase {
    /**
     * If true, prevents the Resource from being deleted
     */
    delete: boolean;
}
/**
 * IP address (v4)
 */
export declare class GetLoadBalancers200ApplicationJSONLoadBalancersPublicNetIpv4 extends SpeakeasyBase {
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
export declare class GetLoadBalancers200ApplicationJSONLoadBalancersPublicNetIpv6 extends SpeakeasyBase {
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
export declare class GetLoadBalancers200ApplicationJSONLoadBalancersPublicNet extends SpeakeasyBase {
    /**
     * Public Interface enabled or not
     */
    enabled: boolean;
    /**
     * IP address (v4)
     */
    ipv4: GetLoadBalancers200ApplicationJSONLoadBalancersPublicNetIpv4;
    /**
     * IP address (v6)
     */
    ipv6: GetLoadBalancers200ApplicationJSONLoadBalancersPublicNetIpv6;
}
/**
 * Additional configuration for protocol http
 */
export declare class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp extends SpeakeasyBase {
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
export declare enum GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum {
    Tcp = "tcp",
    Http = "http"
}
/**
 * Service health check
 */
export declare class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck extends SpeakeasyBase {
    /**
     * Additional configuration for protocol http
     */
    http?: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
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
    protocol: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;
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
export declare class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHTTP extends SpeakeasyBase {
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
export declare enum GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceProtocolEnum {
    Tcp = "tcp",
    Http = "http",
    Https = "https"
}
export declare class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerService extends SpeakeasyBase {
    /**
     * Port the Load Balancer will balance to
     */
    destinationPort: number;
    /**
     * Service health check
     */
    healthCheck: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck;
    /**
     * Configuration option for protocols http and https
     */
    http?: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceLoadBalancerServiceHTTP;
    /**
     * Port the Load Balancer listens on
     */
    listenPort: number;
    /**
     * Protocol of the Load Balancer
     */
    protocol: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerServiceProtocolEnum;
    /**
     * Is Proxyprotocol enabled or not
     */
    proxyprotocol: boolean;
}
export declare enum GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetHealthStatusStatusEnum {
    Healthy = "healthy",
    Unhealthy = "unhealthy",
    Unknown = "unknown"
}
export declare class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetHealthStatus extends SpeakeasyBase {
    listenPort?: number;
    status?: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetHealthStatusStatusEnum;
}
/**
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
 */
export declare class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetIp extends SpeakeasyBase {
    /**
     * IP of a server that belongs to the same customer (public IPv4/IPv6) or private IP in a Subnetwork type vswitch.
     */
    ip: string;
}
/**
 * Label selector and a list of selected targets
 */
export declare class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetLabelSelector extends SpeakeasyBase {
    /**
     * Label selector
     */
    selector: string;
}
/**
 * Server where the traffic should be routed through
 */
export declare class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetLoadBalancerTargetServer extends SpeakeasyBase {
    /**
     * ID of the Server
     */
    id: number;
}
export declare enum GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTargetsHealthStatusStatusEnum {
    Healthy = "healthy",
    Unhealthy = "unhealthy",
    Unknown = "unknown"
}
export declare class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTargetsHealthStatus extends SpeakeasyBase {
    listenPort?: number;
    status?: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTargetsHealthStatusStatusEnum;
}
export declare class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTargetsServer extends SpeakeasyBase {
    /**
     * ID of the Server
     */
    id: number;
}
export declare class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTargets extends SpeakeasyBase {
    healthStatus?: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTargetsHealthStatus[];
    server?: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTargetsServer;
    type?: string;
    usePrivateIp?: boolean;
}
/**
 * Type of the resource
 */
export declare enum GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTypeEnum {
    Server = "server",
    LabelSelector = "label_selector",
    Ip = "ip"
}
export declare class GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTarget extends SpeakeasyBase {
    /**
     * List of health statuses of the services on this target
     */
    healthStatus?: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetHealthStatus[];
    /**
     * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
     */
    ip?: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetIp;
    /**
     * Label selector and a list of selected targets
     */
    labelSelector?: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetLabelSelector;
    /**
     * Server where the traffic should be routed through
     */
    server?: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetLoadBalancerTargetServer;
    /**
     * List of selected targets
     */
    targets?: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTargets[];
    /**
     * Type of the resource
     */
    type: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTargetTypeEnum;
    /**
     * Use the private network IP instead of the public IP. Default value is false.
     */
    usePrivateIp?: boolean;
}
export declare class GetLoadBalancers200ApplicationJSONLoadBalancers extends SpeakeasyBase {
    /**
     * Algorithm of the Load Balancer
     */
    algorithm: GetLoadBalancers200ApplicationJSONLoadBalancersAlgorithm;
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
    loadBalancerType: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerType;
    location: GetLoadBalancers200ApplicationJSONLoadBalancersLocation;
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
    privateNet: GetLoadBalancers200ApplicationJSONLoadBalancersPrivateNet[];
    /**
     * Protection configuration for the Resource
     */
    protection: GetLoadBalancers200ApplicationJSONLoadBalancersProtection;
    /**
     * Public network information
     */
    publicNet: GetLoadBalancers200ApplicationJSONLoadBalancersPublicNet;
    /**
     * List of services that belong to this Load Balancer
     */
    services: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerService[];
    /**
     * List of targets that belong to this Load Balancer
     */
    targets: GetLoadBalancers200ApplicationJSONLoadBalancersLoadBalancerTarget[];
}
export declare class GetLoadBalancers200ApplicationJSONMetaPagination extends SpeakeasyBase {
    /**
     * ID of the last page available. Can be null if the current page is the last one.
     */
    lastPage: number;
    /**
     * ID of the next page. Can be null if the current page is the last one.
     */
    nextPage: number;
    /**
     * Current page number
     */
    page: number;
    /**
     * Maximum number of items shown per page in the response
     */
    perPage: number;
    /**
     * ID of the previous page. Can be null if the current page is the first one.
     */
    previousPage: number;
    /**
     * The total number of entries that exist in the database for this query. Nullable if unknown.
     */
    totalEntries: number;
}
export declare class GetLoadBalancers200ApplicationJSONMeta extends SpeakeasyBase {
    pagination: GetLoadBalancers200ApplicationJSONMetaPagination;
}
/**
 * The `load_balancers` key contains a list of Load Balancers
 */
export declare class GetLoadBalancers200ApplicationJSON extends SpeakeasyBase {
    loadBalancers: GetLoadBalancers200ApplicationJSONLoadBalancers[];
    meta?: GetLoadBalancers200ApplicationJSONMeta;
}
export declare class GetLoadBalancersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `load_balancers` key contains a list of Load Balancers
     */
    getLoadBalancers200ApplicationJSONObject?: GetLoadBalancers200ApplicationJSON;
}
