import { SpeakeasyBase } from "../../../internal/utils";
import { ConditionalFormatRule } from "./conditionalformatrule";
/**
 * The result of updating a conditional format rule.
 */
export declare class UpdateConditionalFormatRuleResponse extends SpeakeasyBase {
    /**
     * The index of the new rule.
     */
    newIndex?: number;
    /**
     * A rule describing a conditional format.
     */
    newRule?: ConditionalFormatRule;
    /**
     * The old index of the rule. Not set if a rule was replaced (because it is the same as new_index).
     */
    oldIndex?: number;
    /**
     * A rule describing a conditional format.
     */
    oldRule?: ConditionalFormatRule;
}
