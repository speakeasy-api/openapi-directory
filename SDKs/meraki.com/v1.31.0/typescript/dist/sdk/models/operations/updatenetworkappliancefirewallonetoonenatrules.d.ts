import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Either of the following: 'tcp', 'udp', 'icmp-ping' or 'any'
 */
export declare enum UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum {
    Any = "any",
    IcmpPing = "icmp-ping",
    Tcp = "tcp",
    Udp = "udp"
}
export declare class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound extends SpeakeasyBase {
    /**
     * An array of ranges of WAN IP addresses that are allowed to make inbound connections on the specified ports or port ranges, or 'any'
     */
    allowedIps?: string[];
    /**
     * An array of ports or port ranges that will be forwarded to the host on the LAN
     */
    destinationPorts?: string[];
    /**
     * Either of the following: 'tcp', 'udp', 'icmp-ping' or 'any'
     */
    protocol?: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum;
}
/**
 * The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2')
 */
export declare enum UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum {
    Internet1 = "internet1",
    Internet2 = "internet2"
}
export declare class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules extends SpeakeasyBase {
    /**
     * The ports this mapping will provide access on, and the remote IPs that will be allowed access to the resource
     */
    allowedInbound?: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound[];
    /**
     * The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN
     */
    lanIp: string;
    /**
     * A descriptive name for the rule
     */
    name?: string;
    /**
     * The IP address that will be used to access the internal resource from the WAN
     */
    publicIp?: string;
    /**
     * The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2')
     */
    uplink?: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum;
}
export declare class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody extends SpeakeasyBase {
    /**
     * An array of 1:1 nat rules
     */
    rules: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules[];
}
export declare class UpdateNetworkApplianceFirewallOneToOneNatRulesRequest extends SpeakeasyBase {
    requestBody: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody;
    networkId: string;
}
export declare class UpdateNetworkApplianceFirewallOneToOneNatRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkApplianceFirewallOneToOneNatRules200ApplicationJSONObject?: Record<string, any>;
}
