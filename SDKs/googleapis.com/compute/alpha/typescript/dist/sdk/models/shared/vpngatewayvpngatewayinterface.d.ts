import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A VPN gateway interface.
 */
export declare class VpnGatewayVpnGatewayInterface extends SpeakeasyBase {
    /**
     * [Output Only] Numeric identifier for this VPN interface associated with the VPN gateway.
     */
    id?: number;
    /**
     * URL of the VLAN attachment (interconnectAttachment) resource for this VPN gateway interface. When the value of this field is present, the VPN gateway is used for HA VPN over Cloud Interconnect; all egress or ingress traffic for this VPN gateway interface goes through the specified VLAN attachment resource.
     */
    interconnectAttachment?: string;
    /**
     * [Output Only] IP address for this VPN interface associated with the VPN gateway. The IP address could be either a regional external IP address or a regional internal IP address. The two IP addresses for a VPN gateway must be all regional external or regional internal IP addresses. There cannot be a mix of regional external IP addresses and regional internal IP addresses. For HA VPN over Cloud Interconnect, the IP addresses for both interfaces could either be regional internal IP addresses or regional external IP addresses. For regular (non HA VPN over Cloud Interconnect) HA VPN tunnels, the IP address must be a regional external IP address.
     */
    ipAddress?: string;
    /**
     * [Output Only] IPv6 address for this VPN interface associated with the VPN gateway. The IPv6 address must be a regional external IPv6 address. The format is RFC 5952 format (e.g. 2001:db8::2d9:51:0:0).
     */
    ipv6Address?: string;
}
