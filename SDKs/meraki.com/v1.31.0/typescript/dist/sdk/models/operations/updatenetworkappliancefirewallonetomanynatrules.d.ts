import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * 'tcp' or 'udp'
 */
export declare enum UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp"
}
export declare class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules extends SpeakeasyBase {
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
    protocol?: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum;
    /**
     * Destination port of the traffic that is arriving on the WAN
     */
    publicPort?: string;
}
/**
 * The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2')
 */
export declare enum UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum {
    Internet1 = "internet1",
    Internet2 = "internet2"
}
export declare class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules extends SpeakeasyBase {
    /**
     * An array of associated forwarding rules
     */
    portRules: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules[];
    /**
     * The IP address that will be used to access the internal resource from the WAN
     */
    publicIp: string;
    /**
     * The physical WAN interface on which the traffic will arrive ('internet1' or, if available, 'internet2')
     */
    uplink: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum;
}
export declare class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody extends SpeakeasyBase {
    /**
     * An array of 1:Many nat rules
     */
    rules: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules[];
}
export declare class UpdateNetworkApplianceFirewallOneToManyNatRulesRequest extends SpeakeasyBase {
    requestBody: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody;
    networkId: string;
}
export declare class UpdateNetworkApplianceFirewallOneToManyNatRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkApplianceFirewallOneToManyNatRules200ApplicationJSONObject?: Record<string, any>;
}
