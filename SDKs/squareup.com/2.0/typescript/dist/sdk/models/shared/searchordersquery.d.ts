import { SpeakeasyBase } from "../../../internal/utils";
import { SearchOrdersFilter } from "./searchordersfilter";
import { SearchOrdersSort } from "./searchorderssort";
/**
 * Contains query criteria for the search.
 */
export declare class SearchOrdersQuery extends SpeakeasyBase {
    /**
     * Filtering criteria to use for a `SearchOrders` request. Multiple filters
     *
     * @remarks
     * are ANDed together.
     */
    filter?: SearchOrdersFilter;
    /**
     * Sorting criteria for a `SearchOrders` request. Results can only be sorted
     *
     * @remarks
     * by a timestamp field.
     */
    sort?: SearchOrdersSort;
}
