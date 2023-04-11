import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a list of targeted and excluded URLs (for example, google.com). For Private Auction Deals, URLs are either included or excluded. For Programmatic Guaranteed and Preferred Deals, this doesn't apply.
 */
export declare class UriTargeting extends SpeakeasyBase {
    /**
     * A list of URLs to be excluded.
     */
    excludedUris?: string[];
    /**
     * A list of URLs to be included.
     */
    targetedUris?: string[];
}
