import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of next hop.
 */
export declare enum RouteInfoNextHopTypeEnum {
    NextHopTypeUnspecified = "NEXT_HOP_TYPE_UNSPECIFIED",
    NextHopIp = "NEXT_HOP_IP",
    NextHopInstance = "NEXT_HOP_INSTANCE",
    NextHopNetwork = "NEXT_HOP_NETWORK",
    NextHopPeering = "NEXT_HOP_PEERING",
    NextHopInterconnect = "NEXT_HOP_INTERCONNECT",
    NextHopVpnTunnel = "NEXT_HOP_VPN_TUNNEL",
    NextHopVpnGateway = "NEXT_HOP_VPN_GATEWAY",
    NextHopInternetGateway = "NEXT_HOP_INTERNET_GATEWAY",
    NextHopBlackhole = "NEXT_HOP_BLACKHOLE",
    NextHopIlb = "NEXT_HOP_ILB",
    NextHopRouterAppliance = "NEXT_HOP_ROUTER_APPLIANCE"
}
/**
 * Type of route.
 */
export declare enum RouteInfoRouteTypeEnum {
    RouteTypeUnspecified = "ROUTE_TYPE_UNSPECIFIED",
    Subnet = "SUBNET",
    Static = "STATIC",
    Dynamic = "DYNAMIC",
    PeeringSubnet = "PEERING_SUBNET",
    PeeringStatic = "PEERING_STATIC",
    PeeringDynamic = "PEERING_DYNAMIC",
    PolicyBased = "POLICY_BASED"
}
/**
 * For display only. Metadata associated with a Compute Engine route.
 */
export declare class RouteInfo extends SpeakeasyBase {
    /**
     * Destination IP range of the route.
     */
    destIpRange?: string;
    /**
     * Destination port ranges of the route. Policy based routes only.
     */
    destPortRanges?: string[];
    /**
     * Name of a Compute Engine route.
     */
    displayName?: string;
    /**
     * Instance tags of the route.
     */
    instanceTags?: string[];
    /**
     * URI of a Compute Engine network.
     */
    networkUri?: string;
    /**
     * Next hop of the route.
     */
    nextHop?: string;
    /**
     * Type of next hop.
     */
    nextHopType?: RouteInfoNextHopTypeEnum;
    /**
     * Priority of the route.
     */
    priority?: number;
    /**
     * Protocols of the route. Policy based routes only.
     */
    protocols?: string[];
    /**
     * Type of route.
     */
    routeType?: RouteInfoRouteTypeEnum;
    /**
     * Source IP address range of the route. Policy based routes only.
     */
    srcIpRange?: string;
    /**
     * Source port ranges of the route. Policy based routes only.
     */
    srcPortRanges?: string[];
    /**
     * URI of a Compute Engine route. Dynamic route from cloud router does not have a URI. Advertised route from Google Cloud VPC to on-premises network also does not have a URI.
     */
    uri?: string;
}
