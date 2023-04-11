import { SpeakeasyBase } from "../../../internal/utils";
import { ListItem } from "./listitem";
/**
 * The list of items for a single list note.
 */
export declare class ListContent extends SpeakeasyBase {
    /**
     * The items in the list. The number of items must be less than 1,000.
     */
    listItems?: ListItem[];
}
