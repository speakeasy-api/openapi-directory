import { SpeakeasyBase } from "../../../internal/utils";
import { WmxSitemapContent } from "./wmxsitemapcontent";
/**
 * Contains detailed information about a specific URL submitted as a sitemap.
 */
export declare class WmxSitemap extends SpeakeasyBase {
    /**
     * The various content types in the sitemap.
     */
    contents?: WmxSitemapContent[];
    /**
     * Number of errors in the sitemap. These are issues with the sitemap itself that need to be fixed before it can be processed correctly.
     */
    errors?: string;
    /**
     * If true, the sitemap has not been processed.
     */
    isPending?: boolean;
    /**
     * If true, the sitemap is a collection of sitemaps.
     */
    isSitemapsIndex?: boolean;
    /**
     * Date & time in which this sitemap was last downloaded. Date format is in RFC 3339 format (yyyy-mm-dd).
     */
    lastDownloaded?: Date;
    /**
     * Date & time in which this sitemap was submitted. Date format is in RFC 3339 format (yyyy-mm-dd).
     */
    lastSubmitted?: Date;
    /**
     * The url of the sitemap.
     */
    path?: string;
    /**
     * The type of the sitemap. For example: rssFeed.
     */
    type?: string;
    /**
     * Number of warnings for the sitemap. These are generally non-critical issues with URLs in the sitemaps.
     */
    warnings?: string;
}
