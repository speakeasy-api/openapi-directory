import { SpeakeasyBase } from "../../../internal/utils";
import { WireTransfer } from "./wiretransfer";
/**
 * A list of Wire Transfer objects
 */
export declare class WireTransferList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: WireTransfer[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
