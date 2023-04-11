import { SpeakeasyBase } from "../../../internal/utils";
import { CardActions } from "./cardactions";
import { CardDisplayBody } from "./carddisplaybody";
import { CardFetchBody } from "./cardfetchbody";
/**
 * State of card definition to be created
 */
export declare class CardCreateRequest extends SpeakeasyBase {
    /**
     * Configuration for custom user actions on cards.
     */
    actions: CardActions;
    /**
     * Configuration for displayed info on a card
     */
    display: CardDisplayBody;
    /**
     * Configuration for this card's data fetch request.
     */
    fetch: CardFetchBody;
    /**
     * The top-level title for this card. Displayed to users in the CRM UI.
     */
    title: string;
}
