import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Deletes a conditional format rule at the given index. All subsequent rules' indexes are decremented.
 */
export declare class DeleteConditionalFormatRuleRequest extends SpeakeasyBase {
    /**
     * The zero-based index of the rule to be deleted.
     */
    index?: number;
    /**
     * The sheet the rule is being deleted from.
     */
    sheetId?: number;
}
