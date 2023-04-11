import { SpeakeasyBase } from "../../../internal/utils";
import { SasPortalCustomer } from "./sasportalcustomer";
/**
 * Response for `ListCustomers`.
 */
export declare class SasPortalListCustomersResponse extends SpeakeasyBase {
    /**
     * The list of customers that match the request.
     */
    customers?: SasPortalCustomer[];
    /**
     * A pagination token returned from a previous call to ListCustomers that indicates from where listing should continue. If the field is missing or empty, it means there are no more customers.
     */
    nextPageToken?: string;
}
