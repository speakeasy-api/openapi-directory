import { SpeakeasyBase } from "../../../internal/utils";
import { Company } from "./company";
/**
 * Response message of all customers related to this partner.
 */
export declare class ListCustomersResponse extends SpeakeasyBase {
    /**
     * List of customers related to this reseller partner.
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
