import { SpeakeasyBase } from "../../../internal/utils";
import { ConditionalFormatRule } from "./conditionalformatrule";
/**
 * Adds a new conditional format rule at the given index. All subsequent rules' indexes are incremented.
 */
export declare class AddConditionalFormatRuleRequest extends SpeakeasyBase {
    /**
     * The zero-based index where the rule should be inserted.
     */
    index?: number;
    /**
     * A rule describing a conditional format.
     */
    rule?: ConditionalFormatRule;
}
