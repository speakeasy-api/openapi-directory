import { SpeakeasyBase } from "../../../internal/utils";
export declare class SimulateARefundOnACardParameters extends SpeakeasyBase {
    /**
     * The identifier for the Transaction to refund. The Transaction's source must have a category of card_settlement.
     */
    transactionId: string;
}
