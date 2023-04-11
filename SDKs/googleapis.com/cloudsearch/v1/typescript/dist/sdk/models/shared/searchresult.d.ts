import { SpeakeasyBase } from "../../../internal/utils";
import { Metadata } from "./metadata";
import { ResultDebugInfo } from "./resultdebuginfo";
import { Snippet } from "./snippet";
/**
 * Results containing indexed information for a document.
 */
export declare class SearchResult extends SpeakeasyBase {
    /**
     * If source is clustered, provide list of clustered results. There will only be one level of clustered results. If current source is not enabled for clustering, this field will be empty.
     */
    clusteredResults?: SearchResult[];
    /**
     * Debugging information about the result.
     */
    debugInfo?: ResultDebugInfo;
    /**
     * Metadata of a matched search result.
     */
    metadata?: Metadata;
    /**
     * Snippet of the search result, which summarizes the content of the resulting page.
     */
    snippet?: Snippet;
    /**
     * Title of the search result.
     */
    title?: string;
    /**
     * The URL of the search result. The URL contains a Google redirect to the actual item. This URL is signed and shouldn't be changed.
     */
    url?: string;
}
