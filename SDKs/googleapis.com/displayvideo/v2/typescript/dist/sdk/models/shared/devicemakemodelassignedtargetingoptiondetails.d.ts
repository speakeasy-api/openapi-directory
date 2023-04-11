import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Assigned device make and model targeting option details. This will be populated in the device_make_model_details field when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`.
 */
export declare class DeviceMakeModelAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Output only. The display name of the device make and model.
     */
    displayName?: string;
    /**
     * Indicates if this option is being negatively targeted.
     */
    negative?: boolean;
    /**
     * Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`.
     */
    targetingOptionId?: string;
}
/**
 * Assigned device make and model targeting option details. This will be populated in the device_make_model_details field when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`.
 */
export declare class DeviceMakeModelAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    /**
     * Indicates if this option is being negatively targeted.
     */
    negative?: boolean;
    /**
     * Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`.
     */
    targetingOptionId?: string;
}
