import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
import { Insights } from "./insights";
/**
 * Image search results
 */
export declare class ImageSearchResults extends SpeakeasyBase {
    /**
     * List of images
     */
    data: Image[];
    /**
     * AI-powered insights about an asset, based on the specified audience and objective
     */
    insights?: Insights;
    /**
     * Server-generated message, if any
     */
    message?: string;
    /**
     * Current page that is returned
     */
    page?: number;
    /**
     * Number of results per page
     */
    perPage?: number;
    /**
     * Unique identifier for the search request
     */
    searchId: string;
    /**
     * Returns information if search phrase has potentially been mistyped or another query would lead to better search results
     */
    spellcheckInfo?: Record<string, any>;
    /**
     * Total count of all results across all pages
     */
    totalCount: number;
}
