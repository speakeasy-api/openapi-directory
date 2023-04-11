import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Order } from "./order";
import { OrderEntry } from "./orderentry";
/**
 * Either the `order_entries` or `orders` field is set, depending on whether
 *
 * @remarks
 * `return_entries` is set on the [SearchOrdersRequest](https://developer.squareup.com/reference/square_2021-08-18/orders-api/search-orders).
 */
export declare class SearchOrdersResponse extends SpeakeasyBase {
    /**
     * The pagination cursor to be used in a subsequent request. If unset,
     *
     * @remarks
     * this is the final response.
     * For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination).
     */
    cursor?: string;
    /**
     * [Errors](https://developer.squareup.com/reference/square_2021-08-18/objects/Error) encountered during the search.
     */
    errors?: ErrorT[];
    /**
     * A list of [OrderEntries](https://developer.squareup.com/reference/square_2021-08-18/objects/OrderEntry) that fit the query
     *
     * @remarks
     * conditions. The list is populated only if `return_entries` is set to `true` in the request.
     */
    orderEntries?: OrderEntry[];
    /**
     * A list of
     *
     * @remarks
     * [Order](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) objects that match the query conditions. The list is populated only if
     * `return_entries` is set to `false` in the request.
     */
    orders?: Order[];
}
