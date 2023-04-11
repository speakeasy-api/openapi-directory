import { SpeakeasyBase } from "../../../internal/utils";
import { PacketMirroringMirroredResourceInfoInstanceInfo } from "./packetmirroringmirroredresourceinfoinstanceinfo";
import { PacketMirroringMirroredResourceInfoSubnetInfo } from "./packetmirroringmirroredresourceinfosubnetinfo";
export declare class PacketMirroringMirroredResourceInfo extends SpeakeasyBase {
    /**
     * A set of virtual machine instances that are being mirrored. They must live in zones contained in the same region as this packetMirroring. Note that this config will apply only to those network interfaces of the Instances that belong to the network specified in this packetMirroring. You may specify a maximum of 50 Instances.
     */
    instances?: PacketMirroringMirroredResourceInfoInstanceInfo[];
    /**
     * A set of subnetworks for which traffic from/to all VM instances will be mirrored. They must live in the same region as this packetMirroring. You may specify a maximum of 5 subnetworks.
     */
    subnetworks?: PacketMirroringMirroredResourceInfoSubnetInfo[];
    /**
     * A set of mirrored tags. Traffic from/to all VM instances that have one or more of these tags will be mirrored.
     */
    tags?: string[];
}
