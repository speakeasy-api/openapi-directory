import { SpeakeasyBase } from "../../../internal/utils";
import { Company } from "./company";
/**
 * Response message to list customers of the vendor.
 */
export declare class ListVendorCustomersResponse extends SpeakeasyBase {
    /**
     * List of customers of the vendor.
     */
    customers?: Company[];
    /**
     * A token to retrieve the next page of results. Omitted if no further results are available.
     */
    nextPageToken?: string;
    /**
     * The total count of items in the list irrespective of pagination.
     */
    totalSize?: number;
}
