import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Invoice } from "./invoice";
/**
 * Describes a `ListInvoice` response.
 */
export declare class ListInvoicesResponse extends SpeakeasyBase {
    /**
     * When a response is truncated, it includes a cursor that you can use in a
     *
     * @remarks
     * subsequent request to retrieve the next set of invoices. If empty, this is the final
     * response.
     * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    cursor?: string;
    /**
     * Information about errors encountered during the request.
     */
    errors?: ErrorT[];
    /**
     * The invoices retrieved.
     */
    invoices?: Invoice[];
}
