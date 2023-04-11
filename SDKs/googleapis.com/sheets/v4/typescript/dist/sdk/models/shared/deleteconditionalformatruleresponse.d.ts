import { SpeakeasyBase } from "../../../internal/utils";
import { ConditionalFormatRule } from "./conditionalformatrule";
/**
 * The result of deleting a conditional format rule.
 */
export declare class DeleteConditionalFormatRuleResponse extends SpeakeasyBase {
    /**
     * A rule describing a conditional format.
     */
    rule?: ConditionalFormatRule;
}
