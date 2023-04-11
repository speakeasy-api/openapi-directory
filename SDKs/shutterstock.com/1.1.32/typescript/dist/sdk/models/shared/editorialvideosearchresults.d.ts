import { SpeakeasyBase } from "../../../internal/utils";
import { EditorialVideoContent } from "./editorialvideocontent";
/**
 * Editorial search results
 */
export declare class EditorialVideoSearchResults extends SpeakeasyBase {
    /**
     * Editorial items
     */
    data: EditorialVideoContent[];
    /**
     * Optional error message
     */
    message?: string;
    /**
     * Cursor value that represents the next page of results
     */
    next?: string;
    /**
     * Current page of the response
     */
    page?: number;
    /**
     * Number of results per page
     */
    perPage?: number;
    /**
     * Cursor value that represents the previous page of results
     */
    prev?: string;
    /**
     * Unique identifier for the search request
     */
    searchId?: string;
    /**
     * Total count of all results
     */
    totalCount: number;
}
