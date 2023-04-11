import { SpeakeasyBase } from "../../../internal/utils";
import { AccessPolicy } from "./accesspolicy";
import { ContentRating } from "./contentrating";
import { VideoContentDetailsRegionRestriction } from "./videocontentdetailsregionrestriction";
/**
 * The value of captions indicates whether the video has captions or not.
 */
export declare enum VideoContentDetailsCaptionEnum {
    True = "true",
    False = "false"
}
/**
 * The value of definition indicates whether the video is available in high definition or only in standard definition.
 */
export declare enum VideoContentDetailsDefinitionEnum {
    Sd = "sd",
    Hd = "hd"
}
/**
 * Specifies the projection format of the video.
 */
export declare enum VideoContentDetailsProjectionEnum {
    Rectangular = "rectangular",
    ThreeHundredAndSixty = "360"
}
/**
 * Details about the content of a YouTube Video.
 */
export declare class VideoContentDetails extends SpeakeasyBase {
    /**
     * The value of captions indicates whether the video has captions or not.
     */
    caption?: VideoContentDetailsCaptionEnum;
    /**
     * Ratings schemes. The country-specific ratings are mostly for movies and shows. LINT.IfChange
     */
    contentRating?: ContentRating;
    /**
     * Rights management policy for YouTube resources.
     */
    countryRestriction?: AccessPolicy;
    /**
     * The value of definition indicates whether the video is available in high definition or only in standard definition.
     */
    definition?: VideoContentDetailsDefinitionEnum;
    /**
     * The value of dimension indicates whether the video is available in 3D or in 2D.
     */
    dimension?: string;
    /**
     * The length of the video. The tag value is an ISO 8601 duration in the format PT#M#S, in which the letters PT indicate that the value specifies a period of time, and the letters M and S refer to length in minutes and seconds, respectively. The # characters preceding the M and S letters are both integers that specify the number of minutes (or seconds) of the video. For example, a value of PT15M51S indicates that the video is 15 minutes and 51 seconds long.
     */
    duration?: string;
    /**
     * Indicates whether the video uploader has provided a custom thumbnail image for the video. This property is only visible to the video uploader.
     */
    hasCustomThumbnail?: boolean;
    /**
     * The value of is_license_content indicates whether the video is licensed content.
     */
    licensedContent?: boolean;
    /**
     * Specifies the projection format of the video.
     */
    projection?: VideoContentDetailsProjectionEnum;
    /**
     * DEPRECATED Region restriction of the video.
     */
    regionRestriction?: VideoContentDetailsRegionRestriction;
}
