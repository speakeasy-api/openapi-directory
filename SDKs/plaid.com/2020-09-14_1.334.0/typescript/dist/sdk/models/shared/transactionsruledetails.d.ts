import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionsRuleFieldEnum } from "./transactionsrulefieldenum";
import { TransactionsRuleTypeEnum } from "./transactionsruletypeenum";
/**
 * A representation of transactions rule details.
 */
export declare class TransactionsRuleDetails extends SpeakeasyBase {
    /**
     * Transaction field for which the rule is defined.
     */
    field: TransactionsRuleFieldEnum;
    /**
     * For TRANSACTION_ID field, provide transaction_id. For NAME field, provide a string pattern.
     *
     * @remarks
     *
     */
    query: string;
    /**
     * Transaction rule's match type. For TRANSACTION_ID field, EXACT_MATCH is available.
     *
     * @remarks
     * Matches are case sensitive.
     *
     */
    type: TransactionsRuleTypeEnum;
}
