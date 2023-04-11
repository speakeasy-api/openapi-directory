import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The IPv6 settings of the interface.
 */
export declare class UpdateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6 extends SpeakeasyBase {
    /**
     * The IPv6 address of the interface. Required if assignmentMode is included and set as 'static'. Must not be included if assignmentMode is 'eui-64'.
     */
    address?: string;
    /**
     * The IPv6 assignment mode for the interface. Can be either 'eui-64' or 'static'.
     */
    assignmentMode?: string;
    /**
     * The IPv6 default gateway of the interface. Required if prefix is defined and this is the first interface with IPv6 configured for the stack.
     */
    gateway?: string;
    /**
     * The IPv6 prefix of the interface. Required if IPv6 object is included and interface does not already have ipv6.prefix configured
     */
    prefix?: string;
}
/**
 * Enable multicast support if, multicast routing between VLANs is required. Options are, 'disabled', 'enabled' or 'IGMP snooping querier'.
 */
export declare enum UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum {
    IGMPSnoopingQuerier = "IGMP snooping querier",
    Disabled = "disabled",
    Enabled = "enabled"
}
/**
 * The OSPF routing settings of the interface.
 */
export declare class UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings extends SpeakeasyBase {
    /**
     * The OSPF area to which this interface should belong. Can be either 'disabled' or the identifier of an existing OSPF area.
     */
    area?: string;
    /**
     * The path cost for this interface. Defaults to 1, but can be increased up to 65535 to give lower priority.
     */
    cost?: number;
    /**
     * When enabled, OSPF will not run on the interface, but the subnet will still be advertised.
     */
    isPassiveEnabled?: boolean;
}
export declare class UpdateNetworkSwitchStackRoutingInterfaceRequestBody extends SpeakeasyBase {
    /**
     * The next hop for any traffic that isn't going to a directly connected subnet or over a static route. This IP address must exist in a subnet with a routed interface.
     */
    defaultGateway?: string;
    /**
     * The IP address this switch stack will use for layer 3 routing on this VLAN or subnet. This cannot be the same as the switch's management IP.
     */
    interfaceIp?: string;
    /**
     * The IPv6 settings of the interface.
     */
    ipv6?: UpdateNetworkSwitchStackRoutingInterfaceRequestBodyIpv6;
    /**
     * Enable multicast support if, multicast routing between VLANs is required. Options are, 'disabled', 'enabled' or 'IGMP snooping querier'.
     */
    multicastRouting?: UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum;
    /**
     * A friendly name or description for the interface or VLAN.
     */
    name?: string;
    /**
     * The OSPF routing settings of the interface.
     */
    ospfSettings?: UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings;
    /**
     * The network that this routed interface is on, in CIDR notation (ex. 10.1.1.0/24).
     */
    subnet?: string;
    /**
     * The VLAN this routed interface is on. VLAN must be between 1 and 4094.
     */
    vlanId?: number;
}
export declare class UpdateNetworkSwitchStackRoutingInterfaceRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkSwitchStackRoutingInterfaceRequestBody;
    interfaceId: string;
    networkId: string;
    switchStackId: string;
}
export declare class UpdateNetworkSwitchStackRoutingInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSwitchStackRoutingInterface200ApplicationJSONObject?: Record<string, any>;
}
