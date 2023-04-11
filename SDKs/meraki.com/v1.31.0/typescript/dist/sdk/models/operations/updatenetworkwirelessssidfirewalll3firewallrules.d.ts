import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * 'allow' or 'deny' traffic specified by this rule
 */
export declare enum UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum {
    Allow = "allow",
    Deny = "deny"
}
/**
 * The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')
 */
export declare enum UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum {
    Any = "any",
    Icmp = "icmp",
    Icmp6 = "icmp6",
    Tcp = "tcp",
    Udp = "udp"
}
export declare class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules extends SpeakeasyBase {
    /**
     * Description of the rule (optional)
     */
    comment?: string;
    /**
     * Comma-separated list of destination IP address(es) (in IP or CIDR notation), fully-qualified domain names (FQDN) or 'any'
     */
    destCidr: string;
    /**
     * Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any'
     */
    destPort?: string;
    /**
     * 'allow' or 'deny' traffic specified by this rule
     */
    policy: UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum;
    /**
     * The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')
     */
    protocol: UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum;
}
export declare class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody extends SpeakeasyBase {
    /**
     * Allow wireless client access to local LAN (boolean value - true allows access and false denies access) (optional)
     */
    allowLanAccess?: boolean;
    /**
     * An ordered array of the firewall rules for this SSID (not including the local LAN access rule or the default rule)
     */
    rules?: UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules[];
}
export declare class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody;
    networkId: string;
    number: string;
}
export declare class UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject?: Record<string, any>;
}
