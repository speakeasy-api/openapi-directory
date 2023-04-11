import { SpeakeasyBase } from "../../../internal/utils";
import { BooleanCondition } from "./booleancondition";
/**
 * Criteria for showing/hiding rows in a pivot table.
 */
export declare class PivotFilterCriteria extends SpeakeasyBase {
    /**
     * A condition that can evaluate to true or false. BooleanConditions are used by conditional formatting, data validation, and the criteria in filters.
     */
    condition?: BooleanCondition;
    /**
     * Whether values are visible by default. If true, the visible_values are ignored, all values that meet condition (if specified) are shown. If false, values that are both in visible_values and meet condition are shown.
     */
    visibleByDefault?: boolean;
    /**
     * Values that should be included. Values not listed here are excluded.
     */
    visibleValues?: string[];
}
