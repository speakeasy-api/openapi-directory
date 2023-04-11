import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * 'allow' or 'deny' traffic specified by this rule
 */
export declare enum UpdateNetworkL3FirewallRulesRequestBodyRulesPolicyEnum {
    Allow = "allow",
    Deny = "deny"
}
/**
 * The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')
 */
export declare enum UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnum {
    Any = "any",
    Icmp = "icmp",
    Icmp6 = "icmp6",
    Tcp = "tcp",
    Udp = "udp"
}
export declare class UpdateNetworkL3FirewallRulesRequestBodyRules extends SpeakeasyBase {
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
    policy: UpdateNetworkL3FirewallRulesRequestBodyRulesPolicyEnum;
    /**
     * The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')
     */
    protocol: UpdateNetworkL3FirewallRulesRequestBodyRulesProtocolEnum;
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
export declare class UpdateNetworkL3FirewallRulesRequestBody extends SpeakeasyBase {
    /**
     * An ordered array of the firewall rules (not including the default rule)
     */
    rules?: UpdateNetworkL3FirewallRulesRequestBodyRules[];
    /**
     * Log the special default rule (boolean value - enable only if you've configured a syslog server) (optional)
     */
    syslogDefaultRule?: boolean;
}
export declare class UpdateNetworkL3FirewallRulesRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkL3FirewallRulesRequestBody;
    networkId: string;
}
export declare class UpdateNetworkL3FirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkL3FirewallRules200ApplicationJSONObjects?: Record<string, any>[];
}
