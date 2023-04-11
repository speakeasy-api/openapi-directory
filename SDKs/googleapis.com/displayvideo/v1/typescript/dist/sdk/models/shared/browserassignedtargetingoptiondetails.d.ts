import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details for assigned browser targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BROWSER`.
 */
export declare class BrowserAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Output only. The display name of the browser.
     */
    displayName?: string;
    /**
     * Indicates if this option is being negatively targeted. All assigned browser targeting options on the same resource must have the same value for this field.
     */
    negative?: boolean;
    /**
     * Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_BROWSER`.
     */
    targetingOptionId?: string;
}
/**
 * Details for assigned browser targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BROWSER`.
 */
export declare class BrowserAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    /**
     * Indicates if this option is being negatively targeted. All assigned browser targeting options on the same resource must have the same value for this field.
     */
    negative?: boolean;
    /**
     * Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_BROWSER`.
     */
    targetingOptionId?: string;
}
