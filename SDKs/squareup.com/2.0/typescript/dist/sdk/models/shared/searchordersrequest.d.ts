import { SpeakeasyBase } from "../../../internal/utils";
import { SearchOrdersQuery } from "./searchordersquery";
/**
 * The request does not have any required fields. When given no query criteria,
 *
 * @remarks
 * `SearchOrders` returns all results for all of the seller's locations. When retrieving additional
 * pages using a `cursor`, the `query` must be equal to the `query` used to retrieve the first page of
 * results.
 */
export declare class SearchOrdersRequest extends SpeakeasyBase {
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     *
     * @remarks
     * Provide this cursor to retrieve the next set of results for your original query.
     * For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination).
     */
    cursor?: string;
    /**
     * The maximum number of results to be returned in a single page. It is
     *
     * @remarks
     * possible to receive fewer results than the specified limit on a given page.
     *
     * Default: `500`
     */
    limit?: number;
    /**
     * The location IDs for the orders to query. All locations must belong to
     *
     * @remarks
     * the same merchant.
     *
     * Min: 1 location ID.
     *
     * Max: 10 location IDs.
     */
    locationIds?: string[];
    /**
     * Contains query criteria for the search.
     */
    query?: SearchOrdersQuery;
    /**
     * A Boolean that controls the format of the search results. If `true`,
     *
     * @remarks
     * `SearchOrders` returns [OrderEntry](https://developer.squareup.com/reference/square_2021-08-18/objects/OrderEntry) objects. If `false`, `SearchOrders`
     * returns complete order objects.
     *
     * Default: `false`.
     */
    returnEntries?: boolean;
}
