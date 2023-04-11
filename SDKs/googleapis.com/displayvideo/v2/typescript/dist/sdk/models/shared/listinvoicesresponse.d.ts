import { SpeakeasyBase } from "../../../internal/utils";
import { Invoice } from "./invoice";
/**
 * Successful response
 */
export declare class ListInvoicesResponse extends SpeakeasyBase {
    /**
     * The list of invoices. This list will be absent if empty.
     */
    invoices?: Invoice[];
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListInvoices` method to retrieve the next page of results. This token will be absent if there are no more invoices to return.
     */
    nextPageToken?: string;
}
