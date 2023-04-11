import { SpeakeasyBase } from "../../../internal/utils";
import { PacketMirroringFilter } from "./packetmirroringfilter";
import { PacketMirroringForwardingRuleInfo } from "./packetmirroringforwardingruleinfo";
import { PacketMirroringMirroredResourceInfo } from "./packetmirroringmirroredresourceinfo";
import { PacketMirroringNetworkInfo } from "./packetmirroringnetworkinfo";
/**
 * Indicates whether or not this packet mirroring takes effect. If set to FALSE, this packet mirroring policy will not be enforced on the network. The default is TRUE.
 */
export declare enum PacketMirroringEnableEnum {
    False = "FALSE",
    True = "TRUE"
}
/**
 * Represents a Packet Mirroring resource. Packet Mirroring clones the traffic of specified instances in your Virtual Private Cloud (VPC) network and forwards it to a collector destination, such as an instance group of an internal TCP/UDP load balancer, for analysis or examination. For more information about setting up Packet Mirroring, see Using Packet Mirroring.
 */
export declare class PacketMirroring extends SpeakeasyBase {
    collectorIlb?: PacketMirroringForwardingRuleInfo;
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    /**
     * Indicates whether or not this packet mirroring takes effect. If set to FALSE, this packet mirroring policy will not be enforced on the network. The default is TRUE.
     */
    enable?: PacketMirroringEnableEnum;
    filter?: PacketMirroringFilter;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Output Only] Type of the resource. Always compute#packetMirroring for packet mirrorings.
     */
    kind?: string;
    mirroredResources?: PacketMirroringMirroredResourceInfo;
    /**
     * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    network?: PacketMirroringNetworkInfo;
    /**
     * The priority of applying this configuration. Priority is used to break ties in cases where there is more than one matching rule. In the case of two rules that apply for a given Instance, the one with the lowest-numbered priority value wins. Default value is 1000. Valid range is 0 through 65535.
     */
    priority?: number;
    /**
     * [Output Only] URI of the region where the packetMirroring resides.
     */
    region?: string;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
}
