import { SpeakeasyBase } from "../../../internal/utils";
import { AppliedLicense } from "./appliedlicense";
import { ComputeScheduling } from "./computescheduling";
import { NetworkInterface } from "./networkinterface";
/**
 * Output only. The VM Boot Option, as set in the source vm.
 */
export declare enum ComputeEngineTargetDefaultsBootOptionEnum {
    ComputeEngineBootOptionUnspecified = "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED",
    ComputeEngineBootOptionEfi = "COMPUTE_ENGINE_BOOT_OPTION_EFI",
    ComputeEngineBootOptionBios = "COMPUTE_ENGINE_BOOT_OPTION_BIOS"
}
/**
 * The disk type to use in the VM.
 */
export declare enum ComputeEngineTargetDefaultsDiskTypeEnum {
    ComputeEngineDiskTypeUnspecified = "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED",
    ComputeEngineDiskTypeStandard = "COMPUTE_ENGINE_DISK_TYPE_STANDARD",
    ComputeEngineDiskTypeSsd = "COMPUTE_ENGINE_DISK_TYPE_SSD",
    ComputeEngineDiskTypeBalanced = "COMPUTE_ENGINE_DISK_TYPE_BALANCED"
}
/**
 * The license type to use in OS adaptation.
 */
export declare enum ComputeEngineTargetDefaultsLicenseTypeEnum {
    ComputeEngineLicenseTypeDefault = "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT",
    ComputeEngineLicenseTypePayg = "COMPUTE_ENGINE_LICENSE_TYPE_PAYG",
    ComputeEngineLicenseTypeByol = "COMPUTE_ENGINE_LICENSE_TYPE_BYOL"
}
/**
 * ComputeEngineTargetDefaults is a collection of details for creating a VM in a target Compute Engine project.
 */
export declare class ComputeEngineTargetDefaults extends SpeakeasyBase {
    /**
     * Additional licenses to assign to the VM.
     */
    additionalLicenses?: string[];
    /**
     * AppliedLicense holds the license data returned by adaptation module report.
     */
    appliedLicense?: AppliedLicense;
    /**
     * Output only. The VM Boot Option, as set in the source vm.
     */
    bootOption?: ComputeEngineTargetDefaultsBootOptionEnum;
    /**
     * Scheduling information for VM on maintenance/restart behaviour and node allocation in sole tenant nodes.
     */
    computeScheduling?: ComputeScheduling;
    /**
     * The disk type to use in the VM.
     */
    diskType?: ComputeEngineTargetDefaultsDiskTypeEnum;
    /**
     * The hostname to assign to the VM.
     */
    hostname?: string;
    /**
     * A map of labels to associate with the VM.
     */
    labels?: Record<string, string>;
    /**
     * The license type to use in OS adaptation.
     */
    licenseType?: ComputeEngineTargetDefaultsLicenseTypeEnum;
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
     * The full path of the resource of type TargetProject which represents the Compute Engine project in which to create this VM.
     */
    targetProject?: string;
    /**
     * The name of the VM to create.
     */
    vmName?: string;
    /**
     * The zone in which to create the VM.
     */
    zone?: string;
}
/**
 * ComputeEngineTargetDefaults is a collection of details for creating a VM in a target Compute Engine project.
 */
export declare class ComputeEngineTargetDefaultsInput extends SpeakeasyBase {
    /**
     * Additional licenses to assign to the VM.
     */
    additionalLicenses?: string[];
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
    diskType?: ComputeEngineTargetDefaultsDiskTypeEnum;
    /**
     * The hostname to assign to the VM.
     */
    hostname?: string;
    /**
     * A map of labels to associate with the VM.
     */
    labels?: Record<string, string>;
    /**
     * The license type to use in OS adaptation.
     */
    licenseType?: ComputeEngineTargetDefaultsLicenseTypeEnum;
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
     * The full path of the resource of type TargetProject which represents the Compute Engine project in which to create this VM.
     */
    targetProject?: string;
    /**
     * The name of the VM to create.
     */
    vmName?: string;
    /**
     * The zone in which to create the VM.
     */
    zone?: string;
}
