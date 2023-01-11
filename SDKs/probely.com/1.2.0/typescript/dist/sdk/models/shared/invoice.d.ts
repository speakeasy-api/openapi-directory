import { SpeakeasyBase } from "../../../internal/utils";
export declare class InvoiceDiscounts extends SpeakeasyBase {
    amount?: number;
    description?: string;
}
export declare class InvoiceLineItems extends SpeakeasyBase {
    amount?: number;
    description?: string;
    discountAmount?: number;
    quantity?: number;
    taxAmount?: number;
    unitAmount?: number;
}
export declare class InvoiceTaxes extends SpeakeasyBase {
    taxAmount?: number;
    taxName?: string;
    taxRate?: number;
}
export declare class Invoice extends SpeakeasyBase {
    amountDue?: number;
    amountPaid?: number;
    currencyCode?: string;
    discounts?: InvoiceDiscounts[];
    lineItems?: InvoiceLineItems[];
    plan?: string;
    planId?: string;
    subTotal?: number;
    taxes?: InvoiceTaxes[];
    total?: number;
}
