import { SpeakeasyBase } from "../../../internal/utils";
import { ListContent } from "./listcontent";
import { TextContent } from "./textcontent";
/**
 * The content of the note.
 */
export declare class Section extends SpeakeasyBase {
    /**
     * The list of items for a single list note.
     */
    list?: ListContent;
    /**
     * The block of text for a single text section or list item.
     */
    text?: TextContent;
}
