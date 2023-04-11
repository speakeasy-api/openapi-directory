import { SpeakeasyBase } from "../../../internal/utils";
import { CardActions } from "./cardactions";
import { CardDisplayBody } from "./carddisplaybody";
import { CardFetchBodyPatch } from "./cardfetchbodypatch";
/**
 * Body for a patch with optional fields
 */
export declare class CardPatchRequest extends SpeakeasyBase {
    /**
     * Configuration for custom user actions on cards.
     */
    actions?: CardActions;
    /**
     * Configuration for displayed info on a card
     */
    display?: CardDisplayBody;
    /**
     * Variant of CardFetchBody with fields as optional for patches
     */
    fetch?: CardFetchBodyPatch;
    /**
     * The top-level title for this card. Displayed to users in the CRM UI.
     */
    title?: string;
}
