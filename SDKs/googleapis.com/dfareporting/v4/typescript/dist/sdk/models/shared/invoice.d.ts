import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignSummary } from "./campaignsummary";
/**
 * The type of invoice document.
 */
export declare enum InvoiceInvoiceTypeEnum {
    InvoiceTypeUnspecified = "INVOICE_TYPE_UNSPECIFIED",
    InvoiceTypeCredit = "INVOICE_TYPE_CREDIT",
    InvoiceTypeInvoice = "INVOICE_TYPE_INVOICE"
}
/**
 * Contains information about a single invoice
 */
export declare class Invoice extends SpeakeasyBase {
    /**
     * The list of summarized campaign information associated with this invoice.
     */
    campaignSummaries?: CampaignSummary[];
    /**
     * The originally issued invoice that is being adjusted by this invoice, if applicable. May appear on invoice PDF as *Reference invoice number*.
     */
    correctedInvoiceId?: string;
    /**
     * Invoice currency code in ISO 4217 format.
     */
    currencyCode?: string;
    /**
     * The invoice due date.
     */
    dueDate?: string;
    /**
     * ID of this invoice.
     */
    id?: string;
    /**
     * The type of invoice document.
     */
    invoiceType?: InvoiceInvoiceTypeEnum;
    /**
     * The date when the invoice was issued.
     */
    issueDate?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#invoice".
     */
    kind?: string;
    /**
     * The ID of the payments account the invoice belongs to. Appears on the invoice PDF as *Billing Account Number*.
     */
    paymentsAccountId?: string;
    /**
     * The ID of the payments profile the invoice belongs to. Appears on the invoice PDF as *Billing ID*.
     */
    paymentsProfileId?: string;
    /**
     * The URL to download a PDF copy of the invoice. Note that this URL is user specific and requires a valid OAuth 2.0 access token to access. The access token must be provided in an *Authorization: Bearer* HTTP header. The URL will only be usable for 7 days from when the api is called.
     */
    pdfUrl?: string;
    /**
     * Purchase order number associated with the invoice.
     */
    purchaseOrderNumber?: string;
    /**
     * The originally issued invoice(s) that is being cancelled by this invoice, if applicable. May appear on invoice PDF as *Replaced invoice numbers*. Note: There may be multiple replaced invoices due to consolidation of multiple invoices into a single invoice.
     */
    replacedInvoiceIds?: string[];
    /**
     * The invoice service end date.
     */
    serviceEndDate?: string;
    /**
     * The invoice service start date.
     */
    serviceStartDate?: string;
    /**
     * The pre-tax subtotal amount, in micros of the invoice's currency.
     */
    subtotalAmountMicros?: string;
    /**
     * The invoice total amount, in micros of the invoice's currency.
     */
    totalAmountMicros?: string;
    /**
     * The sum of all taxes in invoice, in micros of the invoice's currency.
     */
    totalTaxAmountMicros?: string;
}
