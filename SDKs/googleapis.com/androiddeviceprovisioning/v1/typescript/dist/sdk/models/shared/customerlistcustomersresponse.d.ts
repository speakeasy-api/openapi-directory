import { SpeakeasyBase } from "../../../internal/utils";
import { Company } from "./company";
/**
 * Response message for listing my customers.
 */
export declare class CustomerListCustomersResponse extends SpeakeasyBase {
    /**
     * The customer accounts the calling user is a member of.
     */
    customers?: Company[];
    /**
     * A token used to access the next page of results. Omitted if no further results are available.
     */
    nextPageToken?: string;
}
