import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The serving environment. Output only in v1. Required in v2.
 */
export declare enum EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum {
    EnvironmentUnspecified = "ENVIRONMENT_UNSPECIFIED",
    EnvironmentWebOptimized = "ENVIRONMENT_WEB_OPTIMIZED",
    EnvironmentWebNotOptimized = "ENVIRONMENT_WEB_NOT_OPTIMIZED",
    EnvironmentApp = "ENVIRONMENT_APP"
}
/**
 * Assigned environment targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_ENVIRONMENT`.
 */
export declare class EnvironmentAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * The serving environment. Output only in v1. Required in v2.
     */
    environment?: EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum;
}
