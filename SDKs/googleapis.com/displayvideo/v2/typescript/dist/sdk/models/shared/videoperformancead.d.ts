import { SpeakeasyBase } from "../../../internal/utils";
import { ImageAsset } from "./imageasset";
import { YoutubeVideoDetails } from "./youtubevideodetails";
/**
 * Details for a video performance ad.
 */
export declare class VideoPerformanceAd extends SpeakeasyBase {
    /**
     * The list of text assets shown on the call-to-action button.
     */
    actionButtonLabels?: string[];
    /**
     * The list of companion banners used by this ad.
     */
    companionBanners?: ImageAsset[];
    /**
     * The custom parameters to pass custom values to tracking URL template.
     */
    customParameters?: Record<string, string>;
    /**
     * The list of descriptions shown on the call-to-action banner.
     */
    descriptions?: string[];
    /**
     * The first piece after the domain in the display URL.
     */
    displayUrlBreadcrumb1?: string;
    /**
     * The second piece after the domain in the display URL.
     */
    displayUrlBreadcrumb2?: string;
    /**
     * The domain of the display URL.
     */
    domain?: string;
    /**
     * The URL address of the webpage that people reach after they click the ad.
     */
    finalUrl?: string;
    /**
     * The list of headlines shown on the call-to-action banner.
     */
    headlines?: string[];
    /**
     * The list of lone headlines shown on the call-to-action banner.
     */
    longHeadlines?: string[];
    /**
     * The URL address loaded in the background for tracking purposes.
     */
    trackingUrl?: string;
    /**
     * The list of YouTube video assets used by this ad.
     */
    videos?: YoutubeVideoDetails[];
}
