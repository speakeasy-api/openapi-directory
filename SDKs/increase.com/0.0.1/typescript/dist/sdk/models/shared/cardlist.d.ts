import { SpeakeasyBase } from "../../../internal/utils";
import { Card } from "./card";
/**
 * A list of Card objects
 */
export declare class CardList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: Card[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
