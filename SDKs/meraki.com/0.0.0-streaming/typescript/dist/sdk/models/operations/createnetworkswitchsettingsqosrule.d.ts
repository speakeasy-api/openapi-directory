import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The protocol of the incoming packet. Can be one of "ANY", "TCP" or "UDP". Default value is "ANY"
 */
export declare enum CreateNetworkSwitchSettingsQosRuleRequestBodyProtocolEnum {
    Any = "ANY",
    Tcp = "TCP",
    Udp = "UDP"
}
export declare class CreateNetworkSwitchSettingsQosRuleRequestBody extends SpeakeasyBase {
    /**
     * DSCP tag. Set this to -1 to trust incoming DSCP. Default value is 0
     */
    dscp?: number;
    /**
     * The destination port of the incoming packet. Applicable only if protocol is TCP or UDP.
     */
    dstPort?: number;
    /**
     * The destination port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80
     */
    dstPortRange?: string;
    /**
     * The protocol of the incoming packet. Can be one of "ANY", "TCP" or "UDP". Default value is "ANY"
     */
    protocol?: CreateNetworkSwitchSettingsQosRuleRequestBodyProtocolEnum;
    /**
     * The source port of the incoming packet. Applicable only if protocol is TCP or UDP.
     */
    srcPort?: number;
    /**
     * The source port range of the incoming packet. Applicable only if protocol is set to TCP or UDP. Example: 70-80
     */
    srcPortRange?: string;
    /**
     * The VLAN of the incoming packet. A null value will match any VLAN.
     */
    vlan: number;
}
export declare class CreateNetworkSwitchSettingsQosRuleRequest extends SpeakeasyBase {
    requestBody: CreateNetworkSwitchSettingsQosRuleRequestBody;
    networkId: string;
}
export declare class CreateNetworkSwitchSettingsQosRuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkSwitchSettingsQosRule201ApplicationJSONObject?: Record<string, any>;
}
