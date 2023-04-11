import { SpeakeasyBase } from "../../../internal/utils";
import { TextContent } from "./textcontent";
/**
 * A single list item in a note's list.
 */
export declare class ListItem extends SpeakeasyBase {
    /**
     * Whether this item has been checked off or not.
     */
    checked?: boolean;
    /**
     * If set, list of list items nested under this list item. Only one level of nesting is allowed.
     */
    childListItems?: ListItem[];
    /**
     * The block of text for a single text section or list item.
     */
    text?: TextContent;
}
