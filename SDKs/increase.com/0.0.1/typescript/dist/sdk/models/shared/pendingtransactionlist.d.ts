import { SpeakeasyBase } from "../../../internal/utils";
import { PendingTransaction } from "./pendingtransaction";
/**
 * A list of Pending Transaction objects
 */
export declare class PendingTransactionList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: PendingTransaction[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
