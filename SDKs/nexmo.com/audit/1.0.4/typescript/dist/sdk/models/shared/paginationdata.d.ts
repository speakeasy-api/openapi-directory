import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Page containing results.
 */
export declare class PaginationData extends SpeakeasyBase {
    /**
     * Which page of the pagination sequence you are looking at.
     */
    number?: number;
    /**
     * The total number of items in this response (page).
     */
    size?: number;
    /**
     * The total number of items across all pages.
     */
    totalElements?: number;
    /**
     * The number of pages of data in the response.
     */
    totalPages?: number;
}
