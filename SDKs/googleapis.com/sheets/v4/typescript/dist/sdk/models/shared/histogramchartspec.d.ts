import { SpeakeasyBase } from "../../../internal/utils";
import { HistogramSeries } from "./histogramseries";
/**
 * The position of the chart legend.
 */
export declare enum HistogramChartSpecLegendPositionEnum {
    HistogramChartLegendPositionUnspecified = "HISTOGRAM_CHART_LEGEND_POSITION_UNSPECIFIED",
    BottomLegend = "BOTTOM_LEGEND",
    LeftLegend = "LEFT_LEGEND",
    RightLegend = "RIGHT_LEGEND",
    TopLegend = "TOP_LEGEND",
    NoLegend = "NO_LEGEND",
    InsideLegend = "INSIDE_LEGEND"
}
/**
 * A histogram chart. A histogram chart groups data items into bins, displaying each bin as a column of stacked items. Histograms are used to display the distribution of a dataset. Each column of items represents a range into which those items fall. The number of bins can be chosen automatically or specified explicitly.
 */
export declare class HistogramChartSpec extends SpeakeasyBase {
    /**
     * By default the bucket size (the range of values stacked in a single column) is chosen automatically, but it may be overridden here. E.g., A bucket size of 1.5 results in buckets from 0 - 1.5, 1.5 - 3.0, etc. Cannot be negative. This field is optional.
     */
    bucketSize?: number;
    /**
     * The position of the chart legend.
     */
    legendPosition?: HistogramChartSpecLegendPositionEnum;
    /**
     * The outlier percentile is used to ensure that outliers do not adversely affect the calculation of bucket sizes. For example, setting an outlier percentile of 0.05 indicates that the top and bottom 5% of values when calculating buckets. The values are still included in the chart, they will be added to the first or last buckets instead of their own buckets. Must be between 0.0 and 0.5.
     */
    outlierPercentile?: number;
    /**
     * The series for a histogram may be either a single series of values to be bucketed or multiple series, each of the same length, containing the name of the series followed by the values to be bucketed for that series.
     */
    series?: HistogramSeries[];
    /**
     * Whether horizontal divider lines should be displayed between items in each column.
     */
    showItemDividers?: boolean;
}
