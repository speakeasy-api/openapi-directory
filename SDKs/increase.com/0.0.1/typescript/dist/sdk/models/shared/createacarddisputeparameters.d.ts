import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateACardDisputeParameters extends SpeakeasyBase {
    /**
     * The Transaction you wish to dispute. This Transaction must have a `source_type` of `card_settlement`.
     */
    disputedTransactionId: string;
    /**
     * Why you are disputing this Transaction.
     */
    explanation: string;
}
