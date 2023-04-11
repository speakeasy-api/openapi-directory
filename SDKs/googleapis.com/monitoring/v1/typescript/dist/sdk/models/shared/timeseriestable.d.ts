import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnSettings } from "./columnsettings";
import { TableDataSet } from "./tabledataset";
/**
 * Optional. Store rendering strategy
 */
export declare enum TimeSeriesTableMetricVisualizationEnum {
    MetricVisualizationUnspecified = "METRIC_VISUALIZATION_UNSPECIFIED",
    Number = "NUMBER",
    Bar = "BAR"
}
/**
 * A table that displays time series data.
 */
export declare class TimeSeriesTable extends SpeakeasyBase {
    /**
     * Optional. The list of the persistent column settings for the table.
     */
    columnSettings?: ColumnSettings[];
    /**
     * Required. The data displayed in this table.
     */
    dataSets?: TableDataSet[];
    /**
     * Optional. Store rendering strategy
     */
    metricVisualization?: TimeSeriesTableMetricVisualizationEnum;
}
