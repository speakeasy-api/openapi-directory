import { SpeakeasyBase } from "../../../internal/utils";
import { MachinePreferences } from "./machinepreferences";
/**
 * License type to consider when calculating costs for virtual machine insights and recommendations. If unspecified, costs are calculated based on the default licensing plan.
 */
export declare enum ComputeEnginePreferencesLicenseTypeEnum {
    LicenseTypeUnspecified = "LICENSE_TYPE_UNSPECIFIED",
    LicenseTypeDefault = "LICENSE_TYPE_DEFAULT",
    LicenseTypeBringYourOwnLicense = "LICENSE_TYPE_BRING_YOUR_OWN_LICENSE"
}
/**
 * Persistent disk type to use. If unspecified (default), all types are considered, based on available usage data.
 */
export declare enum ComputeEnginePreferencesPersistentDiskTypeEnum {
    PersistentDiskTypeUnspecified = "PERSISTENT_DISK_TYPE_UNSPECIFIED",
    PersistentDiskTypeStandard = "PERSISTENT_DISK_TYPE_STANDARD",
    PersistentDiskTypeBalanced = "PERSISTENT_DISK_TYPE_BALANCED",
    PersistentDiskTypeSsd = "PERSISTENT_DISK_TYPE_SSD"
}
/**
 * The user preferences relating to Compute Engine target platform.
 */
export declare class ComputeEnginePreferences extends SpeakeasyBase {
    /**
     * License type to consider when calculating costs for virtual machine insights and recommendations. If unspecified, costs are calculated based on the default licensing plan.
     */
    licenseType?: ComputeEnginePreferencesLicenseTypeEnum;
    /**
     * The type of machines to consider when calculating virtual machine migration insights and recommendations. Not all machine types are available in all zones and regions.
     */
    machinePreferences?: MachinePreferences;
    /**
     * Persistent disk type to use. If unspecified (default), all types are considered, based on available usage data.
     */
    persistentDiskType?: ComputeEnginePreferencesPersistentDiskTypeEnum;
}
