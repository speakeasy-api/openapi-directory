import { SpeakeasyBase } from "../../../internal/utils";
import { YoutubeVideoDetails } from "./youtubevideodetails";
/**
 * The aspect ratio of the autoplaying YouTube video on the Masthead.
 */
export declare enum MastheadAdVideoAspectRatioEnum {
    VideoAspectRatioUnspecified = "VIDEO_ASPECT_RATIO_UNSPECIFIED",
    VideoAspectRatioWidescreen = "VIDEO_ASPECT_RATIO_WIDESCREEN",
    VideoAspectRatioFixed169 = "VIDEO_ASPECT_RATIO_FIXED_16_9"
}
/**
 * Details for a Masthead Ad.
 */
export declare class MastheadAd extends SpeakeasyBase {
    /**
     * The duration of time the video will autoplay.
     */
    autoplayVideoDuration?: string;
    /**
     * The amount of time in milliseconds after which the video will start to play.
     */
    autoplayVideoStartMillisecond?: string;
    /**
     * The text on the call-to-action button.
     */
    callToActionButtonLabel?: string;
    /**
     * The destination URL for the call-to-action button.
     */
    callToActionFinalUrl?: string;
    /**
     * The tracking URL for the call-to-action button.
     */
    callToActionTrackingUrl?: string;
    /**
     * The videos that appear next to the Masthead Ad on desktop. Can be no more than two.
     */
    companionYoutubeVideos?: YoutubeVideoDetails[];
    /**
     * The description of the ad.
     */
    description?: string;
    /**
     * The headline of the ad.
     */
    headline?: string;
    /**
     * Whether to show a background or banner that appears at the top of a YouTube page.
     */
    showChannelArt?: boolean;
    /**
     * Details of a YouTube video.
     */
    video?: YoutubeVideoDetails;
    /**
     * The aspect ratio of the autoplaying YouTube video on the Masthead.
     */
    videoAspectRatio?: MastheadAdVideoAspectRatioEnum;
}
