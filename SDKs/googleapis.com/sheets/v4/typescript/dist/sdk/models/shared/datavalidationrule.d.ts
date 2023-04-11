import { SpeakeasyBase } from "../../../internal/utils";
import { BooleanCondition } from "./booleancondition";
/**
 * A data validation rule.
 */
export declare class DataValidationRule extends SpeakeasyBase {
    /**
     * A condition that can evaluate to true or false. BooleanConditions are used by conditional formatting, data validation, and the criteria in filters.
     */
    condition?: BooleanCondition;
    /**
     * A message to show the user when adding data to the cell.
     */
    inputMessage?: string;
    /**
     * True if the UI should be customized based on the kind of condition. If true, "List" conditions will show a dropdown.
     */
    showCustomUi?: boolean;
    /**
     * True if invalid data should be rejected.
     */
    strict?: boolean;
}
