import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * User-defined labels (key-value pairs)
 */
export declare class PutNetworksIdUpdateNetworkRequestLabels extends SpeakeasyBase {
    labelkey?: string;
}
export declare class PutNetworksIdUpdateNetworkRequest extends SpeakeasyBase {
    /**
     * User-defined labels (key-value pairs)
     */
    labels?: PutNetworksIdUpdateNetworkRequestLabels;
    /**
     * New network name
     */
    name?: string;
}
export declare class PutNetworksIdRequest extends SpeakeasyBase {
    requestBody?: PutNetworksIdUpdateNetworkRequest;
    /**
     * ID of the network
     */
    id: number;
}
/**
 * Protection configuration for the Network
 */
export declare class PutNetworksId200ApplicationJSONNetworkProtection extends SpeakeasyBase {
    /**
     * If true, prevents the Network from being deleted
     */
    delete: boolean;
}
export declare class PutNetworksId200ApplicationJSONNetworkRoutes extends SpeakeasyBase {
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
export declare enum PutNetworksId200ApplicationJSONNetworkSubnetsTypeEnum {
    Cloud = "cloud",
    Server = "server",
    Vswitch = "vswitch"
}
export declare class PutNetworksId200ApplicationJSONNetworkSubnets extends SpeakeasyBase {
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
    type: PutNetworksId200ApplicationJSONNetworkSubnetsTypeEnum;
}
export declare class PutNetworksId200ApplicationJSONNetwork extends SpeakeasyBase {
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
    protection: PutNetworksId200ApplicationJSONNetworkProtection;
    /**
     * Array of routes set in this Network
     */
    routes: PutNetworksId200ApplicationJSONNetworkRoutes[];
    /**
     * Array of IDs of Servers attached to this Network
     */
    servers: number[];
    /**
     * Array subnets allocated in this Network
     */
    subnets: PutNetworksId200ApplicationJSONNetworkSubnets[];
}
/**
 * The `network` key contains the updated network
 */
export declare class PutNetworksId200ApplicationJSON extends SpeakeasyBase {
    network?: PutNetworksId200ApplicationJSONNetwork;
}
export declare class PutNetworksIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `network` key contains the updated network
     */
    putNetworksId200ApplicationJSONObject?: PutNetworksId200ApplicationJSON;
}
