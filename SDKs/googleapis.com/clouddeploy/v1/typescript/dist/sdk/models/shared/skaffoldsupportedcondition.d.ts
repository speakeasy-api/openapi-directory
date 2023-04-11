import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The skaffold support state for this release's version of skaffold.
 */
export declare enum SkaffoldSupportedConditionSkaffoldSupportStateEnum {
    SkaffoldSupportStateUnspecified = "SKAFFOLD_SUPPORT_STATE_UNSPECIFIED",
    SkaffoldSupportStateSupported = "SKAFFOLD_SUPPORT_STATE_SUPPORTED",
    SkaffoldSupportStateMaintenanceMode = "SKAFFOLD_SUPPORT_STATE_MAINTENANCE_MODE",
    SkaffoldSupportStateUnsupported = "SKAFFOLD_SUPPORT_STATE_UNSUPPORTED"
}
/**
 * SkaffoldSupportedCondition contains information about when support for the release's version of skaffold ends.
 */
export declare class SkaffoldSupportedCondition extends SpeakeasyBase {
    /**
     * The time at which this release's version of skaffold will enter maintenance mode.
     */
    maintenanceModeTime?: string;
    /**
     * The skaffold support state for this release's version of skaffold.
     */
    skaffoldSupportState?: SkaffoldSupportedConditionSkaffoldSupportStateEnum;
    /**
     * True if the version of skaffold used by this release is supported.
     */
    status?: boolean;
    /**
     * The time at which this release's version of skaffold will no longer be supported.
     */
    supportExpirationTime?: string;
}
