import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Direction of traffic to mirror, either INGRESS, EGRESS, or BOTH. The default is BOTH.
 */
export declare enum PacketMirroringFilterDirectionEnum {
    Both = "BOTH",
    Egress = "EGRESS",
    Ingress = "INGRESS"
}
export declare class PacketMirroringFilter extends SpeakeasyBase {
    /**
     * Protocols that apply as filter on mirrored traffic. If no protocols are specified, all traffic that matches the specified CIDR ranges is mirrored. If neither cidrRanges nor IPProtocols is specified, all traffic is mirrored.
     */
    ipProtocols?: string[];
    /**
     * IP CIDR ranges that apply as filter on the source (ingress) or destination (egress) IP in the IP header. Only IPv4 is supported. If no ranges are specified, all traffic that matches the specified IPProtocols is mirrored. If neither cidrRanges nor IPProtocols is specified, all traffic is mirrored.
     */
    cidrRanges?: string[];
    /**
     * Direction of traffic to mirror, either INGRESS, EGRESS, or BOTH. The default is BOTH.
     */
    direction?: PacketMirroringFilterDirectionEnum;
}
