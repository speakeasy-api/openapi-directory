import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
/**
 * Native content for a creative.
 */
export declare class NativeContent extends SpeakeasyBase {
    /**
     * The name of the advertiser or sponsor, to be displayed in the ad creative.
     */
    advertiserName?: string;
    /**
     * An image resource. You may provide a larger image than was requested, so long as the aspect ratio is preserved.
     */
    appIcon?: Image;
    /**
     * A long description of the ad.
     */
    body?: string;
    /**
     * A label for the button that the user is supposed to click.
     */
    callToAction?: string;
    /**
     * The URL that the browser/SDK will load when the user clicks the ad.
     */
    clickLinkUrl?: string;
    /**
     * The URL to use for click tracking.
     */
    clickTrackingUrl?: string;
    /**
     * A short title for the ad.
     */
    headline?: string;
    /**
     * An image resource. You may provide a larger image than was requested, so long as the aspect ratio is preserved.
     */
    image?: Image;
    /**
     * An image resource. You may provide a larger image than was requested, so long as the aspect ratio is preserved.
     */
    logo?: Image;
    /**
     * The price of the promoted app including currency info.
     */
    priceDisplayText?: string;
    /**
     * The app rating in the app store. Must be in the range [0-5].
     */
    starRating?: number;
    /**
     * The URL to the app store to purchase/download the promoted app.
     */
    storeUrl?: string;
    /**
     * The URL to fetch a native video ad.
     */
    videoUrl?: string;
}
