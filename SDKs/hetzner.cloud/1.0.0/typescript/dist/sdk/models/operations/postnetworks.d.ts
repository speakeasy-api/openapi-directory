import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * User-defined labels (key-value pairs)
 */
export declare class PostNetworksCreateNetworkRequestLabels extends SpeakeasyBase {
    /**
     * New label
     */
    labelkey?: string;
}
export declare class PostNetworksCreateNetworkRequestRoutes extends SpeakeasyBase {
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
export declare enum PostNetworksCreateNetworkRequestSubnetsTypeEnum {
    Cloud = "cloud",
    Server = "server",
    Vswitch = "vswitch"
}
export declare class PostNetworksCreateNetworkRequestSubnets extends SpeakeasyBase {
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
    type: PostNetworksCreateNetworkRequestSubnetsTypeEnum;
}
export declare class PostNetworksCreateNetworkRequest extends SpeakeasyBase {
    /**
     * IP range of the whole network which must span all included subnets. Must be one of the private IPv4 ranges of RFC1918. Minimum network size is /24. We highly recommend that you pick a larger network with a /16 netmask.
     */
    ipRange: string;
    /**
     * User-defined labels (key-value pairs)
     */
    labels?: PostNetworksCreateNetworkRequestLabels;
    /**
     * Name of the network
     */
    name: string;
    /**
     * Array of routes set in this network. The destination of the route must be one of the private IPv4 ranges of RFC1918. The gateway must be a subnet/IP of the ip_range of the network object. The destination must not overlap with an existing ip_range in any subnets or with any destinations in other routes or with the first IP of the networks ip_range or with 172.31.1.1. The gateway cannot be the first IP of the networks ip_range and also cannot be 172.31.1.1.
     */
    routes?: PostNetworksCreateNetworkRequestRoutes[];
    /**
     * Array of subnets allocated.
     */
    subnets?: PostNetworksCreateNetworkRequestSubnets[];
}
/**
 * Protection configuration for the Network
 */
export declare class PostNetworks201ApplicationJSONNetworkProtection extends SpeakeasyBase {
    /**
     * If true, prevents the Network from being deleted
     */
    delete: boolean;
}
export declare class PostNetworks201ApplicationJSONNetworkRoutes extends SpeakeasyBase {
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
export declare enum PostNetworks201ApplicationJSONNetworkSubnetsTypeEnum {
    Cloud = "cloud",
    Server = "server",
    Vswitch = "vswitch"
}
export declare class PostNetworks201ApplicationJSONNetworkSubnets extends SpeakeasyBase {
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
    type: PostNetworks201ApplicationJSONNetworkSubnetsTypeEnum;
}
export declare class PostNetworks201ApplicationJSONNetwork extends SpeakeasyBase {
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
    protection: PostNetworks201ApplicationJSONNetworkProtection;
    /**
     * Array of routes set in this Network
     */
    routes: PostNetworks201ApplicationJSONNetworkRoutes[];
    /**
     * Array of IDs of Servers attached to this Network
     */
    servers: number[];
    /**
     * Array subnets allocated in this Network
     */
    subnets: PostNetworks201ApplicationJSONNetworkSubnets[];
}
/**
 * The `network` key contains the network that was just created
 */
export declare class PostNetworks201ApplicationJSON extends SpeakeasyBase {
    network?: PostNetworks201ApplicationJSONNetwork;
}
export declare class PostNetworksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `network` key contains the network that was just created
     */
    postNetworks201ApplicationJSONObject?: PostNetworks201ApplicationJSON;
}
