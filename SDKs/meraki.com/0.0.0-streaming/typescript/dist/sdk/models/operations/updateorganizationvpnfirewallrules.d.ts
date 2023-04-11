import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * 'allow' or 'deny' traffic specified by this rule
 */
export declare enum UpdateOrganizationVpnFirewallRulesRequestBodyRulesPolicyEnum {
    Allow = "allow",
    Deny = "deny"
}
/**
 * The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')
 */
export declare enum UpdateOrganizationVpnFirewallRulesRequestBodyRulesProtocolEnum {
    Any = "any",
    Icmp = "icmp",
    Icmp6 = "icmp6",
    Tcp = "tcp",
    Udp = "udp"
}
export declare class UpdateOrganizationVpnFirewallRulesRequestBodyRules extends SpeakeasyBase {
    /**
     * Description of the rule (optional)
     */
    comment?: string;
    /**
     * Comma-separated list of destination IP address(es) (in IP or CIDR notation) or 'any' (FQDN not supported)
     */
    destCidr: string;
    /**
     * Comma-separated list of destination port(s) (integer in the range 1-65535), or 'any'
     */
    destPort?: string;
    /**
     * 'allow' or 'deny' traffic specified by this rule
     */
    policy: UpdateOrganizationVpnFirewallRulesRequestBodyRulesPolicyEnum;
    /**
     * The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')
     */
    protocol: UpdateOrganizationVpnFirewallRulesRequestBodyRulesProtocolEnum;
    /**
     * Comma-separated list of source IP address(es) (in IP or CIDR notation), or 'any' (FQDN not supported)
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
export declare class UpdateOrganizationVpnFirewallRulesRequestBody extends SpeakeasyBase {
    /**
     * An ordered array of the firewall rules (not including the default rule)
     */
    rules?: UpdateOrganizationVpnFirewallRulesRequestBodyRules[];
    /**
     * Log the special default rule (boolean value - enable only if you've configured a syslog server) (optional)
     */
    syslogDefaultRule?: boolean;
}
export declare class UpdateOrganizationVpnFirewallRulesRequest extends SpeakeasyBase {
    requestBody?: UpdateOrganizationVpnFirewallRulesRequestBody;
    organizationId: string;
}
export declare class UpdateOrganizationVpnFirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateOrganizationVpnFirewallRules200ApplicationJSONObjects?: Record<string, any>[];
}
