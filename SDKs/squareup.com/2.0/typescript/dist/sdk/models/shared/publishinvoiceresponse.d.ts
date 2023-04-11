import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Invoice } from "./invoice";
/**
 * Describes a `PublishInvoice` response.
 */
export declare class PublishInvoiceResponse extends SpeakeasyBase {
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
