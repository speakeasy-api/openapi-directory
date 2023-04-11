import { SpeakeasyBase } from "../../../internal/utils";
import { CardAction } from "./cardaction";
import { CardHeader } from "./cardheader";
import { Section } from "./section";
/**
 * A card is a UI element that can contain UI widgets such as texts, images.
 */
export declare class Card extends SpeakeasyBase {
    /**
     * The actions of this card.
     */
    cardActions?: CardAction[];
    header?: CardHeader;
    /**
     * Name of the card.
     */
    name?: string;
    /**
     * Sections are separated by a line divider.
     */
    sections?: Section[];
}
