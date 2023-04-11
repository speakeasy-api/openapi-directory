import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VideoTargetingExcludedPositionTypesEnum {
    PositionTypeUnspecified = "POSITION_TYPE_UNSPECIFIED",
    Preroll = "PREROLL",
    Midroll = "MIDROLL",
    Postroll = "POSTROLL"
}
export declare enum VideoTargetingTargetedPositionTypesEnum {
    PositionTypeUnspecified = "POSITION_TYPE_UNSPECIFIED",
    Preroll = "PREROLL",
    Midroll = "MIDROLL",
    Postroll = "POSTROLL"
}
/**
 * Represents targeting information about video.
 */
export declare class VideoTargeting extends SpeakeasyBase {
    /**
     * A list of video positions to be excluded. When this field is populated, the targeted_position_types field must be empty.
     */
    excludedPositionTypes?: VideoTargetingExcludedPositionTypesEnum[];
    /**
     * A list of video positions to be included. When this field is populated, the excluded_position_types field must be empty.
     */
    targetedPositionTypes?: VideoTargetingTargetedPositionTypesEnum[];
}
