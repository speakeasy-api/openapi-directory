import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworksRequest extends SpeakeasyBase {
    /**
     * Can be used to filter networks by labels. The response will only contain networks with a matching label selector pattern.
     */
    labelSelector?: string;
    /**
     * Can be used to filter networks by their name. The response will only contain the networks matching the specified name.
     */
    name?: string;
}
export declare class GetNetworks200ApplicationJSONMetaPagination extends SpeakeasyBase {
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
export declare class GetNetworks200ApplicationJSONMeta extends SpeakeasyBase {
    pagination: GetNetworks200ApplicationJSONMetaPagination;
}
/**
 * Protection configuration for the Network
 */
export declare class GetNetworks200ApplicationJSONNetworksProtection extends SpeakeasyBase {
    /**
     * If true, prevents the Network from being deleted
     */
    delete: boolean;
}
export declare class GetNetworks200ApplicationJSONNetworksRoutes extends SpeakeasyBase {
    /**
     * Destination network or host of this route. Must not overlap with an existing ip_range in any subnets or with any destinations in other routes or with the first IP of the networks ip_range or with 172.31.1.1. Must be one of the private IPv4 ranges of RFC1918.
     */
    destination: string;
    /**
     * Gateway for the route. Cannot be the first IP of the networks ip_range and also cannot be 172.31.1.1 as this IP is being used as a gateway for the public network interface of Servers.
     */
    gateway: string;
}
/**
 * Type of Subnetwork
 */
export declare enum GetNetworks200ApplicationJSONNetworksSubnetsTypeEnum {
    Cloud = "cloud",
    Server = "server",
    Vswitch = "vswitch"
}
export declare class GetNetworks200ApplicationJSONNetworksSubnets extends SpeakeasyBase {
    /**
     * Gateway for Servers attached to this subnet. For subnets of type Server this is always the first IP of the network IP range.
     */
    gateway: string;
    /**
     * Range to allocate IPs from. Must be a Subnet of the ip_range of the parent network object and must not overlap with any other subnets or with any destinations in routes. Minimum Network size is /30. We suggest that you pick a bigger Network with a /24 netmask.
     */
    ipRange?: string;
    /**
     * Name of Network zone. The Location object contains the `network_zone` property each Location belongs to.
     */
    networkZone: string;
    /**
     * Type of Subnetwork
     */
    type: GetNetworks200ApplicationJSONNetworksSubnetsTypeEnum;
}
export declare class GetNetworks200ApplicationJSONNetworks extends SpeakeasyBase {
    /**
     * Point in time when the Network was created (in ISO-8601 format)
     */
    created: string;
    /**
     * ID of the Network
     */
    id: number;
    /**
     * IPv4 prefix of the whole Network
     */
    ipRange: string;
    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, any>;
    /**
     * Array of IDs of Load Balancers attached to this Network
     */
    loadBalancers?: number[];
    /**
     * Name of the Network
     */
    name: string;
    /**
     * Protection configuration for the Network
     */
    protection: GetNetworks200ApplicationJSONNetworksProtection;
    /**
     * Array of routes set in this Network
     */
    routes: GetNetworks200ApplicationJSONNetworksRoutes[];
    /**
     * Array of IDs of Servers attached to this Network
     */
    servers: number[];
    /**
     * Array subnets allocated in this Network
     */
    subnets: GetNetworks200ApplicationJSONNetworksSubnets[];
}
/**
 * The `networks` key contains a list of networks
 */
export declare class GetNetworks200ApplicationJSON extends SpeakeasyBase {
    meta?: GetNetworks200ApplicationJSONMeta;
    networks: GetNetworks200ApplicationJSONNetworks[];
}
export declare class GetNetworksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `networks` key contains a list of networks
     */
    getNetworks200ApplicationJSONObject?: GetNetworks200ApplicationJSON;
}
