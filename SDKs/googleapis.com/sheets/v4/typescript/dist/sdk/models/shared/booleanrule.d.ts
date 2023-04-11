import { SpeakeasyBase } from "../../../internal/utils";
import { BooleanCondition } from "./booleancondition";
import { CellFormat } from "./cellformat";
/**
 * A rule that may or may not match, depending on the condition.
 */
export declare class BooleanRule extends SpeakeasyBase {
    /**
     * A condition that can evaluate to true or false. BooleanConditions are used by conditional formatting, data validation, and the criteria in filters.
     */
    condition?: BooleanCondition;
    /**
     * The format of a cell.
     */
    format?: CellFormat;
}
