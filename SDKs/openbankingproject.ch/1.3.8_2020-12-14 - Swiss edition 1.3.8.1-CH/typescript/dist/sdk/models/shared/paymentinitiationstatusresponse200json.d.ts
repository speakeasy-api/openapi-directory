import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionStatusEnum } from "./transactionstatusenum";
/**
 * Body of the response for a successful payment initiation status request in case of an JSON based endpoint.
 */
export declare class PaymentInitiationStatusResponse200Json extends SpeakeasyBase {
    /**
     * Equals true if sufficient funds are available at the time of the request, false otherwise.
     *
     * @remarks
     *
     * This datalemenet is allways contained in a confirmation of funds response.
     *
     * This data element is contained in a payment status response,
     * if supported by the ASPSP, if a funds check has been performed and
     * if the transactionStatus is "ACTC", "ACWC" or "ACCP".
     *
     */
    fundsAvailable?: boolean;
    /**
     * Text to be displayed to the PSU.
     */
    psuMessage?: string;
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
    transactionStatus: TransactionStatusEnum;
}
