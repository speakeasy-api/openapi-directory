import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details for assigned app category targeting option. This will be populated in the app_category_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP_CATEGORY`.
 */
export declare class AppCategoryAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Output only. The display name of the app category.
     */
    displayName?: string;
    /**
     * Indicates if this option is being negatively targeted.
     */
    negative?: boolean;
    /**
     * Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_APP_CATEGORY`.
     */
    targetingOptionId?: string;
}
/**
 * Details for assigned app category targeting option. This will be populated in the app_category_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP_CATEGORY`.
 */
export declare class AppCategoryAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    /**
     * Indicates if this option is being negatively targeted.
     */
    negative?: boolean;
    /**
     * Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_APP_CATEGORY`.
     */
    targetingOptionId?: string;
}
