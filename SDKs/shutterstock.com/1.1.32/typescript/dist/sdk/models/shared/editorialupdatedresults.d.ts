import { SpeakeasyBase } from "../../../internal/utils";
import { EditorialUpdatedContent } from "./editorialupdatedcontent";
/**
 * Editorial updated results
 */
export declare class EditorialUpdatedResults extends SpeakeasyBase {
    /**
     * Editorial updated items
     */
    data: EditorialUpdatedContent[];
    /**
     * Optional error message
     */
    message?: string;
    /**
     * Cursor value that represents the next page of results
     */
    next?: string;
    /**
     * Number of results per page
     */
    perPage?: number;
    /**
     * Cursor value that represents the previous page of results
     */
    prev?: string;
}
