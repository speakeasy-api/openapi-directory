import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The specific type of content in this sitemap. For example: `web`.
 */
export declare enum WmxSitemapContentTypeEnum {
    Web = "WEB",
    Image = "IMAGE",
    Video = "VIDEO",
    News = "NEWS",
    Mobile = "MOBILE",
    AndroidApp = "ANDROID_APP",
    Pattern = "PATTERN",
    IosApp = "IOS_APP",
    DataFeedElement = "DATA_FEED_ELEMENT"
}
/**
 * Information about the various content types in the sitemap.
 */
export declare class WmxSitemapContent extends SpeakeasyBase {
    /**
     * *Deprecated; do not use.*
     */
    indexed?: string;
    /**
     * The number of URLs in the sitemap (of the content type).
     */
    submitted?: string;
    /**
     * The specific type of content in this sitemap. For example: `web`.
     */
    type?: WmxSitemapContentTypeEnum;
}
