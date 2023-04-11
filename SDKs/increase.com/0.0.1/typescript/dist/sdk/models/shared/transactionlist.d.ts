import { SpeakeasyBase } from "../../../internal/utils";
import { Transaction } from "./transaction";
/**
 * A list of Transaction objects
 */
export declare class TransactionList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: Transaction[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
