import { SpeakeasyBase } from "../../../internal/utils";
import { SearchOrdersCustomerFilter } from "./searchorderscustomerfilter";
import { SearchOrdersDateTimeFilter } from "./searchordersdatetimefilter";
import { SearchOrdersFulfillmentFilter } from "./searchordersfulfillmentfilter";
import { SearchOrdersSourceFilter } from "./searchorderssourcefilter";
import { SearchOrdersStateFilter } from "./searchordersstatefilter";
/**
 * Filtering criteria to use for a `SearchOrders` request. Multiple filters
 *
 * @remarks
 * are ANDed together.
 */
export declare class SearchOrdersFilter extends SpeakeasyBase {
    /**
     * A filter based on the order `customer_id` and any tender `customer_id`
     *
     * @remarks
     * associated with the order. It does not filter based on the
     * [FulfillmentRecipient](https://developer.squareup.com/reference/square_2021-08-18/objects/OrderFulfillmentRecipient) `customer_id`.
     */
    customerFilter?: SearchOrdersCustomerFilter;
    /**
     * Filter for `Order` objects based on whether their `CREATED_AT`,
     *
     * @remarks
     * `CLOSED_AT`, or `UPDATED_AT` timestamps fall within a specified time range.
     * You can specify the time range and which timestamp to filter for. You can filter
     * for only one time range at a time.
     *
     * For each time range, the start time and end time are inclusive. If the end time
     * is absent, it defaults to the time of the first request for the cursor.
     *
     * __Important:__ If you use the `DateTimeFilter` in a `SearchOrders` query,
     * you must set the `sort_field` in [OrdersSort](https://developer.squareup.com/reference/square_2021-08-18/objects/SearchOrdersSort)
     * to the same field you filter for. For example, if you set the `CLOSED_AT` field
     * in `DateTimeFilter`, you must set the `sort_field` in `SearchOrdersSort` to
     * `CLOSED_AT`. Otherwise, `SearchOrders` throws an error.
     * [Learn more about filtering orders by time range.](https://developer.squareup.com/docs/orders-api/manage-orders#important-note-on-filtering-orders-by-time-range)
     */
    dateTimeFilter?: SearchOrdersDateTimeFilter;
    /**
     * Filter based on [order fulfillment](https://developer.squareup.com/reference/square_2021-08-18/objects/OrderFulfillment) information.
     */
    fulfillmentFilter?: SearchOrdersFulfillmentFilter;
    /**
     * A filter based on order `source` information.
     */
    sourceFilter?: SearchOrdersSourceFilter;
    /**
     * Filter by the current order `state`.
     */
    stateFilter?: SearchOrdersStateFilter;
}
