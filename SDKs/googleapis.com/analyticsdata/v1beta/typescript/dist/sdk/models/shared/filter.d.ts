import { SpeakeasyBase } from "../../../internal/utils";
import { BetweenFilter } from "./betweenfilter";
import { InListFilter } from "./inlistfilter";
import { NumericFilter } from "./numericfilter";
import { StringFilter } from "./stringfilter";
/**
 * An expression to filter dimension or metric values.
 */
export declare class Filter extends SpeakeasyBase {
    /**
     * To express that the result needs to be between two numbers (inclusive).
     */
    betweenFilter?: BetweenFilter;
    /**
     * The dimension name or metric name. In most methods, dimensions & metrics can be used for the first time in this field. However in a RunPivotReportRequest, this field must be additionally specified by name in the RunPivotReportRequest's dimensions or metrics.
     */
    fieldName?: string;
    /**
     * The result needs to be in a list of string values.
     */
    inListFilter?: InListFilter;
    /**
     * Filters for numeric or date values.
     */
    numericFilter?: NumericFilter;
    /**
     * The filter for string
     */
    stringFilter?: StringFilter;
}
