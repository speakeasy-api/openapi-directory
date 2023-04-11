import { SpeakeasyBase } from "../../../internal/utils";
import { Invoice } from "./invoice";
/**
 * Invoice List Response
 */
export declare class AdvertiserInvoicesListResponse extends SpeakeasyBase {
    /**
     * Invoice collection
     */
    invoices?: Invoice[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserInvoicesListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
}
