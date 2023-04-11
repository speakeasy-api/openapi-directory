import { SpeakeasyBase } from "../../../internal/utils";
import { AppliedLicense } from "./appliedlicense";
import { ComputeScheduling } from "./computescheduling";
import { NetworkInterface } from "./networkinterface";
/**
 * The VM Boot Option, as set in the source vm.
 */
export declare enum ComputeEngineTargetDetailsBootOptionEnum {
    ComputeEngineBootOptionUnspecified = "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED",
    ComputeEngineBootOptionEfi = "COMPUTE_ENGINE_BOOT_OPTION_EFI",
    ComputeEngineBootOptionBios = "COMPUTE_ENGINE_BOOT_OPTION_BIOS"
}
/**
 * The disk type to use in the VM.
 */
export declare enum ComputeEngineTargetDetailsDiskTypeEnum {
    ComputeEngineDiskTypeUnspecified = "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED",
    ComputeEngineDiskTypeStandard = "COMPUTE_ENGINE_DISK_TYPE_STANDARD",
    ComputeEngineDiskTypeSsd = "COMPUTE_ENGINE_DISK_TYPE_SSD",
    ComputeEngineDiskTypeBalanced = "COMPUTE_ENGINE_DISK_TYPE_BALANCED"
}
/**
 * The license type to use in OS adaptation.
 */
export declare enum ComputeEngineTargetDetailsLicenseTypeEnum {
    ComputeEngineLicenseTypeDefault = "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT",
    ComputeEngineLicenseTypePayg = "COMPUTE_ENGINE_LICENSE_TYPE_PAYG",
    ComputeEngineLicenseTypeByol = "COMPUTE_ENGINE_LICENSE_TYPE_BYOL"
}
/**
 * ComputeEngineTargetDetails is a collection of details for creating a VM in a target Compute Engine project.
 */
export declare class ComputeEngineTargetDetails extends SpeakeasyBase {
    /**
     * Additional licenses to assign to the VM.
     */
    additionalLicenses?: string[];
    /**
     * AppliedLicense holds the license data returned by adaptation module report.
     */
    appliedLicense?: AppliedLicense;
    /**
     * The VM Boot Option, as set in the source vm.
     */
    bootOption?: ComputeEngineTargetDetailsBootOptionEnum;
    /**
     * Scheduling information for VM on maintenance/restart behaviour and node allocation in sole tenant nodes.
     */
    computeScheduling?: ComputeScheduling;
    /**
     * The disk type to use in the VM.
     */
    diskType?: ComputeEngineTargetDetailsDiskTypeEnum;
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
    licenseType?: ComputeEngineTargetDetailsLicenseTypeEnum;
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
     * The Google Cloud target project ID or project name.
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
     * The name of the VM to create.
     */
    vmName?: string;
    /**
     * The zone in which to create the VM.
     */
    zone?: string;
}
