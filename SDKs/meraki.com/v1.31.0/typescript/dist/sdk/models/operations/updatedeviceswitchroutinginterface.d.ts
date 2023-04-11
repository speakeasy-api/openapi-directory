import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The IPv6 settings of the interface.
 */
export declare class UpdateDeviceSwitchRoutingInterfaceRequestBodyIpv6 extends SpeakeasyBase {
    /**
     * The IPv6 address of the interface. Required if assignmentMode is 'static'. Must not be included if           assignmentMode is 'eui-64'.
     */
    address?: string;
    /**
     * The IPv6 assignment mode for the interface. Can be either 'eui-64' or 'static'.
     */
    assignmentMode?: string;
    /**
     * The IPv6 default gateway of the interface. Required if prefix is defined and this is the first           interface with IPv6 configured for the switch.
     */
    gateway?: string;
    /**
     * The IPv6 prefix of the interface. Required if IPv6 object is included.
     */
    prefix?: string;
}
/**
 * Enable multicast support if, multicast routing between VLANs is required. Options are:         'disabled', 'enabled' or 'IGMP snooping querier'. Default is 'disabled'.
 */
export declare enum UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum {
    IGMPSnoopingQuerier = "IGMP snooping querier",
    Disabled = "disabled",
    Enabled = "enabled"
}
/**
 * The OSPF routing settings of the interface.
 */
export declare class UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings extends SpeakeasyBase {
    /**
     * The OSPF area to which this interface should belong. Can be either 'disabled' or the identifier of an           existing OSPF area. Defaults to 'disabled'.
     */
    area?: string;
    /**
     * The path cost for this interface. Defaults to 1, but can be increased up to 65535           to give lower priority.
     */
    cost?: number;
    /**
     * When enabled, OSPF will not run on the interface, but the subnet will still be advertised.
     */
    isPassiveEnabled?: boolean;
}
/**
 * The OSPFv3 routing settings of the interface.
 */
export declare class UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfV3 extends SpeakeasyBase {
    /**
     * The OSPFv3 area to which this interface should belong. Can be either 'disabled' or the identifier of an           existing OSPFv3 area. Defaults to 'disabled'.
     */
    area?: string;
    /**
     * The path cost for this interface. Defaults to 1, but can be increased up to 65535           to give lower priority.
     */
    cost?: number;
    /**
     * When enabled, OSPFv3 will not run on the interface, but the subnet will still be advertised.
     */
    isPassiveEnabled?: boolean;
}
export declare class UpdateDeviceSwitchRoutingInterfaceRequestBody extends SpeakeasyBase {
    /**
     * The next hop for any traffic that isn't going to a directly connected subnet or over a static route.         This IP address must exist in a subnet with a routed interface. Required if this is the first IPv4 interface.
     */
    defaultGateway?: string;
    /**
     * The IP address this switch will use for layer 3 routing on this VLAN or subnet. This cannot be the same         as the switch's management IP.
     */
    interfaceIp?: string;
    /**
     * The IPv6 settings of the interface.
     */
    ipv6?: UpdateDeviceSwitchRoutingInterfaceRequestBodyIpv6;
    /**
     * Enable multicast support if, multicast routing between VLANs is required. Options are:         'disabled', 'enabled' or 'IGMP snooping querier'. Default is 'disabled'.
     */
    multicastRouting?: UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum;
    /**
     * A friendly name or description for the interface or VLAN.
     */
    name?: string;
    /**
     * The OSPF routing settings of the interface.
     */
    ospfSettings?: UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings;
    /**
     * The OSPFv3 routing settings of the interface.
     */
    ospfV3?: UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfV3;
    /**
     * The network that this routed interface is on, in CIDR notation (ex. 10.1.1.0/24).
     */
    subnet?: string;
    /**
     * The VLAN this routed interface is on. VLAN must be between 1 and 4094.
     */
    vlanId?: number;
}
export declare class UpdateDeviceSwitchRoutingInterfaceRequest extends SpeakeasyBase {
    requestBody?: UpdateDeviceSwitchRoutingInterfaceRequestBody;
    interfaceId: string;
    serial: string;
}
/**
 * IPv6 addressing
 */
export declare class UpdateDeviceSwitchRoutingInterface200ApplicationJSONIpv6 extends SpeakeasyBase {
    /**
     * IPv6 address
     */
    address?: string;
    /**
     * Assignment mode
     */
    assignmentMode?: string;
    /**
     * IPv6 gateway
     */
    gateway?: string;
    /**
     * IPv6 subnet
     */
    prefix?: string;
}
/**
 * IPv4 OSPF Settings
 */
export declare class UpdateDeviceSwitchRoutingInterface200ApplicationJSONOspfSettings extends SpeakeasyBase {
    /**
     * Area id
     */
    area?: string;
    /**
     * OSPF Cost
     */
    cost?: number;
    /**
     * Disable sending Hello packets on this interface's IPv4 area
     */
    isPassiveEnabled?: boolean;
}
/**
 * IPv6 OSPF Settings
 */
export declare class UpdateDeviceSwitchRoutingInterface200ApplicationJSONOspfV3 extends SpeakeasyBase {
    /**
     * Area id
     */
    area?: string;
    /**
     * OSPF Cost
     */
    cost?: number;
    /**
     * Disable sending Hello packets on this interface's IPv6 area
     */
    isPassiveEnabled?: boolean;
}
/**
 * Successful operation
 */
export declare class UpdateDeviceSwitchRoutingInterface200ApplicationJSON extends SpeakeasyBase {
    /**
     * IPv4 default gateway
     */
    defaultGateway?: string;
    /**
     * The id
     */
    interfaceId?: string;
    /**
     * IPv4 address
     */
    interfaceIp?: string;
    /**
     * IPv6 addressing
     */
    ipv6?: UpdateDeviceSwitchRoutingInterface200ApplicationJSONIpv6;
    /**
     * Multicast routing status
     */
    multicastRouting?: string;
    /**
     * The name
     */
    name?: string;
    /**
     * IPv4 OSPF Settings
     */
    ospfSettings?: UpdateDeviceSwitchRoutingInterface200ApplicationJSONOspfSettings;
    /**
     * IPv6 OSPF Settings
     */
    ospfV3?: UpdateDeviceSwitchRoutingInterface200ApplicationJSONOspfV3;
    /**
     * IPv4 subnet
     */
    subnet?: string;
    /**
     * VLAN id
     */
    vlanId?: number;
}
export declare class UpdateDeviceSwitchRoutingInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateDeviceSwitchRoutingInterface200ApplicationJSONObject?: UpdateDeviceSwitchRoutingInterface200ApplicationJSON;
}
