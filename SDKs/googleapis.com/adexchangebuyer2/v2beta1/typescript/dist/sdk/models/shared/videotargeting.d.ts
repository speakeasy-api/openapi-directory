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
     * A list of video positions to be excluded. Position types can either be included or excluded (XOR).
     */
    excludedPositionTypes?: VideoTargetingExcludedPositionTypesEnum[];
    /**
     * A list of video positions to be included. When the included list is present, the excluded list must be empty. When the excluded list is present, the included list must be empty.
     */
    targetedPositionTypes?: VideoTargetingTargetedPositionTypesEnum[];
}
