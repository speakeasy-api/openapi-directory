import { SpeakeasyBase } from "../../../internal/utils";
import { Url } from "./url";
import { Urls } from "./urls";
import { VideoSizeDetails } from "./videosizedetails";
/**
 * Video asset information
 */
export declare class VideoAssets extends SpeakeasyBase {
    /**
     * Video asset information
     */
    fourk?: VideoSizeDetails;
    /**
     * Video asset information
     */
    hd?: VideoSizeDetails;
    /**
     * URL object
     */
    previewJpg?: Url;
    /**
     * URL object
     */
    previewMp4?: Url;
    /**
     * URL object
     */
    previewWebm?: Url;
    /**
     * Video asset information
     */
    sd?: VideoSizeDetails;
    /**
     * URL object
     */
    thumbJpg?: Url;
    /**
     * List of URLs
     */
    thumbJpgs?: Urls;
    /**
     * URL object
     */
    thumbMp4?: Url;
    /**
     * URL object
     */
    thumbWebm?: Url;
    /**
     * Video asset information
     */
    web?: VideoSizeDetails;
}
