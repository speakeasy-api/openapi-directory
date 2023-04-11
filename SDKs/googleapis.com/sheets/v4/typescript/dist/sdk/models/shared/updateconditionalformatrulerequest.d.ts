import { SpeakeasyBase } from "../../../internal/utils";
import { ConditionalFormatRule } from "./conditionalformatrule";
/**
 * Updates a conditional format rule at the given index, or moves a conditional format rule to another index.
 */
export declare class UpdateConditionalFormatRuleRequest extends SpeakeasyBase {
    /**
     * The zero-based index of the rule that should be replaced or moved.
     */
    index?: number;
    /**
     * The zero-based new index the rule should end up at.
     */
    newIndex?: number;
    /**
     * A rule describing a conditional format.
     */
    rule?: ConditionalFormatRule;
    /**
     * The sheet of the rule to move. Required if new_index is set, unused otherwise.
     */
    sheetId?: number;
}
