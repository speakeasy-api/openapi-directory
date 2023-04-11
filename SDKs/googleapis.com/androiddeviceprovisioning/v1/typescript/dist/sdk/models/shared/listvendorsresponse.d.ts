import { SpeakeasyBase } from "../../../internal/utils";
import { Company } from "./company";
/**
 * Response message to list vendors of the partner.
 */
export declare class ListVendorsResponse extends SpeakeasyBase {
    /**
     * A token to retrieve the next page of results. Omitted if no further results are available.
     */
    nextPageToken?: string;
    /**
     * The total count of items in the list irrespective of pagination.
     */
    totalSize?: number;
    /**
     * List of vendors of the reseller partner. Fields `name`, `companyId` and `companyName` are populated to the Company object.
     */
    vendors?: Company[];
}
