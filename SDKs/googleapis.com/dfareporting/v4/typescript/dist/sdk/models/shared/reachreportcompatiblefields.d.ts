import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { Metric } from "./metric";
/**
 * Represents fields that are compatible to be selected for a report of type "REACH".
 */
export declare class ReachReportCompatibleFields extends SpeakeasyBase {
    /**
     * Dimensions which are compatible to be selected in the "dimensionFilters" section of the report.
     */
    dimensionFilters?: Dimension[];
    /**
     * Dimensions which are compatible to be selected in the "dimensions" section of the report.
     */
    dimensions?: Dimension[];
    /**
     * The kind of resource this is, in this case dfareporting#reachReportCompatibleFields.
     */
    kind?: string;
    /**
     * Metrics which are compatible to be selected in the "metricNames" section of the report.
     */
    metrics?: Metric[];
    /**
     * Metrics which are compatible to be selected as activity metrics to pivot on in the "activities" section of the report.
     */
    pivotedActivityMetrics?: Metric[];
    /**
     * Metrics which are compatible to be selected in the "reachByFrequencyMetricNames" section of the report.
     */
    reachByFrequencyMetrics?: Metric[];
}
