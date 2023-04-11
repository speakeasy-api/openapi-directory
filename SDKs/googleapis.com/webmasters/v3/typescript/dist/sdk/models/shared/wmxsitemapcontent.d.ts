import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the various content types in the sitemap.
 */
export declare class WmxSitemapContent extends SpeakeasyBase {
    /**
     * The number of URLs from the sitemap that were indexed (of the content type).
     */
    indexed?: string;
    /**
     * The number of URLs in the sitemap (of the content type).
     */
    submitted?: string;
    /**
     * The specific type of content in this sitemap. For example: web.
     */
    type?: string;
}
