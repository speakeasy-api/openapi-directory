import { SpeakeasyBase } from "../../../internal/utils";
import { CardActions } from "./cardactions";
import { CardDisplayBody } from "./carddisplaybody";
import { CardFetchBody } from "./cardfetchbody";
/**
 * Current state of Card Definition
 */
export declare class CardResponse extends SpeakeasyBase {
    /**
     * Configuration for custom user actions on cards.
     */
    actions: CardActions;
    /**
     * When this card was created.
     */
    createdAt?: Date;
    /**
     * Configuration for displayed info on a card
     */
    display: CardDisplayBody;
    /**
     * Configuration for this card's data fetch request.
     */
    fetch: CardFetchBody;
    /**
     * Generated unique ID for card.
     */
    id: string;
    /**
     * Displayed title of this card.
     */
    title: string;
    /**
     * The last time this card was updated.
     */
    updatedAt?: Date;
}
