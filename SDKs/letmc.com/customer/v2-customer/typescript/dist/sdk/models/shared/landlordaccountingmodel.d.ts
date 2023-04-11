import { SpeakeasyBase } from "../../../internal/utils";
import { LandlordAccountingEntryModel } from "./landlordaccountingentrymodel";
import { LandlordAccountingInvoiceModel } from "./landlordaccountinginvoicemodel";
/**
 * Landlord Accounting
 */
export declare class LandlordAccountingModel extends SpeakeasyBase {
    /**
     * Account Balance
     */
    accountBalance?: number;
    /**
     * Last Payment Made
     */
    lastPayment?: Date;
    /**
     * Payment History
     */
    paymentHistory?: LandlordAccountingEntryModel[];
    /**
     * Statements
     */
    statements?: LandlordAccountingInvoiceModel[];
}
