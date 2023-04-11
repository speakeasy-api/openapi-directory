import { SpeakeasyBase } from "../../../internal/utils";
import { EntityAdWordsLink } from "./entityadwordslink";
/**
 * An entity Google Ads link collection provides a list of GA-Google Ads links Each resource in this collection corresponds to a single link.
 */
export declare class EntityAdWordsLinks extends SpeakeasyBase {
    /**
     * A list of entity Google Ads links.
     */
    items?: EntityAdWordsLink[];
    /**
     * The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number;
    /**
     * Collection type.
     */
    kind?: string;
    /**
     * Next link for this Google Ads link collection.
     */
    nextLink?: string;
    /**
     * Previous link for this Google Ads link collection.
     */
    previousLink?: string;
    /**
     * The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter.
     */
    startIndex?: number;
    /**
     * The total number of results for the query, regardless of the number of results in the response.
     */
    totalResults?: number;
}
