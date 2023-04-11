import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { Contributor } from "./contributor";
import { Model } from "./model";
import { VideoAssets } from "./videoassets";
/**
 * Information about a video
 */
export declare class Video extends SpeakeasyBase {
    /**
     * Date this video was added to the Shutterstock library
     */
    addedDate?: Date;
    /**
     * Affiliate referral link; appears only for registered affiliate partners
     */
    affiliateUrl?: string;
    /**
     * Aspect ratio of this video in decimal format, such as 0.6667
     */
    aspect?: number;
    /**
     * Aspect ratio of the video as a ratio, such as 16:9
     */
    aspectRatio?: string;
    /**
     * Video asset information
     */
    assets?: VideoAssets;
    /**
     * List of categories
     */
    categories?: Category[];
    /**
     * Information about a contributor
     */
    contributor: Contributor;
    /**
     * Description of this video
     */
    description?: string;
    /**
     * Duration of this video, in seconds
     */
    duration?: number;
    /**
     * Whether or not this video has been released for use by the model appearing in it
     */
    hasModelRelease?: boolean;
    /**
     * Whether or not this video has received a release to show the landmark or property appearing in it
     */
    hasPropertyRelease?: boolean;
    /**
     * ID of the video
     */
    id: string;
    /**
     * Whether or not this video contains adult content
     */
    isAdult?: boolean;
    /**
     * Whether or not this video is editorial content
     */
    isEditorial?: boolean;
    /**
     * Keywords associated with the content of this video
     */
    keywords?: string[];
    /**
     * Media type of this video, should always be "video"
     */
    mediaType: string;
    /**
     * List of models in this video
     */
    models?: Model[];
    /**
     * Link to video information page; included only for certain accounts
     */
    url?: string;
}
