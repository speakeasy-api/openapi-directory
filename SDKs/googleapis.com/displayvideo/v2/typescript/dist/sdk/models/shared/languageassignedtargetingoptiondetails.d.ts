import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details for assigned language targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_LANGUAGE`.
 */
export declare class LanguageAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Output only. The display name of the language (e.g., "French").
     */
    displayName?: string;
    /**
     * Indicates if this option is being negatively targeted. All assigned language targeting options on the same resource must have the same value for this field.
     */
    negative?: boolean;
    /**
     * Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_LANGUAGE`.
     */
    targetingOptionId?: string;
}
/**
 * Details for assigned language targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_LANGUAGE`.
 */
export declare class LanguageAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    /**
     * Indicates if this option is being negatively targeted. All assigned language targeting options on the same resource must have the same value for this field.
     */
    negative?: boolean;
    /**
     * Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_LANGUAGE`.
     */
    targetingOptionId?: string;
}
