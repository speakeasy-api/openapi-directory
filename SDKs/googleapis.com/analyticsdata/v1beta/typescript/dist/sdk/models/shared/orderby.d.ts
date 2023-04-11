import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionOrderBy } from "./dimensionorderby";
import { MetricOrderBy } from "./metricorderby";
import { PivotOrderBy } from "./pivotorderby";
/**
 * Order bys define how rows will be sorted in the response. For example, ordering rows by descending event count is one ordering, and ordering rows by the event name string is a different ordering.
 */
export declare class OrderBy extends SpeakeasyBase {
    /**
     * If true, sorts by descending order.
     */
    desc?: boolean;
    /**
     * Sorts by dimension values.
     */
    dimension?: DimensionOrderBy;
    /**
     * Sorts by metric values.
     */
    metric?: MetricOrderBy;
    /**
     * Sorts by a pivot column group.
     */
    pivot?: PivotOrderBy;
}
