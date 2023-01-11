import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://api.ritekit.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * animateImage - Animate Image
     *
     * Returns URL of an animated GIF.
    **/
    animateImage(req: operations.AnimateImageRequest, config?: AxiosRequestConfig): Promise<operations.AnimateImageResponse>;
    /**
     * autoEmojify - Auto-Emojify
     *
     * Returns text of the post with emoji added
    **/
    autoEmojify(req: operations.AutoEmojifyRequest, config?: AxiosRequestConfig): Promise<operations.AutoEmojifyResponse>;
    /**
     * autoHashtag - Auto-Hashtag
     *
     * Returns auto-hashtagged text of the post.
    **/
    autoHashtag(req: operations.AutoHashtagRequest, config?: AxiosRequestConfig): Promise<operations.AutoHashtagResponse>;
    /**
     * companyLogo - Company Logo
     *
     * Returns a company logo based on website domain. If the logo is not in our database yet, it will be extracted from the site on the fly. White logo background is automatically removed to make the logo look better on color backgrounds.
     *
     * Note: It is not possible to access our company logo API publicly without authentication. If you wish to do so, you have to create proxy on your own server that calls our API from the server side.
    **/
    companyLogo(req: operations.CompanyLogoRequest, config?: AxiosRequestConfig): Promise<operations.CompanyLogoResponse>;
    /**
     * emojiSuggestions - Emoji Suggestions
     *
     * Returns list of emoji suggestions for a given text of the post
    **/
    emojiSuggestions(req: operations.EmojiSuggestionsRequest, config?: AxiosRequestConfig): Promise<operations.EmojiSuggestionsResponse>;
    /**
     * hashtagHistory - Hashtag History
     *
     * Returns historical stats for a given hashtag from the last 30 days
    **/
    hashtagHistory(req: operations.HashtagHistoryRequest, config?: AxiosRequestConfig): Promise<operations.HashtagHistoryResponse>;
    /**
     * hashtagStats - Hashtag Stats
     *
     * Returns real-time stats for up to 100 hashtags (updated hourly).
    **/
    hashtagStats(req: operations.HashtagStatsRequest, config?: AxiosRequestConfig): Promise<operations.HashtagStatsResponse>;
    /**
     * hashtagSuggestions - Hashtag Suggestions
     *
     * Returns list of hashtag suggestions for a single-word topic or a shorter text up to 1000 characters. Takes into account both semantic relevancy and real-time hashtag popularity.
    **/
    hashtagSuggestions(req: operations.HashtagSuggestionsRequest, config?: AxiosRequestConfig): Promise<operations.HashtagSuggestionsResponse>;
    /**
     * hashtagsCleaner - Hashtags cleaner
     *
     * Remove banned hashtags before posting to Instagram
    **/
    hashtagsCleaner(req: operations.HashtagsCleanerRequest, config?: AxiosRequestConfig): Promise<operations.HashtagsCleanerResponse>;
    /**
     * listOfCtAs - List of CTAs
     *
     * Returns list of available CTA for current user. Requires each user to authenticate with RiteKit
    **/
    listOfCtAs(config?: AxiosRequestConfig): Promise<operations.ListOfCtAsResponse>;
    /**
     * shortenLink - Shorten Link
     *
     * Returns a shorten link with a given CTA.
    **/
    shortenLink(req: operations.ShortenLinkRequest, config?: AxiosRequestConfig): Promise<operations.ShortenLinkResponse>;
    /**
     * textToImage - Text to Image
     *
     * Returns URL of an image created from text according to given style parameters
    **/
    textToImage(req: operations.TextToImageRequest, config?: AxiosRequestConfig): Promise<operations.TextToImageResponse>;
    /**
     * trendingHashtags - Trending Hashtags
     *
     * Returns list of hashtags currently trending on Twitter
    **/
    trendingHashtags(req: operations.TrendingHashtagsRequest, config?: AxiosRequestConfig): Promise<operations.TrendingHashtagsResponse>;
}
