import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the routing policy.
 */
export declare enum VpnTunnelInfoRoutingTypeEnum {
    RoutingTypeUnspecified = "ROUTING_TYPE_UNSPECIFIED",
    RouteBased = "ROUTE_BASED",
    PolicyBased = "POLICY_BASED",
    Dynamic = "DYNAMIC"
}
/**
 * For display only. Metadata associated with a Compute Engine VPN tunnel.
 */
export declare class VpnTunnelInfo extends SpeakeasyBase {
    /**
     * Name of a VPN tunnel.
     */
    displayName?: string;
    /**
     * URI of a Compute Engine network where the VPN tunnel is configured.
     */
    networkUri?: string;
    /**
     * Name of a Google Cloud region where this VPN tunnel is configured.
     */
    region?: string;
    /**
     * URI of a VPN gateway at remote end of the tunnel.
     */
    remoteGateway?: string;
    /**
     * Remote VPN gateway's IP address.
     */
    remoteGatewayIp?: string;
    /**
     * Type of the routing policy.
     */
    routingType?: VpnTunnelInfoRoutingTypeEnum;
    /**
     * URI of the VPN gateway at local end of the tunnel.
     */
    sourceGateway?: string;
    /**
     * Local VPN gateway's IP address.
     */
    sourceGatewayIp?: string;
    /**
     * URI of a VPN tunnel.
     */
    uri?: string;
}
