import { SpeakeasyBase } from "../../../internal/utils";
import { EditorialContent } from "./editorialcontent";
import { ErrorT } from "./error";
/**
 * List of editorial items
 */
export declare class EditorialImageContentDataList extends SpeakeasyBase {
    /**
     * Editorial items
     */
    data?: EditorialContent[];
    /**
     * Error list; appears only if there was an error
     */
    errors?: ErrorT[];
    /**
     * Optional error message
     */
    message?: string;
    /**
     * Current page of the response
     */
    page?: number;
    /**
     * Number of results per page
     */
    perPage?: number;
    /**
     * Total count of all results
     */
    totalCount?: number;
}
