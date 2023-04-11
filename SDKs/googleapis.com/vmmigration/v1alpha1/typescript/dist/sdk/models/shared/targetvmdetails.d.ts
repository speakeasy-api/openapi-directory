import { SpeakeasyBase } from "../../../internal/utils";
import { AppliedLicense } from "./appliedlicense";
import { ComputeScheduling } from "./computescheduling";
import { NetworkInterface } from "./networkinterface";
/**
 * Output only. The VM Boot Option, as set in the source vm.
 */
export declare enum TargetVMDetailsBootOptionEnum {
    BootOptionUnspecified = "BOOT_OPTION_UNSPECIFIED",
    Efi = "EFI",
    Bios = "BIOS"
}
/**
 * The disk type to use in the VM.
 */
export declare enum TargetVMDetailsDiskTypeEnum {
    DiskTypeUnspecified = "DISK_TYPE_UNSPECIFIED",
    Standard = "STANDARD",
    Balanced = "BALANCED",
    Ssd = "SSD"
}
/**
 * The license type to use in OS adaptation.
 */
export declare enum TargetVMDetailsLicenseTypeEnum {
    Default = "DEFAULT",
    Payg = "PAYG",
    Byol = "BYOL"
}
/**
 * TargetVMDetails is a collection of details for creating a VM in a target Compute Engine project.
 */
export declare class TargetVMDetails extends SpeakeasyBase {
    /**
     * AppliedLicense holds the license data returned by adaptation module report.
     */
    appliedLicense?: AppliedLicense;
    /**
     * Output only. The VM Boot Option, as set in the source vm.
     */
    bootOption?: TargetVMDetailsBootOptionEnum;
    /**
     * Scheduling information for VM on maintenance/restart behaviour and node allocation in sole tenant nodes.
     */
    computeScheduling?: ComputeScheduling;
    /**
     * The disk type to use in the VM.
     */
    diskType?: TargetVMDetailsDiskTypeEnum;
    /**
     * The external IP to define in the VM.
     */
    externalIp?: string;
    /**
     * The internal IP to define in the VM. The formats accepted are: `ephemeral` \ ipv4 address \ a named address resource full path.
     */
    internalIp?: string;
    /**
     * A map of labels to associate with the VM.
     */
    labels?: Record<string, string>;
    /**
     * The license type to use in OS adaptation.
     */
    licenseType?: TargetVMDetailsLicenseTypeEnum;
    /**
     * The machine type to create the VM with.
     */
    machineType?: string;
    /**
     * The machine type series to create the VM with.
     */
    machineTypeSeries?: string;
    /**
     * The metadata key/value pairs to assign to the VM.
     */
    metadata?: Record<string, string>;
    /**
     * The name of the VM to create.
     */
    name?: string;
    /**
     * The network to connect the VM to.
     */
    network?: string;
    /**
     * List of NICs connected to this VM.
     */
    networkInterfaces?: NetworkInterface[];
    /**
     * A map of network tags to associate with the VM.
     */
    networkTags?: string[];
    /**
     * Output only. The project in which to create the VM.
     */
    project?: string;
    /**
     * Defines whether the instance has Secure Boot enabled. This can be set to true only if the vm boot option is EFI.
     */
    secureBoot?: boolean;
    /**
     * The service account to associate the VM with.
     */
    serviceAccount?: string;
    /**
     * The subnetwork to connect the VM to.
     */
    subnetwork?: string;
    /**
     * The full path of the resource of type TargetProject which represents the Compute Engine project in which to create this VM.
     */
    targetProject?: string;
    /**
     * The zone in which to create the VM.
     */
    zone?: string;
}
/**
 * TargetVMDetails is a collection of details for creating a VM in a target Compute Engine project.
 */
export declare class TargetVMDetailsInput extends SpeakeasyBase {
    /**
     * AppliedLicense holds the license data returned by adaptation module report.
     */
    appliedLicense?: AppliedLicense;
    /**
     * Scheduling information for VM on maintenance/restart behaviour and node allocation in sole tenant nodes.
     */
    computeScheduling?: ComputeScheduling;
    /**
     * The disk type to use in the VM.
     */
    diskType?: TargetVMDetailsDiskTypeEnum;
    /**
     * The external IP to define in the VM.
     */
    externalIp?: string;
    /**
     * The internal IP to define in the VM. The formats accepted are: `ephemeral` \ ipv4 address \ a named address resource full path.
     */
    internalIp?: string;
    /**
     * A map of labels to associate with the VM.
     */
    labels?: Record<string, string>;
    /**
     * The license type to use in OS adaptation.
     */
    licenseType?: TargetVMDetailsLicenseTypeEnum;
    /**
     * The machine type to create the VM with.
     */
    machineType?: string;
    /**
     * The machine type series to create the VM with.
     */
    machineTypeSeries?: string;
    /**
     * The metadata key/value pairs to assign to the VM.
     */
    metadata?: Record<string, string>;
    /**
     * The name of the VM to create.
     */
    name?: string;
    /**
     * The network to connect the VM to.
     */
    network?: string;
    /**
     * List of NICs connected to this VM.
     */
    networkInterfaces?: NetworkInterface[];
    /**
     * A map of network tags to associate with the VM.
     */
    networkTags?: string[];
    /**
     * Defines whether the instance has Secure Boot enabled. This can be set to true only if the vm boot option is EFI.
     */
    secureBoot?: boolean;
    /**
     * The service account to associate the VM with.
     */
    serviceAccount?: string;
    /**
     * The subnetwork to connect the VM to.
     */
    subnetwork?: string;
    /**
     * The full path of the resource of type TargetProject which represents the Compute Engine project in which to create this VM.
     */
    targetProject?: string;
    /**
     * The zone in which to create the VM.
     */
    zone?: string;
}
