import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * 'Deny' traffic specified by this rule
 */
export declare enum UpdateNetworkL7FirewallRulesRequestBodyRulesPolicyEnum {
    Deny = "deny"
}
/**
 * Type of the L7 rule. One of: 'application', 'applicationCategory', 'host', 'port', 'ipRange'
 */
export declare enum UpdateNetworkL7FirewallRulesRequestBodyRulesTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Host = "host",
    IpRange = "ipRange",
    Port = "port"
}
export declare class UpdateNetworkL7FirewallRulesRequestBodyRules extends SpeakeasyBase {
    /**
     * 'Deny' traffic specified by this rule
     */
    policy?: UpdateNetworkL7FirewallRulesRequestBodyRulesPolicyEnum;
    /**
     * Type of the L7 rule. One of: 'application', 'applicationCategory', 'host', 'port', 'ipRange'
     */
    type?: UpdateNetworkL7FirewallRulesRequestBodyRulesTypeEnum;
    /**
     * The 'value' of what you want to block. Format of 'value' varies depending on type of the rule. The application categories and application ids can be retrieved from the the 'MX L7 application categories' endpoint. The countries follow the two-letter ISO 3166-1 alpha-2 format.
     */
    value?: string;
}
export declare class UpdateNetworkL7FirewallRulesRequestBody extends SpeakeasyBase {
    /**
     * An ordered array of the MX L7 firewall rules
     */
    rules?: UpdateNetworkL7FirewallRulesRequestBodyRules[];
}
export declare class UpdateNetworkL7FirewallRulesRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkL7FirewallRulesRequestBody;
    networkId: string;
}
export declare class UpdateNetworkL7FirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkL7FirewallRules200ApplicationJSONObject?: Record<string, any>;
}
