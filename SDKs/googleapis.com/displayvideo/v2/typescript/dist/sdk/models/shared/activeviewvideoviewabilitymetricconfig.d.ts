import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The minimum visible video duration required (in seconds) in order for an impression to be recorded. You must specify minimum_duration, minimum_quartile or both. If both are specified, an impression meets the metric criteria if either requirement is met (whichever happens first).
 */
export declare enum ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum {
    VideoDurationUnspecified = "VIDEO_DURATION_UNSPECIFIED",
    VideoDurationSecondsNone = "VIDEO_DURATION_SECONDS_NONE",
    VideoDurationSeconds0 = "VIDEO_DURATION_SECONDS_0",
    VideoDurationSeconds1 = "VIDEO_DURATION_SECONDS_1",
    VideoDurationSeconds2 = "VIDEO_DURATION_SECONDS_2",
    VideoDurationSeconds3 = "VIDEO_DURATION_SECONDS_3",
    VideoDurationSeconds4 = "VIDEO_DURATION_SECONDS_4",
    VideoDurationSeconds5 = "VIDEO_DURATION_SECONDS_5",
    VideoDurationSeconds6 = "VIDEO_DURATION_SECONDS_6",
    VideoDurationSeconds7 = "VIDEO_DURATION_SECONDS_7",
    VideoDurationSeconds8 = "VIDEO_DURATION_SECONDS_8",
    VideoDurationSeconds9 = "VIDEO_DURATION_SECONDS_9",
    VideoDurationSeconds10 = "VIDEO_DURATION_SECONDS_10",
    VideoDurationSeconds11 = "VIDEO_DURATION_SECONDS_11",
    VideoDurationSeconds12 = "VIDEO_DURATION_SECONDS_12",
    VideoDurationSeconds13 = "VIDEO_DURATION_SECONDS_13",
    VideoDurationSeconds14 = "VIDEO_DURATION_SECONDS_14",
    VideoDurationSeconds15 = "VIDEO_DURATION_SECONDS_15",
    VideoDurationSeconds30 = "VIDEO_DURATION_SECONDS_30",
    VideoDurationSeconds45 = "VIDEO_DURATION_SECONDS_45",
    VideoDurationSeconds60 = "VIDEO_DURATION_SECONDS_60"
}
/**
 * The minimum visible video duration required, based on the video quartiles, in order for an impression to be recorded. You must specify minimum_duration, minimum_quartile or both. If both are specified, an impression meets the metric criteria if either requirement is met (whichever happens first).
 */
export declare enum ActiveViewVideoViewabilityMetricConfigMinimumQuartileEnum {
    VideoDurationQuartileUnspecified = "VIDEO_DURATION_QUARTILE_UNSPECIFIED",
    VideoDurationQuartileNone = "VIDEO_DURATION_QUARTILE_NONE",
    VideoDurationQuartileFirst = "VIDEO_DURATION_QUARTILE_FIRST",
    VideoDurationQuartileSecond = "VIDEO_DURATION_QUARTILE_SECOND",
    VideoDurationQuartileThird = "VIDEO_DURATION_QUARTILE_THIRD",
    VideoDurationQuartileFourth = "VIDEO_DURATION_QUARTILE_FOURTH"
}
/**
 * Required. The minimum percentage of the video ad's pixels visible on the screen in order for an impression to be recorded.
 */
export declare enum ActiveViewVideoViewabilityMetricConfigMinimumViewabilityEnum {
    ViewabilityPercentUnspecified = "VIEWABILITY_PERCENT_UNSPECIFIED",
    ViewabilityPercent0 = "VIEWABILITY_PERCENT_0",
    ViewabilityPercent25 = "VIEWABILITY_PERCENT_25",
    ViewabilityPercent50 = "VIEWABILITY_PERCENT_50",
    ViewabilityPercent75 = "VIEWABILITY_PERCENT_75",
    ViewabilityPercent100 = "VIEWABILITY_PERCENT_100"
}
/**
 * Required. The minimum percentage of the video ad's volume required in order for an impression to be recorded.
 */
export declare enum ActiveViewVideoViewabilityMetricConfigMinimumVolumeEnum {
    VideoVolumePercentUnspecified = "VIDEO_VOLUME_PERCENT_UNSPECIFIED",
    VideoVolumePercent0 = "VIDEO_VOLUME_PERCENT_0",
    VideoVolumePercent10 = "VIDEO_VOLUME_PERCENT_10"
}
/**
 * Configuration for custom Active View video viewability metrics.
 */
export declare class ActiveViewVideoViewabilityMetricConfig extends SpeakeasyBase {
    /**
     * Required. The display name of the custom metric.
     */
    displayName?: string;
    /**
     * The minimum visible video duration required (in seconds) in order for an impression to be recorded. You must specify minimum_duration, minimum_quartile or both. If both are specified, an impression meets the metric criteria if either requirement is met (whichever happens first).
     */
    minimumDuration?: ActiveViewVideoViewabilityMetricConfigMinimumDurationEnum;
    /**
     * The minimum visible video duration required, based on the video quartiles, in order for an impression to be recorded. You must specify minimum_duration, minimum_quartile or both. If both are specified, an impression meets the metric criteria if either requirement is met (whichever happens first).
     */
    minimumQuartile?: ActiveViewVideoViewabilityMetricConfigMinimumQuartileEnum;
    /**
     * Required. The minimum percentage of the video ad's pixels visible on the screen in order for an impression to be recorded.
     */
    minimumViewability?: ActiveViewVideoViewabilityMetricConfigMinimumViewabilityEnum;
    /**
     * Required. The minimum percentage of the video ad's volume required in order for an impression to be recorded.
     */
    minimumVolume?: ActiveViewVideoViewabilityMetricConfigMinimumVolumeEnum;
}
