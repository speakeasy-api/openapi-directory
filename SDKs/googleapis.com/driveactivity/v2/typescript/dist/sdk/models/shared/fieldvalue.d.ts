import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { Integer } from "./integer";
import { Selection } from "./selection";
import { SelectionList } from "./selectionlist";
import { SingleUser } from "./singleuser";
import { Text } from "./text";
import { TextList } from "./textlist";
import { UserList } from "./userlist";
/**
 * Contains a value of a Field.
 */
export declare class FieldValue extends SpeakeasyBase {
    /**
     * Wrapper for Date Field value.
     */
    date?: Date;
    /**
     * Wrapper for Integer Field value.
     */
    integer?: Integer;
    /**
     * Wrapper for Selection Field value as combined value/display_name pair for selected choice.
     */
    selection?: Selection;
    /**
     * Wrapper for SelectionList Field value.
     */
    selectionList?: SelectionList;
    /**
     * Wrapper for Text Field value.
     */
    text?: Text;
    /**
     * Wrapper for Text List Field value.
     */
    textList?: TextList;
    /**
     * Wrapper for User Field value.
     */
    user?: SingleUser;
    /**
     * Wrapper for UserList Field value.
     */
    userList?: UserList;
}
