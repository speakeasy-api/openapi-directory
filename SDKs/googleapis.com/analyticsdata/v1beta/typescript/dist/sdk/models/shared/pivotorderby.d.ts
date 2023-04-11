import { SpeakeasyBase } from "../../../internal/utils";
import { PivotSelection } from "./pivotselection";
/**
 * Sorts by a pivot column group.
 */
export declare class PivotOrderBy extends SpeakeasyBase {
    /**
     * In the response to order by, order rows by this column. Must be a metric name from the request.
     */
    metricName?: string;
    /**
     * Used to select a dimension name and value pivot. If multiple pivot selections are given, the sort occurs on rows where all pivot selection dimension name and value pairs match the row's dimension name and value pair.
     */
    pivotSelections?: PivotSelection[];
}
