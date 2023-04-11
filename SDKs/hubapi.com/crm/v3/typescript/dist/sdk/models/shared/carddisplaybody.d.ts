import { SpeakeasyBase } from "../../../internal/utils";
import { CardDisplayProperty } from "./carddisplayproperty";
/**
 * Configuration for displayed info on a card
 */
export declare class CardDisplayBody extends SpeakeasyBase {
    /**
     * Card display properties. These will will be rendered as "label : value" pairs in the card UI. See the [example card](#) in the overview docs for more details.
     */
    properties: CardDisplayProperty[];
}
