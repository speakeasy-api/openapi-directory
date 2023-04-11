import { SpeakeasyBase } from "../../../internal/utils";
export declare class SimulateSettlingACardAuthorizationParameters extends SpeakeasyBase {
    /**
     * The amount to be settled. This defaults to the amount of the Pending Transaction being settled.
     */
    amount?: number;
    /**
     * The identifier of the Card to create a settlement on.
     */
    cardId: string;
    /**
     * The identifier of the Pending Transaction for the Card Authorization you wish to settle.
     */
    pendingTransactionId: string;
}
