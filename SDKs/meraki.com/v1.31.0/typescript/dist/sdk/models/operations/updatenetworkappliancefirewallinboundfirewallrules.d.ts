import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * 'allow' or 'deny' traffic specified by this rule
 */
export declare enum UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum {
    Allow = "allow",
    Deny = "deny"
}
/**
 * The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')
 */
export declare enum UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum {
    Any = "any",
    Icmp = "icmp",
    Icmp6 = "icmp6",
    Tcp = "tcp",
    Udp = "udp"
}
export declare class UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules extends SpeakeasyBase {
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
    policy: UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum;
    /**
     * The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')
     */
    protocol: UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum;
    /**
     * Comma-separated list of source IP address(es) (in IP or CIDR notation), or 'any' (note: FQDN not supported for source addresses)
     */
    srcCidr: string;
    /**
     * Comma-separated list of source port(s) (integer in the range 1-65535), or 'any'
     */
    srcPort?: string;
    /**
     * Log this rule to syslog (true or false, boolean value) - only applicable if a syslog has been configured (optional)
     */
    syslogEnabled?: boolean;
}
export declare class UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody extends SpeakeasyBase {
    /**
     * An ordered array of the firewall rules (not including the default rule)
     */
    rules?: UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules[];
    /**
     * Log the special default rule (boolean value - enable only if you've configured a syslog server) (optional)
     */
    syslogDefaultRule?: boolean;
}
export declare class UpdateNetworkApplianceFirewallInboundFirewallRulesRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody;
    networkId: string;
}
export declare class UpdateNetworkApplianceFirewallInboundFirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkApplianceFirewallInboundFirewallRules200ApplicationJSONObject?: Record<string, any>;
}
