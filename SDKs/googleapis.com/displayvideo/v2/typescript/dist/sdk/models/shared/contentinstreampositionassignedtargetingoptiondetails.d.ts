import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The ad type to target. Only applicable to insertion order targeting and new line items supporting the specified ad type will inherit this targeting option by default. Possible values are: * `AD_TYPE_VIDEO`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_VIDEO_DEFAULT`. * `AD_TYPE_AUDIO`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_AUDIO_DEFAULT`.
 */
export declare enum ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnum {
    AdTypeUnspecified = "AD_TYPE_UNSPECIFIED",
    AdTypeDisplay = "AD_TYPE_DISPLAY",
    AdTypeVideo = "AD_TYPE_VIDEO",
    AdTypeAudio = "AD_TYPE_AUDIO"
}
/**
 * The content instream position for video or audio ads. Output only in v1. Required in v2.
 */
export declare enum ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum {
    ContentInstreamPositionUnspecified = "CONTENT_INSTREAM_POSITION_UNSPECIFIED",
    ContentInstreamPositionPreRoll = "CONTENT_INSTREAM_POSITION_PRE_ROLL",
    ContentInstreamPositionMidRoll = "CONTENT_INSTREAM_POSITION_MID_ROLL",
    ContentInstreamPositionPostRoll = "CONTENT_INSTREAM_POSITION_POST_ROLL",
    ContentInstreamPositionUnknown = "CONTENT_INSTREAM_POSITION_UNKNOWN"
}
/**
 * Assigned content instream position targeting option details. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`.
 */
export declare class ContentInstreamPositionAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Output only. The ad type to target. Only applicable to insertion order targeting and new line items supporting the specified ad type will inherit this targeting option by default. Possible values are: * `AD_TYPE_VIDEO`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_VIDEO_DEFAULT`. * `AD_TYPE_AUDIO`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_AUDIO_DEFAULT`.
     */
    adType?: ContentInstreamPositionAssignedTargetingOptionDetailsAdTypeEnum;
    /**
     * The content instream position for video or audio ads. Output only in v1. Required in v2.
     */
    contentInstreamPosition?: ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum;
}
/**
 * Assigned content instream position targeting option details. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`.
 */
export declare class ContentInstreamPositionAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    /**
     * The content instream position for video or audio ads. Output only in v1. Required in v2.
     */
    contentInstreamPosition?: ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum;
}
