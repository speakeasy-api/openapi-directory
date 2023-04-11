import { SpeakeasyBase } from "../../../internal/utils";
import { EditorialContent } from "./editorialcontent";
/**
 * Editorial search results
 */
export declare class EditorialSearchResults extends SpeakeasyBase {
    /**
     * Editorial items
     */
    data: EditorialContent[];
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
