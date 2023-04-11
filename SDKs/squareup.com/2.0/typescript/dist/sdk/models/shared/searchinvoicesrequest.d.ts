import { SpeakeasyBase } from "../../../internal/utils";
import { InvoiceQuery } from "./invoicequery";
/**
 * Describes a `SearchInvoices` request.
 */
export declare class SearchInvoicesRequest extends SpeakeasyBase {
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     *
     * @remarks
     * Provide this cursor to retrieve the next set of results for your original query.
     *
     * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    cursor?: string;
    /**
     * The maximum number of invoices to return (200 is the maximum `limit`).
     *
     * @remarks
     * If not provided, the server uses a default limit of 100 invoices.
     */
    limit?: number;
    /**
     * Describes query criteria for searching invoices.
     */
    query: InvoiceQuery;
}
