import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information that helps paginate through lists of resources.
 */
export declare class Pagination extends SpeakeasyBase {
    /**
     * The number of items returned on this page.
     */
    count: number;
    /**
     * The absolute URL pointing to the next page. Will be null if there are no next pages.
     */
    next: string;
    /**
     * The absolute URL pointing to the previous page. Will be null if there are no previous pages.
     */
    prev: string;
    /**
     * The total number of items that exist for your query across all pages.
     */
    total: number;
}
