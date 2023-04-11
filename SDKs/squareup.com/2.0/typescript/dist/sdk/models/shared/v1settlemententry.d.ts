import { SpeakeasyBase } from "../../../internal/utils";
import { V1Money } from "./v1money";
/**
 * V1SettlementEntry
 */
export declare class V1SettlementEntry extends SpeakeasyBase {
    amountMoney?: V1Money;
    feeMoney?: V1Money;
    /**
     * The settlement's unique identifier.
     */
    paymentId?: string;
    /**
     * The settlement's current status.
     */
    type?: string;
}
