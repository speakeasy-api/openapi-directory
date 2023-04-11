import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.ritekit.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * RiteKit API is based on REST principles.
 *
 * @remarks
 *
 * Authentication uses standard OAuth 2.0 process
 *
 * ##Getting started
 *
 * 1. Sign up for [RiteKit](https://ritekit.com/)
 *
 * 1. Go to [developer dashboard](https://ritekit.com/developer/dashboard/)
 *
 * 1. Click "Create a token" button to get your **Client ID** and **Client secret**
 *
 * 1. When you reach your free limit of calls per month, [upgrade to paid tiers](https://ritekit.com/developer/)
 *
 * ## Options for authorizing API Calls
 *
 * #### Using Client ID directly
 *
 * You can directly connect to our API using your **client ID** by sending it as a GET query parameter. This option is simple (no need for oAuth) but it should be used only in case the Client ID is not exposed publicly.
 *
 * GET  https://api.ritekit.com/v1/stats/multiple-hashtags?tags=php&client_id=292c6912e7710c838347ae178b4a
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Animate Image
     *
     * @remarks
     * Returns URL of an animated GIF.
     */
    animateImage(req: operations.AnimateImageRequest, config?: AxiosRequestConfig): Promise<operations.AnimateImageResponse>;
    /**
     * Auto-Emojify
     *
     * @remarks
     * Returns text of the post with emoji added
     */
    autoEmojify(req: operations.AutoEmojifyRequest, config?: AxiosRequestConfig): Promise<operations.AutoEmojifyResponse>;
    /**
     * Auto-Hashtag
     *
     * @remarks
     * Returns auto-hashtagged text of the post.
     */
    autoHashtag(req: operations.AutoHashtagRequest, config?: AxiosRequestConfig): Promise<operations.AutoHashtagResponse>;
    /**
     * Company Logo
     *
     * @remarks
     * Returns a company logo based on website domain. If the logo is not in our database yet, it will be extracted from the site on the fly. White logo background is automatically removed to make the logo look better on color backgrounds.
     *
     * Note: It is not possible to access our company logo API publicly without authentication. If you wish to do so, you have to create proxy on your own server that calls our API from the server side.
     */
    companyLogo(req: operations.CompanyLogoRequest, config?: AxiosRequestConfig): Promise<operations.CompanyLogoResponse>;
    /**
     * Emoji Suggestions
     *
     * @remarks
     * Returns list of emoji suggestions for a given text of the post
     */
    emojiSuggestions(req: operations.EmojiSuggestionsRequest, config?: AxiosRequestConfig): Promise<operations.EmojiSuggestionsResponse>;
    /**
     * Hashtag History
     *
     * @remarks
     * Returns historical stats for a given hashtag from the last 30 days
     */
    hashtagHistory(req: operations.HashtagHistoryRequest, config?: AxiosRequestConfig): Promise<operations.HashtagHistoryResponse>;
    /**
     * Hashtag Stats
     *
     * @remarks
     * Returns real-time stats for up to 100 hashtags (updated hourly).
     */
    hashtagStats(req: operations.HashtagStatsRequest, config?: AxiosRequestConfig): Promise<operations.HashtagStatsResponse>;
    /**
     * Hashtag Suggestions
     *
     * @remarks
     * Returns list of hashtag suggestions for a single-word topic or a shorter text up to 1000 characters. Takes into account both semantic relevancy and real-time hashtag popularity.
     */
    hashtagSuggestions(req: operations.HashtagSuggestionsRequest, config?: AxiosRequestConfig): Promise<operations.HashtagSuggestionsResponse>;
    /**
     * Hashtags cleaner
     *
     * @remarks
     * Remove banned hashtags before posting to Instagram
     */
    hashtagsCleaner(req: operations.HashtagsCleanerRequest, config?: AxiosRequestConfig): Promise<operations.HashtagsCleanerResponse>;
    /**
     * List of CTAs
     *
     * @remarks
     * Returns list of available CTA for current user. Requires each user to authenticate with RiteKit
     */
    listOfCTAs(config?: AxiosRequestConfig): Promise<operations.ListOfCTAsResponse>;
    /**
     * Shorten Link
     *
     * @remarks
     * Returns a shorten link with a given CTA.
     */
    shortenLink(req: operations.ShortenLinkRequest, config?: AxiosRequestConfig): Promise<operations.ShortenLinkResponse>;
    /**
     * Text to Image
     *
     * @remarks
     * Returns URL of an image created from text according to given style parameters
     */
    textToImage(req: operations.TextToImageRequest, config?: AxiosRequestConfig): Promise<operations.TextToImageResponse>;
    /**
     * Trending Hashtags
     *
     * @remarks
     * Returns list of hashtags currently trending on Twitter
     */
    trendingHashtags(req: operations.TrendingHashtagsRequest, config?: AxiosRequestConfig): Promise<operations.TrendingHashtagsResponse>;
}
