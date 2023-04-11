import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WindowsUpdateSettingsClassificationsEnum {
    ClassificationUnspecified = "CLASSIFICATION_UNSPECIFIED",
    Critical = "CRITICAL",
    Security = "SECURITY",
    Definition = "DEFINITION",
    Driver = "DRIVER",
    FeaturePack = "FEATURE_PACK",
    ServicePack = "SERVICE_PACK",
    Tool = "TOOL",
    UpdateRollup = "UPDATE_ROLLUP",
    Update = "UPDATE"
}
/**
 * Windows patching is performed using the Windows Update Agent.
 */
export declare class WindowsUpdateSettings extends SpeakeasyBase {
    /**
     * Only apply updates of these windows update classifications. If empty, all updates are applied.
     */
    classifications?: WindowsUpdateSettingsClassificationsEnum[];
    /**
     * List of KBs to exclude from update.
     */
    excludes?: string[];
    /**
     * An exclusive list of kbs to be updated. These are the only patches that will be updated. This field must not be used with other patch configurations.
     */
    exclusivePatches?: string[];
}
