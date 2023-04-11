import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a bank account. For more information about
 *
 * @remarks
 * linking a bank account to a Square account, see
 * [Bank Accounts API](https://developer.squareup.com/docs/bank-accounts-api).
 */
export declare class BankAccount extends SpeakeasyBase {
    /**
     * The last few digits of the account number.
     */
    accountNumberSuffix: string;
    /**
     * The financial purpose of the associated bank account.
     */
    accountType: string;
    /**
     * Read only. Name of actual financial institution.
     *
     * @remarks
     * For example "Bank of America".
     */
    bankName?: string;
    /**
     * The ISO 3166 Alpha-2 country code where the bank account is based.
     */
    country: string;
    /**
     * Indicates whether it is possible for Square to send money to this bank account.
     */
    creditable: boolean;
    /**
     * The 3-character ISO 4217 currency code indicating the operating
     *
     * @remarks
     * currency of the bank account. For example, the currency code for US dollars
     * is `USD`.
     */
    currency: string;
    /**
     * Reference identifier that will be displayed to UK bank account owners
     *
     * @remarks
     * when collecting direct debit authorization. Only required for UK bank accounts.
     */
    debitMandateReferenceId?: string;
    /**
     * Indicates whether it is possible for Square to take money from this
     *
     * @remarks
     * bank account.
     */
    debitable: boolean;
    /**
     * A Square-assigned, unique identifier for the bank account based on the
     *
     * @remarks
     * account information. The account fingerprint can be used to compare account
     * entries and determine if the they represent the same real-world bank account.
     */
    fingerprint?: string;
    /**
     * Name of the account holder. This name must match the name
     *
     * @remarks
     * on the targeted bank account record.
     */
    holderName: string;
    /**
     * The unique, Square-issued identifier for the bank account.
     */
    id: string;
    /**
     * The location to which the bank account belongs.
     */
    locationId?: string;
    /**
     * Primary identifier for the bank. For more information, see
     *
     * @remarks
     * [Bank Accounts API](https://developer.squareup.com/docs/bank-accounts-api).
     */
    primaryBankIdentificationNumber: string;
    /**
     * Client-provided identifier for linking the banking account to an entity
     *
     * @remarks
     * in a third-party system (for example, a bank account number or a user identifier).
     */
    referenceId?: string;
    /**
     * Secondary identifier for the bank. For more information, see
     *
     * @remarks
     * [Bank Accounts API](https://developer.squareup.com/docs/bank-accounts-api).
     */
    secondaryBankIdentificationNumber?: string;
    /**
     * Read-only. The current verification status of this BankAccount object.
     */
    status: string;
    /**
     * The current version of the `BankAccount`.
     */
    version?: number;
}
