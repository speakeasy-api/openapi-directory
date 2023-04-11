import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceSwitchRoutingInterfacesRequest extends SpeakeasyBase {
    serial: string;
}
/**
 * IPv6 addressing
 */
export declare class GetDeviceSwitchRoutingInterfaces200ApplicationJSONIpv6 extends SpeakeasyBase {
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
export declare class GetDeviceSwitchRoutingInterfaces200ApplicationJSONOspfSettings extends SpeakeasyBase {
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
export declare class GetDeviceSwitchRoutingInterfaces200ApplicationJSONOspfV3 extends SpeakeasyBase {
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
export declare class GetDeviceSwitchRoutingInterfaces200ApplicationJSON extends SpeakeasyBase {
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
    ipv6?: GetDeviceSwitchRoutingInterfaces200ApplicationJSONIpv6;
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
    ospfSettings?: GetDeviceSwitchRoutingInterfaces200ApplicationJSONOspfSettings;
    /**
     * IPv6 OSPF Settings
     */
    ospfV3?: GetDeviceSwitchRoutingInterfaces200ApplicationJSONOspfV3;
    /**
     * IPv4 subnet
     */
    subnet?: string;
    /**
     * VLAN id
     */
    vlanId?: number;
}
export declare class GetDeviceSwitchRoutingInterfacesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceSwitchRoutingInterfaces200ApplicationJSONObjects?: GetDeviceSwitchRoutingInterfaces200ApplicationJSON[];
}
