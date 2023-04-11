import { SpeakeasyBase } from "../../../internal/utils";
/**
 * IANA Internet Protocol Number such as TCP(6) and UDP(17).
 */
export declare enum ConnectionProtocolEnum {
    ProtocolUnspecified = "PROTOCOL_UNSPECIFIED",
    Icmp = "ICMP",
    Tcp = "TCP",
    Udp = "UDP",
    Gre = "GRE",
    Esp = "ESP"
}
/**
 * Contains information about the IP connection associated with the finding.
 */
export declare class Connection extends SpeakeasyBase {
    /**
     * Destination IP address. Not present for sockets that are listening and not connected.
     */
    destinationIp?: string;
    /**
     * Destination port. Not present for sockets that are listening and not connected.
     */
    destinationPort?: number;
    /**
     * IANA Internet Protocol Number such as TCP(6) and UDP(17).
     */
    protocol?: ConnectionProtocolEnum;
    /**
     * Source IP address.
     */
    sourceIp?: string;
    /**
     * Source port.
     */
    sourcePort?: number;
}
