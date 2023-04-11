import { SpeakeasyBase } from "../../../internal/utils";
/**
 * General account information
 */
export declare class SandboxBankAccountInfo extends SpeakeasyBase {
    /**
     * Account's sub-type (ChargeCard, CreditCard, CurrentAccount ...)
     */
    accountSubType: string;
    /**
     * Account's type (Business, Personal)
     */
    accountType: string;
    /**
     * Account's alias
     */
    alias?: string;
    /**
     * Account's available balance
     */
    availableBalance?: number;
    /**
     * Currency (EUR, USD ...)
     */
    currency: string;
    /**
     * Account's description
     */
    description?: string;
    /**
     * Account's IBAN
     */
    iban: string;
    /**
     * Account's ledger balance
     */
    ledgerBalance?: number;
    /**
     * Account's opening date
     */
    openingDate?: Date;
    /**
     * Account's overdraft limit
     */
    overdraftLimit?: number;
}
