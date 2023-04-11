import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionStatusSBSEnum } from "./transactionstatussbsenum";
/**
 * OK
 */
export declare class SigningBasketStatusResponse200 extends SpeakeasyBase {
    /**
     * The transaction status is filled with codes of the ISO 20022 data table.
     *
     * @remarks
     * Only the codes RCVD, PATC, ACTC, ACWC and RJCT are used:
     * - 'ACSP': 'AcceptedSettlementInProcess' -
     *   All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution.
     * - 'ACTC': 'AcceptedTechnicalValidation' -
     *   Authentication and syntactical and semantical validation are successful.
     * - 'ACWC': 'AcceptedWithChange' -
     *   Instruction is accepted but a change will be made, such as date or remittance not sent.
     * - 'RCVD': 'Received' -
     *   Payment initiation has been received by the receiving agent.
     * - 'RJCT': 'Rejected' -
     *   Payment initiation or individual transaction included in the payment initiation has been rejected.
     *
     */
    transactionStatus: TransactionStatusSBSEnum;
}
