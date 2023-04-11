import { SpeakeasyBase } from "../../../internal/utils";
import { Invoice } from "./invoice";
/**
 * Describes a `CreateInvoice` request.
 */
export declare class CreateInvoiceRequest extends SpeakeasyBase {
    /**
     * A unique string that identifies the `CreateInvoice` request. If you do not
     *
     * @remarks
     * provide `idempotency_key` (or provide an empty string as the value), the endpoint
     * treats each request as independent.
     *
     * For more information, see [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency).
     */
    idempotencyKey?: string;
    /**
     * Stores information about an invoice. You use the Invoices API to create and manage
     *
     * @remarks
     * invoices. For more information, see [Manage Invoices Using the Invoices API](https://developer.squareup.com/docs/invoices-api/overview).
     */
    invoice: Invoice;
}
