import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Invoices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CancelInvoice
     *
     * @remarks
     * Cancels an invoice. The seller cannot collect payments for
     * the canceled invoice.
     *
     * You cannot cancel an invoice in the `DRAFT` state or in a terminal state: `PAID`, `REFUNDED`, `CANCELED`, or `FAILED`.
     */
    cancelInvoice(req: operations.CancelInvoiceRequest, security: operations.CancelInvoiceSecurity, config?: AxiosRequestConfig): Promise<operations.CancelInvoiceResponse>;
    /**
     * CreateInvoice
     *
     * @remarks
     * Creates a draft [invoice](https://developer.squareup.com/reference/square_2021-08-18/objects/Invoice)
     * for an order created using the Orders API.
     *
     * A draft invoice remains in your account and no action is taken.
     * You must publish the invoice before Square can process it (send it to the customer's email address or charge the customer’s card on file).
     */
    createInvoice(req: shared.CreateInvoiceRequest, security: operations.CreateInvoiceSecurity, config?: AxiosRequestConfig): Promise<operations.CreateInvoiceResponse>;
    /**
     * DeleteInvoice
     *
     * @remarks
     * Deletes the specified invoice. When an invoice is deleted, the
     * associated order status changes to CANCELED. You can only delete a draft
     * invoice (you cannot delete a published invoice, including one that is scheduled for processing).
     */
    deleteInvoice(req: operations.DeleteInvoiceRequest, security: operations.DeleteInvoiceSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteInvoiceResponse>;
    /**
     * GetInvoice
     *
     * @remarks
     * Retrieves an invoice by invoice ID.
     */
    getInvoice(req: operations.GetInvoiceRequest, security: operations.GetInvoiceSecurity, config?: AxiosRequestConfig): Promise<operations.GetInvoiceResponse>;
    /**
     * ListInvoices
     *
     * @remarks
     * Returns a list of invoices for a given location. The response
     * is paginated. If truncated, the response includes a `cursor` that you
     * use in a subsequent request to retrieve the next set of invoices.
     */
    listInvoices(req: operations.ListInvoicesRequest, security: operations.ListInvoicesSecurity, config?: AxiosRequestConfig): Promise<operations.ListInvoicesResponse>;
    /**
     * PublishInvoice
     *
     * @remarks
     * Publishes the specified draft invoice.
     *
     * After an invoice is published, Square
     * follows up based on the invoice configuration. For example, Square
     * sends the invoice to the customer's email address, charges the customer's card on file, or does
     * nothing. Square also makes the invoice available on a Square-hosted invoice page.
     *
     * The invoice `status` also changes from `DRAFT` to a status
     * based on the invoice configuration. For example, the status changes to `UNPAID` if
     * Square emails the invoice or `PARTIALLY_PAID` if Square charge a card on file for a portion of the
     * invoice amount.
     */
    publishInvoice(req: operations.PublishInvoiceRequest, security: operations.PublishInvoiceSecurity, config?: AxiosRequestConfig): Promise<operations.PublishInvoiceResponse>;
    /**
     * SearchInvoices
     *
     * @remarks
     * Searches for invoices from a location specified in
     * the filter. You can optionally specify customers in the filter for whom to
     * retrieve invoices. In the current implementation, you can only specify one location and
     * optionally one customer.
     *
     * The response is paginated. If truncated, the response includes a `cursor`
     * that you use in a subsequent request to retrieve the next set of invoices.
     */
    searchInvoices(req: shared.SearchInvoicesRequest, security: operations.SearchInvoicesSecurity, config?: AxiosRequestConfig): Promise<operations.SearchInvoicesResponse>;
    /**
     * UpdateInvoice
     *
     * @remarks
     * Updates an invoice by modifying fields, clearing fields, or both. For most updates, you can use a sparse
     * `Invoice` object to add fields or change values and use the `fields_to_clear` field to specify fields to clear.
     * However, some restrictions apply. For example, you cannot change the `order_id` or `location_id` field and you
     * must provide the complete `custom_fields` list to update a custom field. Published invoices have additional restrictions.
     */
    updateInvoice(req: operations.UpdateInvoiceRequest, security: operations.UpdateInvoiceSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateInvoiceResponse>;
}
