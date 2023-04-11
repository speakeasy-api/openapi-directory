import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The ad type to target. Only applicable to insertion order targeting and new line items supporting the specified ad type will inherit this targeting option by default. Possible values are: * `AD_TYPE_DISPLAY`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_DISPLAY_DEFAULT`. * `AD_TYPE_VIDEO`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_VIDEO_DEFAULT`.
 */
export declare enum ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnum {
    AdTypeUnspecified = "AD_TYPE_UNSPECIFIED",
    AdTypeDisplay = "AD_TYPE_DISPLAY",
    AdTypeVideo = "AD_TYPE_VIDEO",
    AdTypeAudio = "AD_TYPE_AUDIO"
}
/**
 * The content outstream position. Output only in v1. Required in v2.
 */
export declare enum ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum {
    ContentOutstreamPositionUnspecified = "CONTENT_OUTSTREAM_POSITION_UNSPECIFIED",
    ContentOutstreamPositionUnknown = "CONTENT_OUTSTREAM_POSITION_UNKNOWN",
    ContentOutstreamPositionInArticle = "CONTENT_OUTSTREAM_POSITION_IN_ARTICLE",
    ContentOutstreamPositionInBanner = "CONTENT_OUTSTREAM_POSITION_IN_BANNER",
    ContentOutstreamPositionInFeed = "CONTENT_OUTSTREAM_POSITION_IN_FEED",
    ContentOutstreamPositionInterstitial = "CONTENT_OUTSTREAM_POSITION_INTERSTITIAL"
}
/**
 * Assigned content outstream position targeting option details. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.
 */
export declare class ContentOutstreamPositionAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Output only. The ad type to target. Only applicable to insertion order targeting and new line items supporting the specified ad type will inherit this targeting option by default. Possible values are: * `AD_TYPE_DISPLAY`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_DISPLAY_DEFAULT`. * `AD_TYPE_VIDEO`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_VIDEO_DEFAULT`.
     */
    adType?: ContentOutstreamPositionAssignedTargetingOptionDetailsAdTypeEnum;
    /**
     * The content outstream position. Output only in v1. Required in v2.
     */
    contentOutstreamPosition?: ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum;
}
/**
 * Assigned content outstream position targeting option details. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.
 */
export declare class ContentOutstreamPositionAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    /**
     * The content outstream position. Output only in v1. Required in v2.
     */
    contentOutstreamPosition?: ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum;
}
