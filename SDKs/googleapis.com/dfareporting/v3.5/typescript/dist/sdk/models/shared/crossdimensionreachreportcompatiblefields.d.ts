import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { Metric } from "./metric";
/**
 * Represents fields that are compatible to be selected for a report of type "CROSS_DIMENSION_REACH".
 */
export declare class CrossDimensionReachReportCompatibleFields extends SpeakeasyBase {
    /**
     * Dimensions which are compatible to be selected in the "breakdown" section of the report.
     */
    breakdown?: Dimension[];
    /**
     * Dimensions which are compatible to be selected in the "dimensionFilters" section of the report.
     */
    dimensionFilters?: Dimension[];
    /**
     * The kind of resource this is, in this case dfareporting#crossDimensionReachReportCompatibleFields.
     */
    kind?: string;
    /**
     * Metrics which are compatible to be selected in the "metricNames" section of the report.
     */
    metrics?: Metric[];
    /**
     * Metrics which are compatible to be selected in the "overlapMetricNames" section of the report.
     */
    overlapMetrics?: Metric[];
}
