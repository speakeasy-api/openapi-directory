import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * TCP or UDP
 */
export declare enum UpdateNetworkPortForwardingRulesRequestBodyRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp"
}
/**
 * The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2' or 'both')
 */
export declare enum UpdateNetworkPortForwardingRulesRequestBodyRulesUplinkEnum {
    Both = "both",
    Internet1 = "internet1",
    Internet2 = "internet2"
}
export declare class UpdateNetworkPortForwardingRulesRequestBodyRules extends SpeakeasyBase {
    /**
     * An array of ranges of WAN IP addresses that are allowed to make inbound connections on the specified ports or port ranges (or any)
     */
    allowedIps: string[];
    /**
     * The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN
     */
    lanIp: string;
    /**
     * A port or port ranges that will receive the forwarded traffic from the WAN
     */
    localPort: string;
    /**
     * A descriptive name for the rule
     */
    name?: string;
    /**
     * TCP or UDP
     */
    protocol: UpdateNetworkPortForwardingRulesRequestBodyRulesProtocolEnum;
    /**
     * A port or port ranges that will be forwarded to the host on the LAN
     */
    publicPort: string;
    /**
     * The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2' or 'both')
     */
    uplink?: UpdateNetworkPortForwardingRulesRequestBodyRulesUplinkEnum;
}
export declare class UpdateNetworkPortForwardingRulesRequestBody extends SpeakeasyBase {
    /**
     * An array of port forwarding params
     */
    rules: UpdateNetworkPortForwardingRulesRequestBodyRules[];
}
export declare class UpdateNetworkPortForwardingRulesRequest extends SpeakeasyBase {
    requestBody: UpdateNetworkPortForwardingRulesRequestBody;
    networkId: string;
}
export declare class UpdateNetworkPortForwardingRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkPortForwardingRules200ApplicationJSONObject?: Record<string, any>;
}
