import { SpeakeasyBase } from "../../../internal/utils";
/**
 * For display only. Metadata associated with a Compute Engine VPN gateway.
 */
export declare class VpnGatewayInfo extends SpeakeasyBase {
    /**
     * Name of a VPN gateway.
     */
    displayName?: string;
    /**
     * IP address of the VPN gateway.
     */
    ipAddress?: string;
    /**
     * URI of a Compute Engine network where the VPN gateway is configured.
     */
    networkUri?: string;
    /**
     * Name of a Google Cloud region where this VPN gateway is configured.
     */
    region?: string;
    /**
     * URI of a VPN gateway.
     */
    uri?: string;
    /**
     * A VPN tunnel that is associated with this VPN gateway. There may be multiple VPN tunnels configured on a VPN gateway, and only the one relevant to the test is displayed.
     */
    vpnTunnelUri?: string;
}
