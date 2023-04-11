import { SpeakeasyBase } from "../../../internal/utils";
import { AccountReference16CH } from "./accountreference16ch";
import { Address } from "./address";
import { Amount } from "./amount";
import { ChargeBearerEnum } from "./chargebearerenum";
import { CreditorAgent7CH } from "./creditoragent7ch";
import { DebtorAgent7CH } from "./debtoragent7ch";
import { ExchangeRateInformation1 } from "./exchangerateinformation1";
import { ExternalServiceLevel1CodeEnum } from "./externalservicelevel1codeenum";
import { PurposeCodeEnum } from "./purposecodeenum";
import { RemittanceInformationStructured } from "./remittanceinformationstructured";
/**
 * Generic Body for a payment initation via JSON.
 *
 * @remarks
 *
 * This generic JSON body can be used to represent valid payment initiations for the following JSON based payment product,
 * which where defined in the Implementation Guidelines:
 *
 *   * domestic-swiss-credit-transfers-isr
 *   * domestic-swiss-credit-transfers
 *   * domestic-swiss-credit-transfers-qr
 *   * domestic-swiss-foreign-credit-transfers
 *   * swiss-sepa-credit-transfers
 *   * swiss-cross-border-credit-transfers
 *
 * For the convenience of the implementer additional which are already predefinded in the Implementation Guidelines
 * are included (but commented in source code), such that an ASPSP may add them easily.
 *
 * Take care: Since the format is intended to fit for all payment products
 * there are additional conditions which are NOT covered by this specification.
 * Please check the SIX Swiss Payment Standards implementation guidelines for details.
 *
 *
 * The following data element are depending on the actual payment product available (in source code):
 *
 * <table style="width:100%">
 * <tr><td></td><td>Payment Type 1: ISR</td><td>Payment Type 3: IBAN/postal account and IID/BIC</td><td>Payment Type 3: QR-bill</td><td>Payment Type 4: Foreign currency</td><td>Payment Type 5: Foreign SEPA</td><td>Payment Type 6: Foreign</td></tr>
 * <tr><td>CH Domestic Data Element</td><td>domestic-swiss-credit-transfers-isr</td><td>domestic-swiss-credit-transfers</td><td>domestic-swiss-credit-transfers-qr</td><td>domestic-swiss-foreign-credit-transfers</td><td>swiss-sepa-credit-transfers</td><td>swiss-cross-border-credit-transfers</td></tr>
 * <tr><td>endToEndIdentification</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
 * <tr><td>instructionIdentification</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>
 * <tr><td>debtorAccount (incl. type)</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
 * <tr><td>debtorAgent</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>optional</td></tr>
 * <tr><td>debtorName</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
 * <tr><td>debtorId</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td></tr>
 * <tr><td>ultimateDebtor</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>
 * <tr><td>instructedAmount (incl. currency)</td><td>mandatory</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td></tr>
 * <tr><td>equivalentAmount</td><td>n.a.</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td></tr>
 * <tr><td>transactionCurrency</td><td>n.a.</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td></tr>
 * <tr><td>exchangeRateInformation</td><td>n.a.</td><td>optional 2)</td><td>optional 2)</td><td>optional 2)</td><td>optional 2)</td><td>optional 2)</td></tr>
 * <tr><td>creditorAccount</td><td>mandatory</td><td>mandatory</td><td>mandatory 8)</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
 * <tr><td>creditorAgent</td><td>n.a.</td><td>dependent 4)</td><td>dependent 4)</td><td>dependent 4)</td><td>dependent 4)</td><td>dependent 4)</td></tr>
 * <tr><td>creditorAgentName</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>dependent 5)</td><td>n.a.</td><td>dependent 5)</td></tr>
 * <tr><td>creditorName</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
 * <tr><td>creditorId</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>
 * <tr><td>creditorAddress</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>
 * <tr><td>creditorNameAndAddress</td><td>n.a.</td><td>dependent</td><td>dependent</td><td>dependent</td><td>dependent</td><td>dependent</td></tr>
 * <tr><td>ultimateCreditor</td><td>n.a.</td><td>optional</td><td>n.a. (for future use)</td><td>optional</td><td>optional</td><td>optional</td></tr>
 * <tr><td>chargeBearer</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td><td>mandatory</td><td>optional</td></tr>
 * <tr><td>purposeCode</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>
 * <tr><td>serviceLevel</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td><td>mandatory</td><td>optional</td></tr>
 * <tr><td>remittanceInformationUnstructured</td><td>n.a.</td><td>optional</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td></tr>
 * <tr><td>remittanceInformationUnstructuredArray</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>
 * <tr><td>remittanceInformationStructured</td><td>mandatory</td><td>optional</td><td>mandatory 6)</td><td>optional</td><td>optional</td><td>optional</td></tr>
 * <tr><td>remittanceInformationStructuredArray</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>
 * <tr><td>requestedExecutionDate</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>
 * <tr><td>requestedExecutionTime</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>
 * <tr><td>intermediaryAgent</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>optional 2)</td><td>n.a.</td><td>optional 2)</td></tr>
 * </table>
 *
 * Footnotes from the table:
 * 1) This element may only be used by agreement with the instructed financial institution.
 * 2) The element may only be used in consultation with the financial institution commissioned.
 * 3) The element is currently ignored by financial institutions.
 * 4) Dependence on creditorAccount, see SIX Swiss Payments Standards implementation guidelines.
 * 5) Type 4(V3), 6(V2, V3): Must be present. Type 4(V2): May be present. Other species: May not be present.
 * 6) QR-reference, creditor reference or IPI reference
 * 7) transactionCurrency is a subfield of equivalentAmount and may only be used if equivalentAmount is used instead of instructedAmount.
 * 8) QR-IBAN (CH/LI) must be present.
 *
 * IMPORTANT: In this API definition the following holds:
 *   *  All data elements mentioned above are defined, but some of them are commented,
 *     i.e. they are only visible in the source code and can be used by uncommenting them.
 *   * Data elements which are mandatory in the table above for all payment products
 *     are set to be mandatory in this specification.
 *   * Data elements which are indicated in the table above as n.a. for all payment products are commented in the source code.
 *   * Data elements which are indicated to be option, conditional or mandatory for at least one payment product
 *     in the table above are set to be optional in the s specification except the case where all are definde to be mandatory.
 *   * Data element which are inticated to be n.a. can be used by the ASPS if needed.
 *     In this case uncomment tthe the relatetd lines in the source code.
 *   * If one uses this data types for some payment products he has to ensure that the used data type is
 *     valid according to the underlying payment product, e.g. by some appropriate validations.
 *
 */
export declare class PaymentInitiationJson extends SpeakeasyBase {
    /**
     * Charge Bearer. ChargeBearerType1Code from ISO20022.
     */
    chargeBearer?: ChargeBearerEnum;
    /**
     * Reference to an account by either
     *
     * @remarks
     *   * IBAN, of a payment accounts, or
     *   * otherAccountIdentification, for payment accounts if there is no IBAN
     * adapted from ISO pain.001.001.03.ch.02 CashAccount16-CH_IdTpCcy
     *
     */
    creditorAccount: AccountReference16CH;
    creditorAddress?: Address;
    /**
     * Reference to an creditorAgent by either
     *
     * @remarks
     *   * BIC, of the creditor bank, or
     *   * IID, of the creditor bank, or
     *   * IID and optional name and address of the creditor bank or
     *   * Name and address of the creditor bank
     * adapted from ISO pain.001.001.03.ch.02 FinancialInstitutionIdentification7-CH
     *
     */
    creditorAgent?: CreditorAgent7CH;
    /**
     * Creditor agent name.
     */
    creditorAgentName?: string;
    /**
     * Identification of Creditors, e.g. a SEPA Creditor ID.
     */
    creditorId?: string;
    /**
     * Creditor name.
     */
    creditorName: string;
    /**
     * Creditor Name and Address in a free text field.
     */
    creditorNameAndAddress?: string;
    /**
     * Reference to an account by either
     *
     * @remarks
     *   * IBAN, of a payment accounts, or
     *   * otherAccountIdentification, for payment accounts if there is no IBAN
     * adapted from ISO pain.001.001.03.ch.02 CashAccount16-CH_IdTpCcy
     *
     */
    debtorAccount: AccountReference16CH;
    /**
     * Reference to an debtorAgent by either
     *
     * @remarks
     *   * BIC, of the debtor bank, or
     *   * IID, of the debtor bank
     * adapted from ISO pain.001.001.03.ch.02 FinancialInstitutionIdentification7-CH_BicOrClrId
     *
     */
    debtorAgent?: DebtorAgent7CH;
    /**
     * Debtor Id.
     */
    debtorId?: string;
    /**
     * Debtor name.
     */
    debtorName: string;
    endToEndIdentification: string;
    equivalentAmount?: Amount;
    /**
     * as in ISO pain.001.001.03.ch.02 ExchangeRateInformation1
     */
    exchangeRateInformation?: ExchangeRateInformation1;
    instructedAmount?: Amount;
    /**
     * BICFI
     *
     * @remarks
     *
     */
    intermediaryAgent?: string;
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
     * Unstructured remittance information.
     *
     * @remarks
     *
     */
    remittanceInformationUnstructured?: string;
    requestedExecutionDate: Date;
    /**
     * Specifies the external service level code in the format of character string with a maximum length of 4 characters.
     */
    serviceLevel?: ExternalServiceLevel1CodeEnum;
    /**
     * ISO 4217 Alpha 3 currency code.
     *
     * @remarks
     *
     */
    transactionCurrency?: string;
    /**
     * Ultimate creditor.
     */
    ultimateCreditor?: string;
    /**
     * Ultimate debtor.
     */
    ultimateDebtor?: string;
}
