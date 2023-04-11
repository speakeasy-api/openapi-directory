import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Either of the following: 'tcp', 'udp', 'icmp-ping' or 'any'
 */
export declare enum UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum {
    Any = "any",
    IcmpPing = "icmp-ping",
    Tcp = "tcp",
    Udp = "udp"
}
export declare class UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInbound extends SpeakeasyBase {
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
    protocol?: UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum;
}
/**
 * The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2')
 */
export declare enum UpdateNetworkOneToOneNatRulesRequestBodyRulesUplinkEnum {
    Internet1 = "internet1",
    Internet2 = "internet2"
}
export declare class UpdateNetworkOneToOneNatRulesRequestBodyRules extends SpeakeasyBase {
    /**
     * The ports this mapping will provide access on, and the remote IPs that will be allowed access to the resource
     */
    allowedInbound?: UpdateNetworkOneToOneNatRulesRequestBodyRulesAllowedInbound[];
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
    uplink?: UpdateNetworkOneToOneNatRulesRequestBodyRulesUplinkEnum;
}
export declare class UpdateNetworkOneToOneNatRulesRequestBody extends SpeakeasyBase {
    /**
     * An array of 1:1 nat rules
     */
    rules: UpdateNetworkOneToOneNatRulesRequestBodyRules[];
}
export declare class UpdateNetworkOneToOneNatRulesRequest extends SpeakeasyBase {
    requestBody: UpdateNetworkOneToOneNatRulesRequestBody;
    networkId: string;
}
export declare class UpdateNetworkOneToOneNatRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkOneToOneNatRules200ApplicationJSONObject?: Record<string, any>;
}
