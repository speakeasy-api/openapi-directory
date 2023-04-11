import { SpeakeasyBase } from "../../../internal/utils";
import { AccountTransfer } from "./accounttransfer";
/**
 * A list of Account Transfer objects
 */
export declare class AccountTransferList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: AccountTransfer[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
