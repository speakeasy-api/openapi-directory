import { SpeakeasyBase } from "../../../internal/utils";
import { VpnGatewayStatusHighAvailabilityRequirementState } from "./vpngatewaystatushighavailabilityrequirementstate";
import { VpnGatewayStatusTunnel } from "./vpngatewaystatustunnel";
/**
 * A VPN connection contains all VPN tunnels connected from this VpnGateway to the same peer gateway. The peer gateway could either be a external VPN gateway or GCP VPN gateway.
 */
export declare class VpnGatewayStatusVpnConnection extends SpeakeasyBase {
    /**
     * URL reference to the peer external VPN gateways to which the VPN tunnels in this VPN connection are connected. This field is mutually exclusive with peer_gcp_gateway.
     */
    peerExternalGateway?: string;
    /**
     * URL reference to the peer side VPN gateways to which the VPN tunnels in this VPN connection are connected. This field is mutually exclusive with peer_gcp_gateway.
     */
    peerGcpGateway?: string;
    /**
     * Describes the high availability requirement state for the VPN connection between this Cloud VPN gateway and a peer gateway.
     */
    state?: VpnGatewayStatusHighAvailabilityRequirementState;
    /**
     * List of VPN tunnels that are in this VPN connection.
     */
    tunnels?: VpnGatewayStatusTunnel[];
}
