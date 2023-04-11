import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The type of sparkchart to show in this chartView.
 */
export declare enum SparkChartViewSparkChartTypeEnum {
    SparkChartTypeUnspecified = "SPARK_CHART_TYPE_UNSPECIFIED",
    SparkLine = "SPARK_LINE",
    SparkBar = "SPARK_BAR"
}
/**
 * A sparkChart is a small chart suitable for inclusion in a table-cell or inline in text. This message contains the configuration for a sparkChart to show up on a Scorecard, showing recent trends of the scorecard's timeseries.
 */
export declare class SparkChartView extends SpeakeasyBase {
    /**
     * The lower bound on data point frequency in the chart implemented by specifying the minimum alignment period to use in a time series query. For example, if the data is published once every 10 minutes it would not make sense to fetch and align data at one minute intervals. This field is optional and exists only as a hint.
     */
    minAlignmentPeriod?: string;
    /**
     * Required. The type of sparkchart to show in this chartView.
     */
    sparkChartType?: SparkChartViewSparkChartTypeEnum;
}
