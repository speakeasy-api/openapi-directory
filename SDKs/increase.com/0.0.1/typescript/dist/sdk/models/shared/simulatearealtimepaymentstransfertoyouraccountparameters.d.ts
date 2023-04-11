import { SpeakeasyBase } from "../../../internal/utils";
export declare class SimulateARealTimePaymentsTransferToYourAccountParameters extends SpeakeasyBase {
    /**
     * The identifier of the Account Number the inbound Real Time Payments Transfer is for.
     */
    accountNumberId: string;
    /**
     * The transfer amount in USD cents. Must be positive.
     */
    amount: number;
    /**
     * The account number of the account that sent the transfer.
     */
    debtorAccountNumber?: string;
    /**
     * The name provided by the sender of the transfer.
     */
    debtorName?: string;
    /**
     * The routing number of the account that sent the transfer.
     */
    debtorRoutingNumber?: string;
    /**
     * Additional information included with the transfer.
     */
    remittanceInformation?: string;
    /**
     * The identifier of a pending Request for Payment that this transfer will fulfill.
     */
    requestForPaymentId?: string;
}
