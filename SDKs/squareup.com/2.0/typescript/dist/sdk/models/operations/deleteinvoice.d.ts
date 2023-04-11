import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteInvoiceSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteInvoiceRequest extends SpeakeasyBase {
    /**
     * The ID of the invoice to delete.
     */
    invoiceId: string;
    /**
     * The version of the [invoice](https://developer.squareup.com/reference/square_2021-08-18/objects/Invoice) to delete.
     *
     * @remarks
     * If you do not know the version, you can call [GetInvoice](https://developer.squareup.com/reference/square_2021-08-18/invoices-api/get-invoice) or
     * [ListInvoices](https://developer.squareup.com/reference/square_2021-08-18/invoices-api/list-invoices).
     */
    version?: number;
}
export declare class DeleteInvoiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteInvoiceResponse?: shared.DeleteInvoiceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
