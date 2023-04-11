import { SpeakeasyBase } from "../../../internal/utils";
import { WmxSitemap } from "./wmxsitemap";
/**
 * List of sitemaps.
 */
export declare class SitemapsListResponse extends SpeakeasyBase {
    /**
     * Contains detailed information about a specific URL submitted as a sitemap.
     */
    sitemap?: WmxSitemap[];
}
