import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * 'tcp' or 'udp'
 */
export declare enum UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp"
}
export declare class UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules extends SpeakeasyBase {
    /**
     * Remote IP addresses or ranges that are permitted to access the internal resource via this port forwarding rule, or 'any'
     */
    allowedIps?: string[];
    /**
     * Local IP address to which traffic will be forwarded
     */
    localIp?: string;
    /**
     * Destination port of the forwarded traffic that will be sent from the MX to the specified host on the LAN. If you simply wish to forward the traffic without translating the port, this should be the same as the Public port
     */
    localPort?: string;
    /**
     * A description of the rule
     */
    name?: string;
    /**
     * 'tcp' or 'udp'
     */
    protocol?: UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum;
    /**
     * Destination port of the traffic that is arriving on the WAN
     */
    publicPort?: string;
}
/**
 * The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2')
 */
export declare enum UpdateNetworkOneToManyNatRulesRequestBodyRulesUplinkEnum {
    Internet1 = "internet1",
    Internet2 = "internet2"
}
export declare class UpdateNetworkOneToManyNatRulesRequestBodyRules extends SpeakeasyBase {
    /**
     * An array of associated forwarding rules
     */
    portRules: UpdateNetworkOneToManyNatRulesRequestBodyRulesPortRules[];
    /**
     * The IP address that will be used to access the internal resource from the WAN
     */
    publicIp: string;
    /**
     * The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2')
     */
    uplink: UpdateNetworkOneToManyNatRulesRequestBodyRulesUplinkEnum;
}
export declare class UpdateNetworkOneToManyNatRulesRequestBody extends SpeakeasyBase {
    /**
     * An array of 1:Many nat rules
     */
    rules: UpdateNetworkOneToManyNatRulesRequestBodyRules[];
}
export declare class UpdateNetworkOneToManyNatRulesRequest extends SpeakeasyBase {
    requestBody: UpdateNetworkOneToManyNatRulesRequestBody;
    networkId: string;
}
export declare class UpdateNetworkOneToManyNatRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkOneToManyNatRules200ApplicationJSONObject?: Record<string, any>;
}
