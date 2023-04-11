import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchDhcpV4ServersSeenRequest extends SpeakeasyBase {
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    networkId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
     */
    perPage?: number;
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
    /**
     * The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
     */
    t0?: string;
    /**
     * The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
     */
    timespan?: number;
}
/**
 * Interface attributes of the server. Only for configured servers.
 */
export declare class GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONDeviceInterface extends SpeakeasyBase {
    /**
     * Interface name.
     */
    name?: string;
    /**
     * Url link to interface.
     */
    url?: string;
}
/**
 * Attributes of the server when it's a device.
 */
export declare class GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONDevice extends SpeakeasyBase {
    /**
     * Interface attributes of the server. Only for configured servers.
     */
    interface?: GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONDeviceInterface;
    /**
     * Device name.
     */
    name?: string;
    /**
     * Device serial.
     */
    serial?: string;
    /**
     * Url link to device.
     */
    url?: string;
}
/**
 * IPv4 attributes of the server.
 */
export declare class GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONIpv4 extends SpeakeasyBase {
    /**
     * IPv4 address of the server.
     */
    address?: string;
    /**
     * IPv4 gateway address of the server.
     */
    gateway?: string;
    /**
     * Subnet of the server.
     */
    subnet?: string;
}
/**
 * IPv4 attributes of the last ack.
 */
export declare class GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastAckIpv4 extends SpeakeasyBase {
    /**
     * IPv4 address of the last ack.
     */
    address?: string;
}
/**
 * Attributes of the server's last ack.
 */
export declare class GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastAck extends SpeakeasyBase {
    /**
     * IPv4 attributes of the last ack.
     */
    ipv4?: GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastAckIpv4;
    /**
     * Last time the server was acked.
     */
    ts?: Date;
}
/**
 * Destination ipv4 attributes of the packet.
 */
export declare class GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacketDestinationIpv4 extends SpeakeasyBase {
    /**
     * Destination ipv4 address of the packet.
     */
    address?: string;
}
/**
 * Destination of the packet.
 */
export declare class GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacketDestination extends SpeakeasyBase {
    /**
     * Destination ipv4 attributes of the packet.
     */
    ipv4?: GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacketDestinationIpv4;
    /**
     * Destination mac address of the packet.
     */
    mac?: string;
    /**
     * Destination port of the packet.
     */
    port?: number;
}
/**
 * Additional ethernet attributes of the packet.
 */
export declare class GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacketEthernet extends SpeakeasyBase {
    /**
     * Ethernet type of the packet.
     */
    type?: string;
}
export declare class GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacketFieldsOptions extends SpeakeasyBase {
    /**
     * Option name.
     */
    name?: string;
    /**
     * Option value.
     */
    value?: string;
}
/**
 * DHCP-specific fields of the packet.
 */
export declare class GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacketFields extends SpeakeasyBase {
    /**
     * Client hardware address of the packet.
     */
    chaddr?: string;
    /**
     * Client IP address of the packet.
     */
    ciaddr?: string;
    /**
     * Packet flags.
     */
    flags?: string;
    /**
     * Gateway IP address of the packet.
     */
    giaddr?: string;
    /**
     * Hardware length of the packet.
     */
    hlen?: number;
    /**
     * Number of hops the packet took.
     */
    hops?: number;
    /**
     * Hardware type code of the packet.
     */
    htype?: number;
    /**
     * Magic cookie of the packet.
     */
    magicCookie?: string;
    /**
     * Operation code of the packet.
     */
    op?: number;
    /**
     * Additional DHCP options of the packet.
     */
    options?: GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacketFieldsOptions[];
    /**
     * Number of seconds since receiving the packet.
     */
    secs?: number;
    /**
     * Server IP address of the packet.
     */
    siaddr?: string;
    /**
     * Server identifier address of the packet.
     */
    sname?: string;
    /**
     * Transaction id of the packet.
     */
    xid?: string;
    /**
     * Assigned IP address of the packet.
     */
    yiaddr?: string;
}
/**
 * DSCP attributes of the packet.
 */
export declare class GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacketIpDscp extends SpeakeasyBase {
    /**
     * ECN number of the packet.
     */
    ecn?: number;
    /**
     * DSCP tag number of the packet.
     */
    tag?: number;
}
/**
 * IP version of the packet.
 */
export declare enum GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacketIpVersionEnum {
    Four = "4",
    Six = "6"
}
/**
 * Additional IP attributes of the packet.
 */
export declare class GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacketIp extends SpeakeasyBase {
    /**
     * DSCP attributes of the packet.
     */
    dscp?: GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacketIpDscp;
    /**
     * IP header length of the packet.
     */
    headerLength?: number;
    /**
     * IP ID of the packet.
     */
    id?: string;
    /**
     * IP length of the packet.
     */
    length?: number;
    /**
     * IP protocol number of the packet.
     */
    protocol?: number;
    /**
     * Time to live of the packet.
     */
    ttl?: number;
    /**
     * IP version of the packet.
     */
    version?: GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacketIpVersionEnum;
}
/**
 * Source ipv4 attributes of the packet.
 */
export declare class GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacketSourceIpv4 extends SpeakeasyBase {
    /**
     * Source ipv4 address of the packet.
     */
    address?: string;
}
/**
 * Source of the packet.
 */
export declare class GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacketSource extends SpeakeasyBase {
    /**
     * Source ipv4 attributes of the packet.
     */
    ipv4?: GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacketSourceIpv4;
    /**
     * Source mac address of the packet.
     */
    mac?: string;
    /**
     * Source port of the packet.
     */
    port?: number;
}
/**
 * UDP attributes of the packet.
 */
export declare class GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacketUdp extends SpeakeasyBase {
    /**
     * UDP checksum of the packet.
     */
    checksum?: string;
    /**
     * UDP length of the packet.
     */
    length?: number;
}
/**
 * Last packet the server received.
 */
export declare class GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacket extends SpeakeasyBase {
    /**
     * Destination of the packet.
     */
    destination?: GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacketDestination;
    /**
     * Additional ethernet attributes of the packet.
     */
    ethernet?: GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacketEthernet;
    /**
     * DHCP-specific fields of the packet.
     */
    fields?: GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacketFields;
    /**
     * Additional IP attributes of the packet.
     */
    ip?: GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacketIp;
    /**
     * Source of the packet.
     */
    source?: GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacketSource;
    /**
     * Packet type.
     */
    type?: string;
    /**
     * UDP attributes of the packet.
     */
    udp?: GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacketUdp;
}
export declare class GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONSeenBy extends SpeakeasyBase {
    /**
     * Device name.
     */
    name?: string;
    /**
     * Device serial.
     */
    serial?: string;
    /**
     * Url link to device.
     */
    url?: string;
}
/**
 * server type. Can be a 'device', 'stack', or 'discovered' (i.e client).
 */
export declare enum GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONTypeEnum {
    Device = "device",
    Discovered = "discovered",
    Stack = "stack"
}
export declare class GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSON extends SpeakeasyBase {
    /**
     * Client id of the server if available.
     */
    clientId?: string;
    /**
     * Attributes of the server when it's a device.
     */
    device?: GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONDevice;
    /**
     * IPv4 attributes of the server.
     */
    ipv4?: GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONIpv4;
    /**
     * Whether the server is allowed or blocked. Always true for configured servers.
     */
    isAllowed?: boolean;
    /**
     * Whether the server is configured.
     */
    isConfigured?: boolean;
    /**
     * Attributes of the server's last ack.
     */
    lastAck?: GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastAck;
    /**
     * Last packet the server received.
     */
    lastPacket?: GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONLastPacket;
    /**
     * Last time the server was seen.
     */
    lastSeenAt?: Date;
    /**
     * Mac address of the server.
     */
    mac?: string;
    /**
     * Devices that saw the server.
     */
    seenBy?: GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONSeenBy[];
    /**
     * server type. Can be a 'device', 'stack', or 'discovered' (i.e client).
     */
    type?: GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSONTypeEnum;
    /**
     * Vlan id of the server.
     */
    vlan?: number;
}
export declare class GetNetworkSwitchDhcpV4ServersSeenResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchDhcpV4ServersSeen200ApplicationJSONObjects?: GetNetworkSwitchDhcpV4ServersSeen200ApplicationJSON[];
}
