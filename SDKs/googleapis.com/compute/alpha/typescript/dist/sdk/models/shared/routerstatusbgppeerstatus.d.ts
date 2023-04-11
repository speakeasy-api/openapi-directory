import { SpeakeasyBase } from "../../../internal/utils";
import { BfdStatus } from "./bfdstatus";
import { Route } from "./route";
/**
 * Status of the BGP peer: {UP, DOWN}
 */
export declare enum RouterStatusBgpPeerStatusStatusEnum {
    Down = "DOWN",
    Unknown = "UNKNOWN",
    Up = "UP"
}
/**
 * Indicates why particular status was returned.
 */
export declare enum RouterStatusBgpPeerStatusStatusReasonEnum {
    Md5AuthInternalProblem = "MD5_AUTH_INTERNAL_PROBLEM",
    StatusReasonUnspecified = "STATUS_REASON_UNSPECIFIED"
}
export declare class RouterStatusBgpPeerStatus extends SpeakeasyBase {
    /**
     * Routes that were advertised to the remote BGP peer
     */
    advertisedRoutes?: Route[];
    /**
     * Next free: 15
     */
    bfdStatus?: BfdStatus;
    /**
     * Enable IPv6 traffic over BGP Peer. If not specified, it is disabled by default.
     */
    enableIpv6?: boolean;
    /**
     * IP address of the local BGP interface.
     */
    ipAddress?: string;
    /**
     * IPv6 address of the local BGP interface.
     */
    ipv6NexthopAddress?: string;
    /**
     * URL of the VPN tunnel that this BGP peer controls.
     */
    linkedVpnTunnel?: string;
    /**
     * Informs whether MD5 authentication is enabled on this BGP peer.
     */
    md5AuthEnabled?: boolean;
    /**
     * Name of this BGP peer. Unique within the Routers resource.
     */
    name?: string;
    /**
     * Number of routes learned from the remote BGP Peer.
     */
    numLearnedRoutes?: number;
    /**
     * IP address of the remote BGP interface.
     */
    peerIpAddress?: string;
    /**
     * IPv6 address of the remote BGP interface.
     */
    peerIpv6NexthopAddress?: string;
    /**
     * [Output only] URI of the VM instance that is used as third-party router appliances such as Next Gen Firewalls, Virtual Routers, or Router Appliances. The VM instance is the peer side of the BGP session.
     */
    routerApplianceInstance?: string;
    /**
     * The state of the BGP session. For a list of possible values for this field, see BGP session states.
     */
    state?: string;
    /**
     * Status of the BGP peer: {UP, DOWN}
     */
    status?: RouterStatusBgpPeerStatusStatusEnum;
    /**
     * Indicates why particular status was returned.
     */
    statusReason?: RouterStatusBgpPeerStatusStatusReasonEnum;
    /**
     * Time this session has been up. Format: 14 years, 51 weeks, 6 days, 23 hours, 59 minutes, 59 seconds
     */
    uptime?: string;
    /**
     * Time this session has been up, in seconds. Format: 145
     */
    uptimeSeconds?: string;
}
