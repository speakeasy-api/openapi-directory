import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The VPN concentrator settings for this SSID.
 */
export declare class UpdateNetworkWirelessSsidVpnRequestBodyConcentrator extends SpeakeasyBase {
    /**
     * The NAT ID of the concentrator that should be set.
     */
    networkId?: string;
    /**
     * The VLAN that should be tagged for the concentrator.
     */
    vlanId?: number;
}
/**
 * Secondary VPN concentrator settings. This is only used when two VPN concentrators are configured on the SSID.
 */
export declare class UpdateNetworkWirelessSsidVpnRequestBodyFailover extends SpeakeasyBase {
    /**
     * Idle timer interval in seconds.
     */
    heartbeatInterval?: number;
    /**
     * Idle timer timeout in seconds.
     */
    idleTimeout?: number;
    /**
     * IP addressed reserved on DHCP server where SSID will terminate.
     */
    requestIp?: string;
}
/**
 * Protocol for this split tunnel rule.
 */
export declare enum UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum {
    Any = "Any",
    Tcp = "TCP",
    Udp = "UDP"
}
export declare class UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules extends SpeakeasyBase {
    /**
     * Description for this split tunnel rule (optional).
     */
    comment?: string;
    /**
     * Destination for this split tunnel rule. IP address, fully-qualified domain names (FQDN) or 'any'.
     */
    destCidr: string;
    /**
     * Destination port for this split tunnel rule, (integer in the range 1-65535), or 'any'.
     */
    destPort?: string;
    /**
     * Traffic policy specified for this split tunnel rule, 'allow' or 'deny'.
     */
    policy: string;
    /**
     * Protocol for this split tunnel rule.
     */
    protocol?: UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum;
}
/**
 * The VPN split tunnel settings for this SSID.
 */
export declare class UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel extends SpeakeasyBase {
    /**
     * If true, VPN split tunnel is enabled.
     */
    enabled?: boolean;
    /**
     * List of VPN split tunnel rules.
     */
    rules?: UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules[];
}
export declare class UpdateNetworkWirelessSsidVpnRequestBody extends SpeakeasyBase {
    /**
     * The VPN concentrator settings for this SSID.
     */
    concentrator?: UpdateNetworkWirelessSsidVpnRequestBodyConcentrator;
    /**
     * Secondary VPN concentrator settings. This is only used when two VPN concentrators are configured on the SSID.
     */
    failover?: UpdateNetworkWirelessSsidVpnRequestBodyFailover;
    /**
     * The VPN split tunnel settings for this SSID.
     */
    splitTunnel?: UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel;
}
export declare class UpdateNetworkWirelessSsidVpnRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkWirelessSsidVpnRequestBody;
    networkId: string;
    number: string;
}
export declare class UpdateNetworkWirelessSsidVpnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkWirelessSsidVpn200ApplicationJSONObject?: Record<string, any>;
}
