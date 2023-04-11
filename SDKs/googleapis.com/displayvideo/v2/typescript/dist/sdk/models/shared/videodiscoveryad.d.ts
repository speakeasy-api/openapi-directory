import { SpeakeasyBase } from "../../../internal/utils";
import { YoutubeVideoDetails } from "./youtubevideodetails";
/**
 * Thumbnail image used in the ad.
 */
export declare enum VideoDiscoveryAdThumbnailEnum {
    ThumbnailUnspecified = "THUMBNAIL_UNSPECIFIED",
    ThumbnailDefault = "THUMBNAIL_DEFAULT",
    Thumbnail1 = "THUMBNAIL_1",
    Thumbnail2 = "THUMBNAIL_2",
    Thumbnail3 = "THUMBNAIL_3"
}
/**
 * Details for a video discovery ad.
 */
export declare class VideoDiscoveryAd extends SpeakeasyBase {
    /**
     * First text line for the ad.
     */
    description1?: string;
    /**
     * Second text line for the ad.
     */
    description2?: string;
    /**
     * The headline of ad.
     */
    headline?: string;
    /**
     * Thumbnail image used in the ad.
     */
    thumbnail?: VideoDiscoveryAdThumbnailEnum;
    /**
     * Details of a YouTube video.
     */
    video?: YoutubeVideoDetails;
}
