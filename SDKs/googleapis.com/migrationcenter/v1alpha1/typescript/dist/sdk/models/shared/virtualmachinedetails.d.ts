import { SpeakeasyBase } from "../../../internal/utils";
import { GuestOsDetails } from "./guestosdetails";
import { PlatformDetails } from "./platformdetails";
import { VirtualMachineArchitectureDetails } from "./virtualmachinearchitecturedetails";
import { VirtualMachineDiskDetails } from "./virtualmachinediskdetails";
import { VirtualMachineNetworkDetails } from "./virtualmachinenetworkdetails";
/**
 * What family the OS belong to, if known.
 */
export declare enum VirtualMachineDetailsOsFamilyEnum {
    OsFamilyUnknown = "OS_FAMILY_UNKNOWN",
    OsFamilyWindows = "OS_FAMILY_WINDOWS",
    OsFamilyLinux = "OS_FAMILY_LINUX",
    OsFamilyUnix = "OS_FAMILY_UNIX"
}
/**
 * Details of a VirtualMachine.
 */
export declare class VirtualMachineDetails extends SpeakeasyBase {
    /**
     * Number of CPU cores in the VirtualMachine. Must be non-negative.
     */
    coreCount?: number;
    /**
     * VM creation timestamp.
     */
    createTime?: string;
    /**
     * Information from Guest-level collections.
     */
    guestOs?: GuestOsDetails;
    /**
     * The amount of memory in the VirtualMachine. Must be non-negative.
     */
    memoryMb?: number;
    /**
     * What family the OS belong to, if known.
     */
    osFamily?: VirtualMachineDetailsOsFamilyEnum;
    /**
     * The name of the operating system running on the VirtualMachine.
     */
    osName?: string;
    /**
     * The version of the operating system running on the virtual machine.
     */
    osVersion?: string;
    /**
     * Information about the platform.
     */
    platform?: PlatformDetails;
    /**
     * Power state of VM (poweredOn or poweredOff).
     */
    powerState?: string;
    /**
     * Folder name in vCenter where asset resides.
     */
    vcenterFolder?: string;
    /**
     * vCenter URL used in collection.
     */
    vcenterUrl?: string;
    /**
     * vCenter VM ID.
     */
    vcenterVmId?: string;
    /**
     * Details of the VM architecture.
     */
    vmArchitecture?: VirtualMachineArchitectureDetails;
    /**
     * Details of VM disks.
     */
    vmDisks?: VirtualMachineDiskDetails;
    /**
     * Virtual Machine display name.
     */
    vmName?: string;
    /**
     * Details of network adapters and settings.
     */
    vmNetwork?: VirtualMachineNetworkDetails;
    /**
     * Virtual Machine unique identifier.
     */
    vmUuid?: string;
}
