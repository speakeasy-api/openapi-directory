import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The DHCP lease time config for the dhcp server running on switch interface ('30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week')
 */
export declare enum UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum {
    OneDay = "1 day",
    OneHour = "1 hour",
    OneWeek = "1 week",
    TwelveHours = "12 hours",
    ThirtyMinutes = "30 minutes",
    FourHours = "4 hours"
}
/**
 * The DHCP mode options for the switch interface ('dhcpDisabled', 'dhcpRelay' or 'dhcpServer')
 */
export declare enum UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum {
    DhcpDisabled = "dhcpDisabled",
    DhcpRelay = "dhcpRelay",
    DhcpServer = "dhcpServer"
}
/**
 * The type of the DHCP option which should be one of ('text', 'ip', 'integer' or 'hex')
 */
export declare enum UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum {
    Hex = "hex",
    Integer = "integer",
    Ip = "ip",
    Text = "text"
}
export declare class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions extends SpeakeasyBase {
    /**
     * The code for DHCP option which should be from 2 to 254
     */
    code: string;
    /**
     * The type of the DHCP option which should be one of ('text', 'ip', 'integer' or 'hex')
     */
    type: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum;
    /**
     * The value of the DHCP option
     */
    value: string;
}
/**
 * The DHCP name server option for the dhcp server running on the switch interface ('googlePublicDns', 'openDns' or 'custom')
 */
export declare enum UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum {
    Custom = "custom",
    GooglePublicDns = "googlePublicDns",
    OpenDns = "openDns"
}
export declare class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments extends SpeakeasyBase {
    /**
     * The IP address of the client which has fixed IP address assigned to it
     */
    ip: string;
    /**
     * The MAC address of the client which has fixed IP address
     */
    mac: string;
    /**
     * The name of the client which has fixed IP address
     */
    name: string;
}
export declare class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges extends SpeakeasyBase {
    /**
     * The comment for the reserved IP range
     */
    comment?: string;
    /**
     * The ending IP address of the reserved IP range
     */
    end: string;
    /**
     * The starting IP address of the reserved IP range
     */
    start: string;
}
export declare class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody extends SpeakeasyBase {
    /**
     * The PXE boot server filename for the DHCP server running on the switch interface
     */
    bootFileName?: string;
    /**
     * The PXE boot server IP for the DHCP server running on the switch interface
     */
    bootNextServer?: string;
    /**
     * Enable DHCP boot options to provide PXE boot options configs for the dhcp server running on the switch interface
     */
    bootOptionsEnabled?: boolean;
    /**
     * The DHCP lease time config for the dhcp server running on switch interface ('30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week')
     */
    dhcpLeaseTime?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum;
    /**
     * The DHCP mode options for the switch interface ('dhcpDisabled', 'dhcpRelay' or 'dhcpServer')
     */
    dhcpMode?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum;
    /**
     * Array of DHCP options consisting of code, type and value for the DHCP server running on the switch interface
     */
    dhcpOptions?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions[];
    /**
     * The DHCP relay server IPs to which DHCP packets would get relayed for the switch interface
     */
    dhcpRelayServerIps?: string[];
    /**
     * The DHCP name server IPs when DHCP name server option is 'custom'
     */
    dnsCustomNameservers?: string[];
    /**
     * The DHCP name server option for the dhcp server running on the switch interface ('googlePublicDns', 'openDns' or 'custom')
     */
    dnsNameserversOption?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum;
    /**
     * Array of DHCP fixed IP assignments for the DHCP server running on the switch interface
     */
    fixedIpAssignments?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments[];
    /**
     * Array of DHCP reserved IP assignments for the DHCP server running on the switch interface
     */
    reservedIpRanges?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges[];
}
export declare class UpdateDeviceSwitchRoutingInterfaceDhcpRequest extends SpeakeasyBase {
    requestBody?: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody;
    interfaceId: string;
    serial: string;
}
export declare class UpdateDeviceSwitchRoutingInterfaceDhcpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject?: Record<string, any>;
}
