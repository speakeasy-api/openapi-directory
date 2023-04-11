import { SpeakeasyBase } from "../../../internal/utils";
import { BillingAddress } from "./billingaddress";
import { InvoiceLinks } from "./invoicelinks";
/**
 * Invoice
 */
export declare class Invoice extends SpeakeasyBase {
    /**
     * Monetary amount
     */
    amount?: number;
    /**
     * Monetary amount
     */
    baseAmount?: number;
    baseCurrency?: string;
    billing?: BillingAddress;
    currency?: string;
    id?: number;
    invoiceNo?: number;
    /**
     * the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z
     */
    invoicedAt?: Date;
    links?: InvoiceLinks;
    status?: string;
}
