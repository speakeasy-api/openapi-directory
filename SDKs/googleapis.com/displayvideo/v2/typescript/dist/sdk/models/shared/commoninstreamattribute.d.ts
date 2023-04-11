import { SpeakeasyBase } from "../../../internal/utils";
import { ImageAsset } from "./imageasset";
import { YoutubeVideoDetails } from "./youtubevideodetails";
/**
 * Common attributes for in-stream, non-skippable and bumper ads.
 */
export declare class CommonInStreamAttribute extends SpeakeasyBase {
    /**
     * The text on the call-to-action button.
     */
    actionButtonLabel?: string;
    /**
     * The headline of the call-to-action banner.
     */
    actionHeadline?: string;
    /**
     * Meta data of an image asset.
     */
    companionBanner?: ImageAsset;
    /**
     * The webpage address that appears with the ad.
     */
    displayUrl?: string;
    /**
     * The URL address of the webpage that people reach after they click the ad.
     */
    finalUrl?: string;
    /**
     * The URL address loaded in the background for tracking purposes.
     */
    trackingUrl?: string;
    /**
     * Details of a YouTube video.
     */
    video?: YoutubeVideoDetails;
}
