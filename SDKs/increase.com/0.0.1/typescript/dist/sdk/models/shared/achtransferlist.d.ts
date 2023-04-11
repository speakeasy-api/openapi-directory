import { SpeakeasyBase } from "../../../internal/utils";
import { AchTransfer } from "./achtransfer";
/**
 * A list of ACH Transfer objects
 */
export declare class AchTransferList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: AchTransfer[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
