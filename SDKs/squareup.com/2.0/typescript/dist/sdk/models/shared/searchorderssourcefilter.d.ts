import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A filter based on order `source` information.
 */
export declare class SearchOrdersSourceFilter extends SpeakeasyBase {
    /**
     * Filters by the [Source](https://developer.squareup.com/reference/square_2021-08-18/objects/OrderSource) `name`. The filter returns any orders
     *
     * @remarks
     * with a `source.name` that matches any of the listed source names.
     *
     * Max: 10 source names.
     */
    sourceNames?: string[];
}
