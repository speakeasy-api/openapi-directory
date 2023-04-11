import { SpeakeasyBase } from "../../../internal/utils";
export declare class InvoiceDiscounts extends SpeakeasyBase {
    /**
     * Discounted amount in cents
     */
    amount?: number;
    /**
     * Discount description
     */
    description?: string;
}
export declare class InvoiceLineItems extends SpeakeasyBase {
    /**
     * Total amount in cents
     */
    amount?: number;
    /**
     * Charge description
     */
    description?: string;
    /**
     * Discount amount in cents
     */
    discountAmount?: number;
    /**
     * Units charged
     */
    quantity?: number;
    /**
     * Tax amount in cents
     */
    taxAmount?: number;
    /**
     * Price per unit in cents
     */
    unitAmount?: number;
}
export declare class InvoiceTaxes extends SpeakeasyBase {
    /**
     * Amount of tax in cents
     */
    taxAmount?: number;
    /**
     * Name of applied tax
     */
    taxName?: string;
    /**
     * Tax rate
     */
    taxRate?: number;
}
/**
 * Charges
 */
export declare class Invoice extends SpeakeasyBase {
    /**
     * Amount remaining to pay in cents
     */
    amountDue?: number;
    /**
     * Amount already paid in cents
     */
    amountPaid?: number;
    /**
     * 3 letter currency code
     */
    currencyCode?: string;
    discounts?: InvoiceDiscounts[];
    lineItems?: InvoiceLineItems[];
    /**
     * Plan name
     */
    plan?: string;
    /**
     * Current plan id
     */
    planId?: string;
    /**
     * Price before taxes in cents
     */
    subTotal?: number;
    taxes?: InvoiceTaxes[];
    /**
     * Price after taxes in cents
     */
    total?: number;
}
