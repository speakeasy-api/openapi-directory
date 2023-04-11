import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Invoices
 */
export declare class LandlordAccountingInvoiceModel extends SpeakeasyBase {
    /**
     * Payment Date
     */
    date?: Date;
    /**
     * Transaction Number
     */
    invoiceID?: string;
    /**
     * Does this invoice contain contractor payments?
     */
    isMaintenanceInvoice?: boolean;
}
