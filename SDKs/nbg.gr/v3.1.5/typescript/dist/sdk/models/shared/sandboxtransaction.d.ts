import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Transaction information
 */
export declare class SandboxTransaction extends SpeakeasyBase {
    /**
     * Balance
     */
    accountingBalance?: number;
    /**
     * Amount
     */
    amount?: number;
    /**
     * Booking date time
     */
    bookingDateTime?: Date;
    /**
     * Credit / Debit indicator
     */
    creditDebit?: string;
    /**
     * Currency (EUR, USD ...)
     */
    currency?: string;
    /**
     * Description
     */
    description?: string;
    /**
     * Transaction reference
     */
    reference?: string;
    /**
     * Related account
     */
    relatedAccount?: string;
    /**
     * Related account
     */
    relatedName?: string;
    /**
     * Transaction code
     */
    transactionCode?: string;
    /**
     * Valeur
     */
    valueDateTime?: Date;
}
