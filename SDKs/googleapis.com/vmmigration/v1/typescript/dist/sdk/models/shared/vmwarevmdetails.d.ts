import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The VM Boot Option.
 */
export declare enum VmwareVmDetailsBootOptionEnum {
    BootOptionUnspecified = "BOOT_OPTION_UNSPECIFIED",
    Efi = "EFI",
    Bios = "BIOS"
}
/**
 * The power state of the VM at the moment list was taken.
 */
export declare enum VmwareVmDetailsPowerStateEnum {
    PowerStateUnspecified = "POWER_STATE_UNSPECIFIED",
    On = "ON",
    Off = "OFF",
    Suspended = "SUSPENDED"
}
/**
 * VmwareVmDetails describes a VM in vCenter.
 */
export declare class VmwareVmDetails extends SpeakeasyBase {
    /**
     * Output only. The VM Boot Option.
     */
    bootOption?: VmwareVmDetailsBootOptionEnum;
    /**
     * The total size of the storage allocated to the VM in MB.
     */
    committedStorageMb?: string;
    /**
     * The number of cpus in the VM.
     */
    cpuCount?: number;
    /**
     * The descriptive name of the vCenter's datacenter this VM is contained in.
     */
    datacenterDescription?: string;
    /**
     * The id of the vCenter's datacenter this VM is contained in.
     */
    datacenterId?: string;
    /**
     * The number of disks the VM has.
     */
    diskCount?: number;
    /**
     * The display name of the VM. Note that this is not necessarily unique.
     */
    displayName?: string;
    /**
     * The VM's OS. See for example https://vdc-repo.vmware.com/vmwb-repository/dcr-public/da47f910-60ac-438b-8b9b-6122f4d14524/16b7274a-bf8b-4b4c-a05e-746f2aa93c8c/doc/vim.vm.GuestOsDescriptor.GuestOsIdentifier.html for types of strings this might hold.
     */
    guestDescription?: string;
    /**
     * The size of the memory of the VM in MB.
     */
    memoryMb?: number;
    /**
     * The power state of the VM at the moment list was taken.
     */
    powerState?: VmwareVmDetailsPowerStateEnum;
    /**
     * The unique identifier of the VM in vCenter.
     */
    uuid?: string;
    /**
     * The VM's id in the source (note that this is not the MigratingVm's id). This is the moref id of the VM.
     */
    vmId?: string;
}
/**
 * VmwareVmDetails describes a VM in vCenter.
 */
export declare class VmwareVmDetailsInput extends SpeakeasyBase {
    /**
     * The total size of the storage allocated to the VM in MB.
     */
    committedStorageMb?: string;
    /**
     * The number of cpus in the VM.
     */
    cpuCount?: number;
    /**
     * The descriptive name of the vCenter's datacenter this VM is contained in.
     */
    datacenterDescription?: string;
    /**
     * The id of the vCenter's datacenter this VM is contained in.
     */
    datacenterId?: string;
    /**
     * The number of disks the VM has.
     */
    diskCount?: number;
    /**
     * The display name of the VM. Note that this is not necessarily unique.
     */
    displayName?: string;
    /**
     * The VM's OS. See for example https://vdc-repo.vmware.com/vmwb-repository/dcr-public/da47f910-60ac-438b-8b9b-6122f4d14524/16b7274a-bf8b-4b4c-a05e-746f2aa93c8c/doc/vim.vm.GuestOsDescriptor.GuestOsIdentifier.html for types of strings this might hold.
     */
    guestDescription?: string;
    /**
     * The size of the memory of the VM in MB.
     */
    memoryMb?: number;
    /**
     * The power state of the VM at the moment list was taken.
     */
    powerState?: VmwareVmDetailsPowerStateEnum;
    /**
     * The unique identifier of the VM in vCenter.
     */
    uuid?: string;
    /**
     * The VM's id in the source (note that this is not the MigratingVm's id). This is the moref id of the VM.
     */
    vmId?: string;
}
