import { SpeakeasyBase } from "../../../internal/utils";
import { AwsSecurityGroup } from "./awssecuritygroup";
/**
 * The CPU architecture.
 */
export declare enum AwsVmDetailsArchitectureEnum {
    VmArchitectureUnspecified = "VM_ARCHITECTURE_UNSPECIFIED",
    I386 = "I386",
    X8664 = "X86_64",
    Arm64 = "ARM64",
    X8664Mac = "X86_64_MAC"
}
/**
 * The VM Boot Option.
 */
export declare enum AwsVmDetailsBootOptionEnum {
    BootOptionUnspecified = "BOOT_OPTION_UNSPECIFIED",
    Efi = "EFI",
    Bios = "BIOS"
}
/**
 * Output only. The power state of the VM at the moment list was taken.
 */
export declare enum AwsVmDetailsPowerStateEnum {
    PowerStateUnspecified = "POWER_STATE_UNSPECIFIED",
    On = "ON",
    Off = "OFF",
    Suspended = "SUSPENDED",
    Pending = "PENDING"
}
/**
 * The virtualization type.
 */
export declare enum AwsVmDetailsVirtualizationTypeEnum {
    VmVirtualizationTypeUnspecified = "VM_VIRTUALIZATION_TYPE_UNSPECIFIED",
    Hvm = "HVM",
    Paravirtual = "PARAVIRTUAL"
}
/**
 * AwsVmDetails describes a VM in AWS.
 */
export declare class AwsVmDetails extends SpeakeasyBase {
    /**
     * The CPU architecture.
     */
    architecture?: AwsVmDetailsArchitectureEnum;
    /**
     * The VM Boot Option.
     */
    bootOption?: AwsVmDetailsBootOptionEnum;
    /**
     * The total size of the storage allocated to the VM in MB.
     */
    committedStorageMb?: string;
    /**
     * The number of cpus the VM has.
     */
    cpuCount?: number;
    /**
     * The number of disks the VM has.
     */
    diskCount?: number;
    /**
     * The display name of the VM. Note that this value is not necessarily unique.
     */
    displayName?: string;
    /**
     * The instance type of the VM.
     */
    instanceType?: string;
    /**
     * The memory size of the VM in MB.
     */
    memoryMb?: number;
    /**
     * The VM's OS.
     */
    osDescription?: string;
    /**
     * Output only. The power state of the VM at the moment list was taken.
     */
    powerState?: AwsVmDetailsPowerStateEnum;
    /**
     * The security groups the VM belongs to.
     */
    securityGroups?: AwsSecurityGroup[];
    /**
     * The descriptive name of the AWS's source this VM is connected to.
     */
    sourceDescription?: string;
    /**
     * The id of the AWS's source this VM is connected to.
     */
    sourceId?: string;
    /**
     * The tags of the VM.
     */
    tags?: Record<string, string>;
    /**
     * The virtualization type.
     */
    virtualizationType?: AwsVmDetailsVirtualizationTypeEnum;
    /**
     * The VM ID in AWS.
     */
    vmId?: string;
    /**
     * The VPC ID the VM belongs to.
     */
    vpcId?: string;
    /**
     * The AWS zone of the VM.
     */
    zone?: string;
}
