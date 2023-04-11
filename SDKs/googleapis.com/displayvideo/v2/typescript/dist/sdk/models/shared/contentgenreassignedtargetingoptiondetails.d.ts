import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details for content genre assigned targeting option. This will be populated in the content_genre_details field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`. Explicitly targeting all options is not supported. Remove all content genre targeting options to achieve this effect.
 */
export declare class ContentGenreAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Output only. The display name of the content genre.
     */
    displayName?: string;
    /**
     * Indicates if this option is being negatively targeted.
     */
    negative?: boolean;
    /**
     * Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`.
     */
    targetingOptionId?: string;
}
/**
 * Details for content genre assigned targeting option. This will be populated in the content_genre_details field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`. Explicitly targeting all options is not supported. Remove all content genre targeting options to achieve this effect.
 */
export declare class ContentGenreAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    /**
     * Indicates if this option is being negatively targeted.
     */
    negative?: boolean;
    /**
     * Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`.
     */
    targetingOptionId?: string;
}
