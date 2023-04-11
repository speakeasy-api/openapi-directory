import { SpeakeasyBase } from "../../../internal/utils";
import { AccountReference16CH } from "./accountreference16ch";
import { AdditionalInformationStructured } from "./additionalinformationstructured";
import { Amount } from "./amount";
import { Balance } from "./balance";
import { EntryDetailsElement } from "./entrydetailselement";
import { HrefType } from "./hreftype";
import { PurposeCodeEnum } from "./purposecodeenum";
import { RemittanceInformationStructured } from "./remittanceinformationstructured";
import { ReportExchangeRate } from "./reportexchangerate";
/**
 * Transaction details.
 */
export declare class Transactions extends SpeakeasyBase {
    links?: Record<string, HrefType>;
    /**
     * Might be used by the ASPSP to transport additional transaction related information to the PSU
     *
     * @remarks
     *
     */
    additionalInformation?: string;
    /**
     * Is used if and only if the bookingStatus entry equals "information".
     *
     * @remarks
     * Every active standing order related to the dedicated payment account result into one entry.
     *
     */
    additionalInformationStructured?: AdditionalInformationStructured;
    /**
     * A single balance element.
     *
     * @remarks
     *
     */
    balanceAfterTransaction?: Balance;
    /**
     * Bank transaction code as used by the ASPSP and using the sub elements of this structured code defined by ISO 20022.
     *
     * @remarks
     *
     * This code type is concatenating the three ISO20022 Codes
     *   * Domain Code,
     *   * Family Code, and
     *   * SubFamiliy Code
     * by hyphens, resulting in 'DomainCode'-'FamilyCode'-'SubFamilyCode'.
     *
     */
    bankTransactionCode?: string;
    /**
     * If this indicator equals true, then the related entry is a batch entry.
     *
     * @remarks
     *
     */
    batchIndicator?: boolean;
    /**
     * Shall be used if and only if the batchIndicator is contained and equals true.
     *
     * @remarks
     *
     */
    batchNumberOfTransactions?: number;
    /**
     * The date when an entry is posted to an account on the ASPSPs books.
     *
     * @remarks
     *
     */
    bookingDate?: Date;
    /**
     * Identification of a Cheque.
     */
    checkId?: string;
    /**
     * Reference to an account by either
     *
     * @remarks
     *   * IBAN, of a payment accounts, or
     *   * otherAccountIdentification, for payment accounts if there is no IBAN
     * adapted from ISO pain.001.001.03.ch.02 CashAccount16-CH_IdTpCcy
     *
     */
    creditorAccount?: AccountReference16CH;
    /**
     * BICFI
     *
     * @remarks
     *
     */
    creditorAgent?: string;
    /**
     * Identification of Creditors, e.g. a SEPA Creditor ID.
     */
    creditorId?: string;
    /**
     * Creditor name.
     */
    creditorName?: string;
    /**
     * Array of exchange rates.
     */
    currencyExchange?: ReportExchangeRate[];
    /**
     * Reference to an account by either
     *
     * @remarks
     *   * IBAN, of a payment accounts, or
     *   * otherAccountIdentification, for payment accounts if there is no IBAN
     * adapted from ISO pain.001.001.03.ch.02 CashAccount16-CH_IdTpCcy
     *
     */
    debtorAccount?: AccountReference16CH;
    /**
     * BICFI
     *
     * @remarks
     *
     */
    debtorAgent?: string;
    /**
     * Debtor name.
     */
    debtorName?: string;
    /**
     * Unique end to end identity.
     */
    endToEndId?: string;
    /**
     * Might be used by the ASPSP to transport details about transactions within a batch.
     *
     * @remarks
     *
     */
    entryDetails?: EntryDetailsElement[];
    /**
     * Is the identification of the transaction as used e.g. for reference for deltafunction on application level.
     *
     * @remarks
     * The same identification as for example used within camt.05x messages.
     *
     */
    entryReference?: string;
    /**
     * Identification of Mandates, e.g. a SEPA Mandate ID.
     */
    mandateId?: string;
    /**
     * Proprietary bank transaction code as used within a community or within an ASPSP e.g.
     *
     * @remarks
     * for MT94x based transaction reports.
     *
     */
    proprietaryBankTransactionCode?: string;
    /**
     * ExternalPurpose1Code from ISO 20022.
     *
     * @remarks
     *
     * Values from ISO 20022 External Code List ExternalCodeSets_1Q2018 June 2018.
     *
     */
    purposeCode?: PurposeCodeEnum;
    /**
     * Structured remittance information Max
     *
     * @remarks
     *
     */
    remittanceInformationStructured?: string;
    /**
     * Array of structured remittance information.
     *
     * @remarks
     *
     */
    remittanceInformationStructuredArray?: RemittanceInformationStructured[];
    /**
     * Unstructured remittance information.
     *
     * @remarks
     *
     */
    remittanceInformationUnstructured?: string;
    /**
     * Array of unstructured remittance information.
     *
     * @remarks
     *
     */
    remittanceInformationUnstructuredArray?: string[];
    transactionAmount: Amount;
    /**
     * This identification is given by the attribute transactionId of the corresponding entry of a transaction list.
     *
     * @remarks
     *
     */
    transactionId?: string;
    /**
     * Ultimate creditor.
     */
    ultimateCreditor?: string;
    /**
     * Ultimate debtor.
     */
    ultimateDebtor?: string;
    /**
     * The Date at which assets become available to the account owner in case of a credit.
     */
    valueDate?: Date;
}
