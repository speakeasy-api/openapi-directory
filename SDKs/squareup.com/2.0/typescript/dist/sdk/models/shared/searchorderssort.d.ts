import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Sorting criteria for a `SearchOrders` request. Results can only be sorted
 *
 * @remarks
 * by a timestamp field.
 */
export declare class SearchOrdersSort extends SpeakeasyBase {
    /**
     * The field to sort by.
     *
     * @remarks
     *
     * __Important:__ When using a [DateTimeFilter](https://developer.squareup.com/reference/square_2021-08-18/objects/SearchOrdersFilter),
     * `sort_field` must match the timestamp field that the `DateTimeFilter` uses to
     * filter. For example, if you set your `sort_field` to `CLOSED_AT` and you use a
     * `DateTimeFilter`, your `DateTimeFilter` must filter for orders by their `CLOSED_AT` date.
     * If this field does not match the timestamp field in `DateTimeFilter`,
     * `SearchOrders` returns an error.
     *
     * Default: `CREATED_AT`.
     */
    sortField: string;
    /**
     * The chronological order in which results are returned. Defaults to `DESC`.
     */
    sortOrder?: string;
}
