import { SpeakeasyBase } from "../../../internal/utils";
import { V1Money } from "./v1money";
import { V1SettlementEntry } from "./v1settlemententry";
/**
 * V1Settlement
 */
export declare class V1Settlement extends SpeakeasyBase {
    /**
     * The Square-issued unique identifier for the bank account associated with the settlement.
     */
    bankAccountId?: string;
    /**
     * The entries included in this settlement.
     */
    entries?: V1SettlementEntry[];
    /**
     * The settlement's unique identifier.
     */
    id?: string;
    /**
     * The time when the settlement was submitted for deposit or withdrawal, in ISO 8601 format.
     */
    initiatedAt?: string;
    /**
     * The settlement's current status.
     */
    status?: string;
    totalMoney?: V1Money;
}
