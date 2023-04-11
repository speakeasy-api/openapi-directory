import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The interface for the external VPN gateway.
 */
export declare class ExternalVpnGatewayInterface extends SpeakeasyBase {
    /**
     * The numeric ID of this interface. The allowed input values for this id for different redundancy types of external VPN gateway: - SINGLE_IP_INTERNALLY_REDUNDANT - 0 - TWO_IPS_REDUNDANCY - 0, 1 - FOUR_IPS_REDUNDANCY - 0, 1, 2, 3
     */
    id?: number;
    /**
     * IP address of the interface in the external VPN gateway. Only IPv4 is supported. This IP address can be either from your on-premise gateway or another Cloud provider's VPN gateway, it cannot be an IP address from Google Compute Engine.
     */
    ipAddress?: string;
}
