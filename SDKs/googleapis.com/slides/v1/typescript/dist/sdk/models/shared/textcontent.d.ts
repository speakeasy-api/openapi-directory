import { SpeakeasyBase } from "../../../internal/utils";
import { List } from "./list";
import { TextElement } from "./textelement";
/**
 * The general text content. The text must reside in a compatible shape (e.g. text box or rectangle) or a table cell in a page.
 */
export declare class TextContent extends SpeakeasyBase {
    /**
     * The bulleted lists contained in this text, keyed by list ID.
     */
    lists?: Record<string, List>;
    /**
     * The text contents broken down into its component parts, including styling information. This property is read-only.
     */
    textElements?: TextElement[];
}
