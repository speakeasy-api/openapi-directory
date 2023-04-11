import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NetworkInterfaceSubInterfaceIpAllocationModeEnum {
    AllocateIp = "ALLOCATE_IP",
    DoNotAllocateIp = "DO_NOT_ALLOCATE_IP",
    Unspecified = "UNSPECIFIED"
}
export declare class NetworkInterfaceSubInterface extends SpeakeasyBase {
    /**
     * An IPv4 internal IP address to assign to the instance for this subinterface. If specified, ip_allocation_mode should be set to ALLOCATE_IP.
     */
    ipAddress?: string;
    ipAllocationMode?: NetworkInterfaceSubInterfaceIpAllocationModeEnum;
    /**
     * If specified, this subnetwork must belong to the same network as that of the network interface. If not specified the subnet of network interface will be used. If you specify this property, you can specify the subnetwork as a full or partial URL. For example, the following are all valid URLs: - https://www.googleapis.com/compute/v1/projects/project/regions/region /subnetworks/subnetwork - regions/region/subnetworks/subnetwork
     */
    subnetwork?: string;
    /**
     * VLAN tag. Should match the VLAN(s) supported by the subnetwork to which this subinterface is connecting.
     */
    vlan?: number;
}
