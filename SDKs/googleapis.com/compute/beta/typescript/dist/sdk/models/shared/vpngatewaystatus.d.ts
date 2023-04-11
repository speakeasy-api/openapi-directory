import { SpeakeasyBase } from "../../../internal/utils";
import { VpnGatewayStatusVpnConnection } from "./vpngatewaystatusvpnconnection";
export declare class VpnGatewayStatus extends SpeakeasyBase {
    /**
     * List of VPN connection for this VpnGateway.
     */
    vpnConnections?: VpnGatewayStatusVpnConnection[];
}
