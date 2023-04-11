import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Scope specifies the upgrade scope which upgrades are blocked by the exclusion.
 */
export declare enum MaintenanceExclusionOptionsScopeEnum {
    NoUpgrades = "NO_UPGRADES",
    NoMinorUpgrades = "NO_MINOR_UPGRADES",
    NoMinorOrNodeUpgrades = "NO_MINOR_OR_NODE_UPGRADES"
}
/**
 * Represents the Maintenance exclusion option.
 */
export declare class MaintenanceExclusionOptions extends SpeakeasyBase {
    /**
     * Scope specifies the upgrade scope which upgrades are blocked by the exclusion.
     */
    scope?: MaintenanceExclusionOptionsScopeEnum;
}
