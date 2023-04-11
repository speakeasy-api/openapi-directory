import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * IP address version (must be 'any', 'ipv4' or 'ipv6'). Applicable only if network supports IPv6. Default value is 'ipv4'.
 */
export declare enum UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum {
    Any = "any",
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
/**
 * 'allow' or 'deny' traffic specified by this rule.
 */
export declare enum UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum {
    Allow = "allow",
    Deny = "deny"
}
/**
 * The type of protocol (must be 'tcp', 'udp', or 'any').
 */
export declare enum UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum {
    Any = "any",
    Tcp = "tcp",
    Udp = "udp"
}
export declare class UpdateNetworkSwitchAccessControlListsRequestBodyRules extends SpeakeasyBase {
    /**
     * Description of the rule (optional).
     */
    comment?: string;
    /**
     * Destination IP address (in IP or CIDR notation) or 'any'.
     */
    dstCidr: string;
    /**
     * Destination port. Must be in the range of 1-65535 or 'any'. Default is 'any'.
     */
    dstPort?: string;
    /**
     * IP address version (must be 'any', 'ipv4' or 'ipv6'). Applicable only if network supports IPv6. Default value is 'ipv4'.
     */
    ipVersion?: UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum;
    /**
     * 'allow' or 'deny' traffic specified by this rule.
     */
    policy: UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum;
    /**
     * The type of protocol (must be 'tcp', 'udp', or 'any').
     */
    protocol: UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum;
    /**
     * Source IP address (in IP or CIDR notation) or 'any'.
     */
    srcCidr: string;
    /**
     * Source port. Must be in the range  of 1-65535 or 'any'. Default is 'any'.
     */
    srcPort?: string;
    /**
     * Incoming traffic VLAN. Must be in the range of 1-4095 or 'any'. Default is 'any'.
     */
    vlan?: string;
}
export declare class UpdateNetworkSwitchAccessControlListsRequestBody extends SpeakeasyBase {
    /**
     * An ordered array of the access control list rules (not including the default rule). An empty array will clear the rules.
     */
    rules: UpdateNetworkSwitchAccessControlListsRequestBodyRules[];
}
export declare class UpdateNetworkSwitchAccessControlListsRequest extends SpeakeasyBase {
    requestBody: UpdateNetworkSwitchAccessControlListsRequestBody;
    networkId: string;
}
/**
 * IP address version
 */
export declare enum UpdateNetworkSwitchAccessControlLists200ApplicationJSONRulesIpVersionEnum {
    Any = "any",
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
/**
 * 'allow' or 'deny' traffic specified by this rule
 */
export declare enum UpdateNetworkSwitchAccessControlLists200ApplicationJSONRulesPolicyEnum {
    Allow = "allow",
    Deny = "deny"
}
/**
 * The type of protocol
 */
export declare enum UpdateNetworkSwitchAccessControlLists200ApplicationJSONRulesProtocolEnum {
    Any = "any",
    Tcp = "tcp",
    Udp = "udp"
}
export declare class UpdateNetworkSwitchAccessControlLists200ApplicationJSONRules extends SpeakeasyBase {
    /**
     * Description of the rule (optional)
     */
    comment?: string;
    /**
     * Destination IP address (in IP or CIDR notation)
     */
    dstCidr?: string;
    /**
     * Destination port
     */
    dstPort?: string;
    /**
     * IP address version
     */
    ipVersion?: UpdateNetworkSwitchAccessControlLists200ApplicationJSONRulesIpVersionEnum;
    /**
     * 'allow' or 'deny' traffic specified by this rule
     */
    policy?: UpdateNetworkSwitchAccessControlLists200ApplicationJSONRulesPolicyEnum;
    /**
     * The type of protocol
     */
    protocol?: UpdateNetworkSwitchAccessControlLists200ApplicationJSONRulesProtocolEnum;
    /**
     * Source IP address (in IP or CIDR notation)
     */
    srcCidr?: string;
    /**
     * Source port
     */
    srcPort?: string;
    /**
     * ncoming traffic VLAN
     */
    vlan?: string;
}
/**
 * Successful operation
 */
export declare class UpdateNetworkSwitchAccessControlLists200ApplicationJSON extends SpeakeasyBase {
    /**
     * An ordered array of the access control list rules
     */
    rules?: UpdateNetworkSwitchAccessControlLists200ApplicationJSONRules[];
}
export declare class UpdateNetworkSwitchAccessControlListsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSwitchAccessControlLists200ApplicationJSONObject?: UpdateNetworkSwitchAccessControlLists200ApplicationJSON;
}
