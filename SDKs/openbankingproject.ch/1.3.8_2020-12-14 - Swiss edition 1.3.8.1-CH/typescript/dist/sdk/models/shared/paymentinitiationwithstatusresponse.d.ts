import { SpeakeasyBase } from "../../../internal/utils";
import { AccountReference16CH } from "./accountreference16ch";
import { Address } from "./address";
import { Amount } from "./amount";
import { CreditorAgent7CH } from "./creditoragent7ch";
import { PurposeCodeEnum } from "./purposecodeenum";
import { RemittanceInformationStructured } from "./remittanceinformationstructured";
import { TransactionStatusEnum } from "./transactionstatusenum";
/**
 * Generic JSON response body consistion of the corresponding payment initation JSON body together with an optional transaction status field.
 *
 * @remarks
 *
 */
export declare class PaymentInitiationWithStatusResponse extends SpeakeasyBase {
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
     * Creditor name.
     */
    creditorName: string;
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
    endToEndIdentification?: string;
    instructedAmount: Amount;
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
    /**
     * Array of unstructured remittance information.
     *
     * @remarks
     *
     */
    remittanceInformationUnstructuredArray?: string[];
    requestedExecutionDate?: Date;
    requestedExecutionTime?: Date;
    /**
     * The transaction status is filled with codes of the ISO 20022 data table:
     *
     * @remarks
     * - 'ACCC': 'AcceptedSettlementCompleted' -
     *   Settlement on the creditor's account has been completed.
     * - 'ACCP': 'AcceptedCustomerProfile' -
     *   Preceding check of technical validation was successful.
     *   Customer profile check was also successful.
     * - 'ACSC': 'AcceptedSettlementCompleted' -
     *   Settlement on the debtoro?=s account has been completed.
     *
     *   **Usage:** this can be used by the first agent to report to the debtor that the transaction has been completed.
     *
     *   **Warning:** this status is provided for transaction status reasons, not for financial information.
     *   It can only be used after bilateral agreement.
     * - 'ACSP': 'AcceptedSettlementInProcess' -
     *   All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution.
     * - 'ACTC': 'AcceptedTechnicalValidation' -
     *   Authentication and syntactical and semantical validation are successful.
     * - 'ACWC': 'AcceptedWithChange' -
     *   Instruction is accepted but a change will be made, such as date or remittance not sent.
     * - 'ACWP': 'AcceptedWithoutPosting' -
     *   Payment instruction included in the credit transfer is accepted without being posted to the creditor customero?=s account.
     * - 'RCVD': 'Received' -
     *   Payment initiation has been received by the receiving agent.
     * - 'PDNG': 'Pending' -
     *   Payment initiation or individual transaction included in the payment initiation is pending.
     *   Further checks and status update will be performed.
     * - 'RJCT': 'Rejected' -
     *   Payment initiation or individual transaction included in the payment initiation has been rejected.
     * - 'CANC': 'Cancelled'
     *   Payment initiation has been cancelled before execution
     *   Remark: This codeis accepted as new code by ISO20022.
     * - 'ACFC': 'AcceptedFundsChecked' -
     *   Preceding check of technical validation and customer profile was successful and an automatic funds check was positive .
     *   Remark: This code is accepted as new code by ISO20022.
     * - 'PATC': 'PartiallyAcceptedTechnical'
     *   Correct The payment initiation needs multiple authentications, where some but not yet all have been performed. Syntactical and semantical validations are successful.
     *   Remark: This code is accepted as new code by ISO20022.
     * - 'PART': 'PartiallyAccepted' -
     *   A number of transactions have been accepted, whereas another number of transactions have not yet achieved 'accepted' status.
     *   Remark: This code may be used only in case of bulk payments. It is only used in a situation where all mandated authorisations have been applied, but some payments have been rejected.
     *
     */
    transactionStatus?: TransactionStatusEnum;
    /**
     * Ultimate creditor.
     */
    ultimateCreditor?: string;
    /**
     * Ultimate debtor.
     */
    ultimateDebtor?: string;
}
