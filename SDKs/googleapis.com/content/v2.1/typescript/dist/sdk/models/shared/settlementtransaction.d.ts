import { SpeakeasyBase } from "../../../internal/utils";
import { SettlementTransactionAmount } from "./settlementtransactionamount";
import { SettlementTransactionIdentifiers } from "./settlementtransactionidentifiers";
import { SettlementTransactionTransaction } from "./settlementtransactiontransaction";
/**
 * Settlement transactions give a detailed breakdown of the settlement report.
 */
export declare class SettlementTransaction extends SpeakeasyBase {
    amount?: SettlementTransactionAmount;
    identifiers?: SettlementTransactionIdentifiers;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#settlementTransaction`"
     */
    kind?: string;
    transaction?: SettlementTransactionTransaction;
}
