import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Third-party URL type for in-stream video and in-stream audio creatives.
 */
export declare enum ThirdPartyTrackingUrlThirdPartyUrlTypeEnum {
    Impression = "IMPRESSION",
    ClickTracking = "CLICK_TRACKING",
    VideoStart = "VIDEO_START",
    VideoFirstQuartile = "VIDEO_FIRST_QUARTILE",
    VideoMidpoint = "VIDEO_MIDPOINT",
    VideoThirdQuartile = "VIDEO_THIRD_QUARTILE",
    VideoComplete = "VIDEO_COMPLETE",
    VideoMute = "VIDEO_MUTE",
    VideoPause = "VIDEO_PAUSE",
    VideoRewind = "VIDEO_REWIND",
    VideoFullscreen = "VIDEO_FULLSCREEN",
    VideoStop = "VIDEO_STOP",
    VideoCustom = "VIDEO_CUSTOM",
    Survey = "SURVEY",
    RichMediaImpression = "RICH_MEDIA_IMPRESSION",
    RichMediaRmImpression = "RICH_MEDIA_RM_IMPRESSION",
    RichMediaBackupImpression = "RICH_MEDIA_BACKUP_IMPRESSION",
    VideoSkip = "VIDEO_SKIP",
    VideoProgress = "VIDEO_PROGRESS"
}
/**
 * Third-party Tracking URL.
 */
export declare class ThirdPartyTrackingUrl extends SpeakeasyBase {
    /**
     * Third-party URL type for in-stream video and in-stream audio creatives.
     */
    thirdPartyUrlType?: ThirdPartyTrackingUrlThirdPartyUrlTypeEnum;
    /**
     * URL for the specified third-party URL type.
     */
    url?: string;
}
