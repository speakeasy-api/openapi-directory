import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchAccessControlListsRequest extends SpeakeasyBase {
    networkId: string;
}
/**
 * IP address version
 */
export declare enum GetNetworkSwitchAccessControlLists200ApplicationJSONRulesIpVersionEnum {
    Any = "any",
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
/**
 * 'allow' or 'deny' traffic specified by this rule
 */
export declare enum GetNetworkSwitchAccessControlLists200ApplicationJSONRulesPolicyEnum {
    Allow = "allow",
    Deny = "deny"
}
/**
 * The type of protocol
 */
export declare enum GetNetworkSwitchAccessControlLists200ApplicationJSONRulesProtocolEnum {
    Any = "any",
    Tcp = "tcp",
    Udp = "udp"
}
export declare class GetNetworkSwitchAccessControlLists200ApplicationJSONRules extends SpeakeasyBase {
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
    ipVersion?: GetNetworkSwitchAccessControlLists200ApplicationJSONRulesIpVersionEnum;
    /**
     * 'allow' or 'deny' traffic specified by this rule
     */
    policy?: GetNetworkSwitchAccessControlLists200ApplicationJSONRulesPolicyEnum;
    /**
     * The type of protocol
     */
    protocol?: GetNetworkSwitchAccessControlLists200ApplicationJSONRulesProtocolEnum;
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
export declare class GetNetworkSwitchAccessControlLists200ApplicationJSON extends SpeakeasyBase {
    /**
     * An ordered array of the access control list rules
     */
    rules?: GetNetworkSwitchAccessControlLists200ApplicationJSONRules[];
}
export declare class GetNetworkSwitchAccessControlListsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchAccessControlLists200ApplicationJSONObject?: GetNetworkSwitchAccessControlLists200ApplicationJSON;
}
