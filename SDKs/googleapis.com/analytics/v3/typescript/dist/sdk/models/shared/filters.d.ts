import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
/**
 * A filter collection lists filters created by users in an Analytics account. Each resource in the collection corresponds to a filter.
 */
export declare class Filters extends SpeakeasyBase {
    /**
     * A list of filters.
     */
    items?: Filter[];
    /**
     * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number;
    /**
     * Collection type.
     */
    kind?: string;
    /**
     * Link to next page for this filter collection.
     */
    nextLink?: string;
    /**
     * Link to previous page for this filter collection.
     */
    previousLink?: string;
    /**
     * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
     */
    startIndex?: number;
    /**
     * The total number of results for the query, regardless of the number of results in the response.
     */
    totalResults?: number;
    /**
     * Email ID of the authenticated user
     */
    username?: string;
}
