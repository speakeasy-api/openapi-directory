import { SpeakeasyBase } from "../../../internal/utils";
import { DeclinedTransaction } from "./declinedtransaction";
/**
 * A list of Declined Transaction objects
 */
export declare class DeclinedTransactionList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: DeclinedTransaction[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
