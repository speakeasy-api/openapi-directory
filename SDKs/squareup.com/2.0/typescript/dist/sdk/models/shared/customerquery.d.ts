import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerFilter } from "./customerfilter";
import { CustomerSort } from "./customersort";
/**
 * Represents a query (including filtering criteria, sorting criteria, or both) used to search
 *
 * @remarks
 * for customer profiles.
 */
export declare class CustomerQuery extends SpeakeasyBase {
    /**
     * Represents a set of `CustomerQuery` filters used to limit the set of
     *
     * @remarks
     * customers returned by the [SearchCustomers](https://developer.squareup.com/reference/square_2021-08-18/customers-api/search-customers) endpoint.
     */
    filter?: CustomerFilter;
    /**
     * Specifies how searched customers profiles are sorted, including the sort key and sort order.
     */
    sort?: CustomerSort;
}
