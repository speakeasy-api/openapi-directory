import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Representation of a URL channel. URL channels allow you to track the performance of particular pages in your site; see [URL channels](https://support.google.com/adsense/answer/2923836) for more information.
 */
export declare class UrlChannel extends SpeakeasyBase {
    /**
     * Output only. Resource name of the URL channel. Format: accounts/{account}/adclients/{adclient}/urlchannels/{urlchannel}
     */
    name?: string;
    /**
     * Output only. Unique ID of the custom channel as used in the `URL_CHANNEL_ID` reporting dimension.
     */
    reportingDimensionId?: string;
    /**
     * URI pattern of the channel. Does not include "http://" or "https://". Example: www.example.com/home
     */
    uriPattern?: string;
}
