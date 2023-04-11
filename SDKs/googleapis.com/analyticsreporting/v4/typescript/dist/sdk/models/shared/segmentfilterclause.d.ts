import { SpeakeasyBase } from "../../../internal/utils";
import { SegmentDimensionFilter } from "./segmentdimensionfilter";
import { SegmentMetricFilter } from "./segmentmetricfilter";
/**
 * Filter Clause to be used in a segment definition, can be wither a metric or a dimension filter.
 */
export declare class SegmentFilterClause extends SpeakeasyBase {
    /**
     * Dimension filter specifies the filtering options on a dimension.
     */
    dimensionFilter?: SegmentDimensionFilter;
    /**
     * Metric filter to be used in a segment filter clause.
     */
    metricFilter?: SegmentMetricFilter;
    /**
     * Matches the complement (`!`) of the filter.
     */
    not?: boolean;
}
