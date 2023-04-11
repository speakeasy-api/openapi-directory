import { SpeakeasyBase } from "../../../internal/utils";
import { BudgetSummary } from "./budgetsummary";
import { Date } from "./date";
import { DateRange } from "./daterange";
/**
 * The type of invoice document.
 */
export declare enum InvoiceInvoiceTypeEnum {
    InvoiceTypeUnspecified = "INVOICE_TYPE_UNSPECIFIED",
    InvoiceTypeCredit = "INVOICE_TYPE_CREDIT",
    InvoiceTypeInvoice = "INVOICE_TYPE_INVOICE"
}
/**
 * A single invoice.
 */
export declare class Invoice extends SpeakeasyBase {
    /**
     * The budget grouping ID for this invoice. This field will only be set if the invoice level of the corresponding billing profile was set to "Budget invoice grouping ID".
     */
    budgetInvoiceGroupingId?: string;
    /**
     * The list of summarized information for each budget associated with this invoice. This field will only be set if the invoice detail level of the corresponding billing profile was set to "Budget level PO".
     */
    budgetSummaries?: BudgetSummary[];
    /**
     * The ID of the original invoice being adjusted by this invoice, if applicable. May appear on the invoice PDF as `Reference invoice number`. If replaced_invoice_ids is set, this field will be empty.
     */
    correctedInvoiceId?: string;
    /**
     * The currency used in the invoice in ISO 4217 format.
     */
    currencyCode?: string;
    /**
     * The display name of the invoice.
     */
    displayName?: string;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    dueDate?: Date;
    /**
     * The unique ID of the invoice.
     */
    invoiceId?: string;
    /**
     * The type of invoice document.
     */
    invoiceType?: InvoiceInvoiceTypeEnum;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    issueDate?: Date;
    /**
     * The resource name of the invoice.
     */
    name?: string;
    /**
     * The total amount of costs or adjustments not tied to a particular budget, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar.
     */
    nonBudgetMicros?: string;
    /**
     * The ID of the payments account the invoice belongs to. Appears on the invoice PDF as `Billing Account Number`.
     */
    paymentsAccountId?: string;
    /**
     * The ID of the payments profile the invoice belongs to. Appears on the invoice PDF as `Billing ID`.
     */
    paymentsProfileId?: string;
    /**
     * The URL to download a PDF copy of the invoice. This URL is user specific and requires a valid OAuth 2.0 access token to access. The access token must be provided in an `Authorization: Bearer` HTTP header and be authorized for one of the following scopes: * `https://www.googleapis.com/auth/display-video-mediaplanning` * `https://www.googleapis.com/auth/display-video` The URL will be valid for 7 days after retrieval of this invoice object or until this invoice is retrieved again.
     */
    pdfUrl?: string;
    /**
     * Purchase order number associated with the invoice.
     */
    purchaseOrderNumber?: string;
    /**
     * The ID(s) of any originally issued invoice that is being cancelled by this invoice, if applicable. Multiple invoices may be listed if those invoices are being consolidated into a single invoice. May appear on invoice PDF as `Replaced invoice numbers`. If corrected_invoice_id is set, this field will be empty.
     */
    replacedInvoiceIds?: string[];
    /**
     * A date range.
     */
    serviceDateRange?: DateRange;
    /**
     * The pre-tax subtotal amount, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar.
     */
    subtotalAmountMicros?: string;
    /**
     * The invoice total amount, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar.
     */
    totalAmountMicros?: string;
    /**
     * The sum of all taxes in invoice, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar.
     */
    totalTaxAmountMicros?: string;
}
