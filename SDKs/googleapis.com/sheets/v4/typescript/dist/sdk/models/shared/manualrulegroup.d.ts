import { SpeakeasyBase } from "../../../internal/utils";
import { ExtendedValue } from "./extendedvalue";
/**
 * A group name and a list of items from the source data that should be placed in the group with this name.
 */
export declare class ManualRuleGroup extends SpeakeasyBase {
    /**
     * The kinds of value that a cell in a spreadsheet can have.
     */
    groupName?: ExtendedValue;
    /**
     * The items in the source data that should be placed into this group. Each item may be a string, number, or boolean. Items may appear in at most one group within a given ManualRule. Items that do not appear in any group will appear on their own.
     */
    items?: ExtendedValue[];
}
