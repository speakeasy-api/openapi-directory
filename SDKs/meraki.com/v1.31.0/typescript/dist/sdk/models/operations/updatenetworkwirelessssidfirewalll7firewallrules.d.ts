import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * 'Deny' traffic specified by this rule
 */
export declare enum UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum {
    Deny = "deny"
}
/**
 * Type of the L7 firewall rule. One of: 'application', 'applicationCategory', 'host', 'port', 'ipRange'
 */
export declare enum UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Host = "host",
    IpRange = "ipRange",
    Port = "port"
}
export declare class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules extends SpeakeasyBase {
    /**
     * 'Deny' traffic specified by this rule
     */
    policy?: UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum;
    /**
     * Type of the L7 firewall rule. One of: 'application', 'applicationCategory', 'host', 'port', 'ipRange'
     */
    type?: UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum;
    /**
     * The value of what needs to get blocked. Format of the value varies depending on type of the firewall rule selected.
     */
    value?: string;
}
export declare class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody extends SpeakeasyBase {
    /**
     * An array of L7 firewall rules for this SSID. Rules will get applied in the same order user has specified in request. Empty array will clear the L7 firewall rule configuration.
     */
    rules?: UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules[];
}
export declare class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody;
    networkId: string;
    number: string;
}
export declare class UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject?: Record<string, any>;
}
