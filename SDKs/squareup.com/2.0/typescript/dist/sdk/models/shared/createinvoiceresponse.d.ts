import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Invoice } from "./invoice";
/**
 * The response returned by the `CreateInvoice` request.
 */
export declare class CreateInvoiceResponse extends SpeakeasyBase {
    /**
     * Information about errors encountered during the request.
     */
    errors?: ErrorT[];
    /**
     * Stores information about an invoice. You use the Invoices API to create and manage
     *
     * @remarks
     * invoices. For more information, see [Manage Invoices Using the Invoices API](https://developer.squareup.com/docs/invoices-api/overview).
     */
    invoice?: Invoice;
}
