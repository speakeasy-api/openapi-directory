import { SpeakeasyBase } from "../../../internal/utils";
import { SearchSubscriptionsQuery } from "./searchsubscriptionsquery";
/**
 * Defines parameters in a
 *
 * @remarks
 * [SearchSubscriptions](https://developer.squareup.com/reference/square_2021-08-18/subscriptions-api/search-subscriptions) endpoint
 * request.
 */
export declare class SearchSubscriptionsRequest extends SpeakeasyBase {
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     *
     * @remarks
     * Provide this to retrieve the next set of results for the original query.
     *
     * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    cursor?: string;
    /**
     * The upper limit on the number of subscriptions to return
     *
     * @remarks
     * in the response.
     *
     * Default: `200`
     */
    limit?: number;
    /**
     * Represents a query (including filtering criteria) used to search for subscriptions.
     */
    query?: SearchSubscriptionsQuery;
}
