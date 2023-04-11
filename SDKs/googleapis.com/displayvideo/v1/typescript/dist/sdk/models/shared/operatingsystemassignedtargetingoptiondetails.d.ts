import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Assigned operating system targeting option details. This will be populated in the operating_system_details field when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`.
 */
export declare class OperatingSystemAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Output only. The display name of the operating system.
     */
    displayName?: string;
    /**
     * Indicates if this option is being negatively targeted.
     */
    negative?: boolean;
    /**
     * Required. The targeting option ID populated in targeting_option_id field when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`.
     */
    targetingOptionId?: string;
}
/**
 * Assigned operating system targeting option details. This will be populated in the operating_system_details field when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`.
 */
export declare class OperatingSystemAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    /**
     * Indicates if this option is being negatively targeted.
     */
    negative?: boolean;
    /**
     * Required. The targeting option ID populated in targeting_option_id field when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`.
     */
    targetingOptionId?: string;
}
