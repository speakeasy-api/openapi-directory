import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Assigned category targeting option details. This will be populated in the category_details field when targeting_type is `TARGETING_TYPE_CATEGORY`.
 */
export declare class CategoryAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Output only. The display name of the category.
     */
    displayName?: string;
    /**
     * Indicates if this option is being negatively targeted.
     */
    negative?: boolean;
    /**
     * Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_CATEGORY`.
     */
    targetingOptionId?: string;
}
/**
 * Assigned category targeting option details. This will be populated in the category_details field when targeting_type is `TARGETING_TYPE_CATEGORY`.
 */
export declare class CategoryAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    /**
     * Indicates if this option is being negatively targeted.
     */
    negative?: boolean;
    /**
     * Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_CATEGORY`.
     */
    targetingOptionId?: string;
}
