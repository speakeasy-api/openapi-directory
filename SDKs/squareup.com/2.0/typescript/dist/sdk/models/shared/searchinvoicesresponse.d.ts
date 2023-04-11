import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Invoice } from "./invoice";
/**
 * Describes a `SearchInvoices` response.
 */
export declare class SearchInvoicesResponse extends SpeakeasyBase {
    /**
     * When a response is truncated, it includes a cursor that you can use in a
     *
     * @remarks
     * subsequent request to fetch the next set of invoices. If empty, this is the final
     * response.
     * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    cursor?: string;
    /**
     * Information about errors encountered during the request.
     */
    errors?: ErrorT[];
    /**
     * The list of invoices returned by the search.
     */
    invoices?: Invoice[];
}
