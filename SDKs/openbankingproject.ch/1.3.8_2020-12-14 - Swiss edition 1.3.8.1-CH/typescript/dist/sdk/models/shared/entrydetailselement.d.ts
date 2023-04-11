import { SpeakeasyBase } from "../../../internal/utils";
import { AccountReference16CH } from "./accountreference16ch";
import { Amount } from "./amount";
import { PurposeCodeEnum } from "./purposecodeenum";
import { RemittanceInformationStructured } from "./remittanceinformationstructured";
import { ReportExchangeRate } from "./reportexchangerate";
export declare class EntryDetailsElement extends SpeakeasyBase {
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
     * Identification of Mandates, e.g. a SEPA Mandate ID.
     */
    mandateId?: string;
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
     * Structured remittance information.
     *
     * @remarks
     *
     */
    remittanceInformationStructured?: RemittanceInformationStructured;
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
     * Ultimate creditor.
     */
    ultimateCreditor?: string;
    /**
     * Ultimate debtor.
     */
    ultimateDebtor?: string;
}
