import { SpeakeasyBase } from "../../../internal/utils";
import { YoutubeVideoDetails } from "./youtubevideodetails";
/**
 * Details for an audio ad.
 */
export declare class AudioAd extends SpeakeasyBase {
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
