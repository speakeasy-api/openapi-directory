import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains some information about a VPN tunnel.
 */
export declare class VpnGatewayStatusTunnel extends SpeakeasyBase {
    /**
     * The VPN gateway interface this VPN tunnel is associated with.
     */
    localGatewayInterface?: number;
    /**
     * The peer gateway interface this VPN tunnel is connected to, the peer gateway could either be an external VPN gateway or GCP VPN gateway.
     */
    peerGatewayInterface?: number;
    /**
     * URL reference to the VPN tunnel.
     */
    tunnelUrl?: string;
}
