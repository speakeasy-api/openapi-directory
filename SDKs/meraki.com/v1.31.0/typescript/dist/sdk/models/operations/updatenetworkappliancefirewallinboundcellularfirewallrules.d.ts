import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * 'allow' or 'deny' traffic specified by this rule
 */
export declare enum UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum {
    Allow = "allow",
    Deny = "deny"
}
/**
 * The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')
 */
export declare enum UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum {
    Any = "any",
    Icmp = "icmp",
    Icmp6 = "icmp6",
    Tcp = "tcp",
    Udp = "udp"
}
export declare class UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules extends SpeakeasyBase {
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
    policy: UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnum;
    /**
     * The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')
     */
    protocol: UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnum;
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
export declare class UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBody extends SpeakeasyBase {
    /**
     * An ordered array of the firewall rules (not including the default rule)
     */
    rules?: UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules[];
}
export declare class UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBody;
    networkId: string;
}
export declare class UpdateNetworkApplianceFirewallInboundCellularFirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkApplianceFirewallInboundCellularFirewallRules200ApplicationJSONObjects?: Record<string, any>[];
}
