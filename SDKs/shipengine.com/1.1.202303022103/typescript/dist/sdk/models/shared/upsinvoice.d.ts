import { SpeakeasyBase } from "../../../internal/utils";
/**
 * UPS invoice
 */
export declare class UpsInvoice extends SpeakeasyBase {
    /**
     * A string that uniquely identifies the control
     */
    controlId?: string;
    invoiceAmount?: number;
    invoiceCurrencyCode?: string;
    /**
     * invoice date
     */
    invoiceDate?: Date;
    /**
     * invoice number
     */
    invoiceNumber?: string;
}
