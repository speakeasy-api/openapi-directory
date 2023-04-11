import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Which IP version(s) of traffic and routes are allowed to be imported or exported between peer networks. The default value is IPV4_ONLY.
 */
export declare enum NetworkPeeringStackTypeEnum {
    Ipv4Ipv6 = "IPV4_IPV6",
    Ipv4Only = "IPV4_ONLY"
}
/**
 * [Output Only] State for the peering, either `ACTIVE` or `INACTIVE`. The peering is `ACTIVE` when there's a matching configuration in the peer network.
 */
export declare enum NetworkPeeringStateEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
/**
 * A network peering attached to a network resource. The message includes the peering name, peer network, peering state, and a flag indicating whether Google Compute Engine should automatically create routes for the peering.
 */
export declare class NetworkPeering extends SpeakeasyBase {
    /**
     * Whether Cloud Routers in this network can automatically advertise subnets from the peer network.
     */
    advertisePeerSubnetsViaRouters?: boolean;
    /**
     * This field will be deprecated soon. Use the exchange_subnet_routes field instead. Indicates whether full mesh connectivity is created and managed automatically between peered networks. Currently this field should always be true since Google Compute Engine will automatically create and manage subnetwork routes between two networks when peering state is ACTIVE.
     */
    autoCreateRoutes?: boolean;
    /**
     * Indicates whether full mesh connectivity is created and managed automatically between peered networks. Currently this field should always be true since Google Compute Engine will automatically create and manage subnetwork routes between two networks when peering state is ACTIVE.
     */
    exchangeSubnetRoutes?: boolean;
    /**
     * Whether to export the custom routes to peer network. The default value is false.
     */
    exportCustomRoutes?: boolean;
    /**
     * Whether subnet routes with public IP range are exported. The default value is true, all subnet routes are exported. IPv4 special-use ranges are always exported to peers and are not controlled by this field.
     */
    exportSubnetRoutesWithPublicIp?: boolean;
    /**
     * Whether to import the custom routes from peer network. The default value is false.
     */
    importCustomRoutes?: boolean;
    /**
     * Whether subnet routes with public IP range are imported. The default value is false. IPv4 special-use ranges are always imported from peers and are not controlled by this field.
     */
    importSubnetRoutesWithPublicIp?: boolean;
    /**
     * Name of this peering. Provided by the client when the peering is created. The name must comply with RFC1035. Specifically, the name must be 1-63 characters long and match regular expression `[a-z]([-a-z0-9]*[a-z0-9])?`. The first character must be a lowercase letter, and all the following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * The URL of the peer network. It can be either full URL or partial URL. The peer network may belong to a different project. If the partial URL does not contain project, it is assumed that the peer network is in the same project as the current network.
     */
    network?: string;
    /**
     * Maximum Transmission Unit in bytes.
     */
    peerMtu?: number;
    /**
     * Which IP version(s) of traffic and routes are allowed to be imported or exported between peer networks. The default value is IPV4_ONLY.
     */
    stackType?: NetworkPeeringStackTypeEnum;
    /**
     * [Output Only] State for the peering, either `ACTIVE` or `INACTIVE`. The peering is `ACTIVE` when there's a matching configuration in the peer network.
     */
    state?: NetworkPeeringStateEnum;
    /**
     * [Output Only] Details about the current state of the peering.
     */
    stateDetails?: string;
}
