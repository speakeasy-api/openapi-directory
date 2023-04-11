import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * 'allow' or 'deny' traffic specified by this rule
 */
export declare enum UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum {
    Allow = "allow",
    Deny = "deny"
}
/**
 * The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')
 */
export declare enum UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum {
    Any = "any",
    Icmp = "icmp",
    Icmp6 = "icmp6",
    Tcp = "tcp",
    Udp = "udp"
}
export declare class UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules extends SpeakeasyBase {
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
    policy: UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum;
    /**
     * The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')
     */
    protocol: UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum;
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
export declare class UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody extends SpeakeasyBase {
    /**
     * An ordered array of the firewall rules (not including the default rule)
     */
    rules?: UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules[];
    /**
     * Log the special default rule (boolean value - enable only if you've configured a syslog server) (optional)
     */
    syslogDefaultRule?: boolean;
}
export declare class UpdateOrganizationApplianceVpnVpnFirewallRulesRequest extends SpeakeasyBase {
    requestBody?: UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody;
    organizationId: string;
}
export declare class UpdateOrganizationApplianceVpnVpnFirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateOrganizationApplianceVpnVpnFirewallRules200ApplicationJSONObject?: Record<string, any>;
}
