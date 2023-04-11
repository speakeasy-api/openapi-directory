import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a `CancelInvoice` request.
 */
export declare class CancelInvoiceRequest extends SpeakeasyBase {
    /**
     * The version of the [invoice](https://developer.squareup.com/reference/square_2021-08-18/objects/Invoice) to cancel.
     *
     * @remarks
     * If you do not know the version, you can call
     * [GetInvoice](https://developer.squareup.com/reference/square_2021-08-18/invoices-api/get-invoice) or [ListInvoices](https://developer.squareup.com/reference/square_2021-08-18/invoices-api/list-invoices).
     */
    version: number;
}
