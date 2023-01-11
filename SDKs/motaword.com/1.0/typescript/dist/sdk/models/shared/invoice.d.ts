import { SpeakeasyBase } from "../../../internal/utils";
import { BillingAddress } from "./billingaddress";
import { InvoiceLinks } from "./invoicelinks";
export declare class Invoice extends SpeakeasyBase {
    amount?: number;
    billing?: BillingAddress;
    currency?: string;
    id?: number;
    invoiceNo?: number;
    invoicedAt?: Date;
    links?: InvoiceLinks;
    status?: string;
}
