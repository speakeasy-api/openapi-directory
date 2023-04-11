import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The DHCP lease time config for the dhcp server running on switch stack interface ('30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week')
 */
export declare enum UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum {
    OneDay = "1 day",
    OneHour = "1 hour",
    OneWeek = "1 week",
    TwelveHours = "12 hours",
    ThirtyMinutes = "30 minutes",
    FourHours = "4 hours"
}
/**
 * The DHCP mode options for the switch stack interface ('dhcpDisabled', 'dhcpRelay' or 'dhcpServer')
 */
export declare enum UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum {
    DhcpDisabled = "dhcpDisabled",
    DhcpRelay = "dhcpRelay",
    DhcpServer = "dhcpServer"
}
/**
 * The type of the DHCP option which should be one of ('text', 'ip', 'integer' or 'hex')
 */
export declare enum UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum {
    Hex = "hex",
    Integer = "integer",
    Ip = "ip",
    Text = "text"
}
export declare class UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions extends SpeakeasyBase {
    /**
     * The code for DHCP option which should be from 2 to 254
     */
    code: string;
    /**
     * The type of the DHCP option which should be one of ('text', 'ip', 'integer' or 'hex')
     */
    type: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum;
    /**
     * The value of the DHCP option
     */
    value: string;
}
/**
 * The DHCP name server option for the dhcp server running on the switch stack interface ('googlePublicDns', 'openDns' or 'custom')
 */
export declare enum UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum {
    Custom = "custom",
    GooglePublicDns = "googlePublicDns",
    OpenDns = "openDns"
}
export declare class UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments extends SpeakeasyBase {
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
export declare class UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges extends SpeakeasyBase {
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
export declare class UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody extends SpeakeasyBase {
    /**
     * The PXE boot server file name for the DHCP server running on the switch stack interface
     */
    bootFileName?: string;
    /**
     * The PXE boot server IP for the DHCP server running on the switch stack interface
     */
    bootNextServer?: string;
    /**
     * Enable DHCP boot options to provide PXE boot options configs for the dhcp server running on the switch stack interface
     */
    bootOptionsEnabled?: boolean;
    /**
     * The DHCP lease time config for the dhcp server running on switch stack interface ('30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week')
     */
    dhcpLeaseTime?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum;
    /**
     * The DHCP mode options for the switch stack interface ('dhcpDisabled', 'dhcpRelay' or 'dhcpServer')
     */
    dhcpMode?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum;
    /**
     * Array of DHCP options consisting of code, type and value for the DHCP server running on the switch stack interface
     */
    dhcpOptions?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions[];
    /**
     * The DHCP relay server IPs to which DHCP packets would get relayed for the switch stack interface
     */
    dhcpRelayServerIps?: string[];
    /**
     * The DHCP name server IPs when DHCP name server option is 'custom'
     */
    dnsCustomNameservers?: string[];
    /**
     * The DHCP name server option for the dhcp server running on the switch stack interface ('googlePublicDns', 'openDns' or 'custom')
     */
    dnsNameserversOption?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum;
    /**
     * Array of DHCP fixed IP assignments for the DHCP server running on the switch stack interface
     */
    fixedIpAssignments?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments[];
    /**
     * Array of DHCP reserved IP assignments for the DHCP server running on the switch stack interface
     */
    reservedIpRanges?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges[];
}
export declare class UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody;
    interfaceId: string;
    networkId: string;
    switchStackId: string;
}
export declare class UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject?: Record<string, any>;
}
