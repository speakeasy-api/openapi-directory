import { SpeakeasyBase } from "../../../internal/utils";
import { VideoAdSequenceStep } from "./videoadsequencestep";
/**
 * The minimum time interval before the same user sees this sequence again.
 */
export declare enum VideoAdSequenceSettingsMinimumDurationEnum {
    VideoAdSequenceMinimumDurationUnspecified = "VIDEO_AD_SEQUENCE_MINIMUM_DURATION_UNSPECIFIED",
    VideoAdSequenceMinimumDurationWeek = "VIDEO_AD_SEQUENCE_MINIMUM_DURATION_WEEK",
    VideoAdSequenceMinimumDurationMonth = "VIDEO_AD_SEQUENCE_MINIMUM_DURATION_MONTH"
}
/**
 * Settings related to VideoAdSequence.
 */
export declare class VideoAdSequenceSettings extends SpeakeasyBase {
    /**
     * The minimum time interval before the same user sees this sequence again.
     */
    minimumDuration?: VideoAdSequenceSettingsMinimumDurationEnum;
    /**
     * The steps of which the sequence consists.
     */
    steps?: VideoAdSequenceStep[];
}
