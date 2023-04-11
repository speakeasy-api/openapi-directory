import { SpeakeasyBase } from "../../../internal/utils";
import { CheckTransfer } from "./checktransfer";
/**
 * A list of Check Transfer objects
 */
export declare class CheckTransferList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: CheckTransfer[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
