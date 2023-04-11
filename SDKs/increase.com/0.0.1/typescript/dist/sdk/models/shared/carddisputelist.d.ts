import { SpeakeasyBase } from "../../../internal/utils";
import { CardDispute } from "./carddispute";
/**
 * A list of Card Dispute objects
 */
export declare class CardDisputeList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: CardDispute[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
