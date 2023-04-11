import { SpeakeasyBase } from "../../../internal/utils";
import { Batch } from "./batch";
import { Link } from "./link";
import { OptionalLink } from "./optionallink";
/**
 * Helpful links to other pages of results
 */
export declare class ListBatchesResponseBodyPaginationLink extends SpeakeasyBase {
    /**
     * The link to the first page of results.  This object will _always_ have an `href` field. If there are no results, then the first page will contain an empty array of items.
     *
     * @remarks
     *
     */
    first: Link;
    /**
     * The link to the final page of results.  This object will _always_ have an `href` field. If there are no results, then the final page will contain an empty array of items.
     *
     * @remarks
     *
     */
    last: Link;
    /**
     * The link to the next page of results.  The `href` field will only be set when the `page` is less than `pages`.
     *
     * @remarks
     *
     */
    next: OptionalLink;
    /**
     * The link to the previous page of results.  The `href` field will only be set when the `page` is 2 or greater.
     *
     * @remarks
     *
     */
    prev: OptionalLink;
}
/**
 * A list batch response body
 */
export declare class ListBatchesResponseBody extends SpeakeasyBase {
    /**
     * Batch List
     */
    batches: Batch[];
    links: ListBatchesResponseBodyPaginationLink;
    /**
     * The page that is currently being read
     */
    page: number;
    /**
     * The total number of batch pages the API call returned
     */
    pages: number;
    /**
     * The total number of batches the API call returned
     */
    total: number;
}
