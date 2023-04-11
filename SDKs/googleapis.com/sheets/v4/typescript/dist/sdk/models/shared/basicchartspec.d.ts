import { SpeakeasyBase } from "../../../internal/utils";
import { BasicChartAxis } from "./basicchartaxis";
import { BasicChartDomain } from "./basicchartdomain";
import { BasicChartSeries } from "./basicchartseries";
import { DataLabel } from "./datalabel";
/**
 * The type of the chart.
 */
export declare enum BasicChartSpecChartTypeEnum {
    BasicChartTypeUnspecified = "BASIC_CHART_TYPE_UNSPECIFIED",
    Bar = "BAR",
    Line = "LINE",
    Area = "AREA",
    Column = "COLUMN",
    Scatter = "SCATTER",
    Combo = "COMBO",
    SteppedArea = "STEPPED_AREA"
}
/**
 * The behavior of tooltips and data highlighting when hovering on data and chart area.
 */
export declare enum BasicChartSpecCompareModeEnum {
    BasicChartCompareModeUnspecified = "BASIC_CHART_COMPARE_MODE_UNSPECIFIED",
    Datum = "DATUM",
    Category = "CATEGORY"
}
/**
 * The position of the chart legend.
 */
export declare enum BasicChartSpecLegendPositionEnum {
    BasicChartLegendPositionUnspecified = "BASIC_CHART_LEGEND_POSITION_UNSPECIFIED",
    BottomLegend = "BOTTOM_LEGEND",
    LeftLegend = "LEFT_LEGEND",
    RightLegend = "RIGHT_LEGEND",
    TopLegend = "TOP_LEGEND",
    NoLegend = "NO_LEGEND"
}
/**
 * The stacked type for charts that support vertical stacking. Applies to Area, Bar, Column, Combo, and Stepped Area charts.
 */
export declare enum BasicChartSpecStackedTypeEnum {
    BasicChartStackedTypeUnspecified = "BASIC_CHART_STACKED_TYPE_UNSPECIFIED",
    NotStacked = "NOT_STACKED",
    Stacked = "STACKED",
    PercentStacked = "PERCENT_STACKED"
}
/**
 * The specification for a basic chart. See BasicChartType for the list of charts this supports.
 */
export declare class BasicChartSpec extends SpeakeasyBase {
    /**
     * The axis on the chart.
     */
    axis?: BasicChartAxis[];
    /**
     * The type of the chart.
     */
    chartType?: BasicChartSpecChartTypeEnum;
    /**
     * The behavior of tooltips and data highlighting when hovering on data and chart area.
     */
    compareMode?: BasicChartSpecCompareModeEnum;
    /**
     * The domain of data this is charting. Only a single domain is supported.
     */
    domains?: BasicChartDomain[];
    /**
     * The number of rows or columns in the data that are "headers". If not set, Google Sheets will guess how many rows are headers based on the data. (Note that BasicChartAxis.title may override the axis title inferred from the header values.)
     */
    headerCount?: number;
    /**
     * If some values in a series are missing, gaps may appear in the chart (e.g, segments of lines in a line chart will be missing). To eliminate these gaps set this to true. Applies to Line, Area, and Combo charts.
     */
    interpolateNulls?: boolean;
    /**
     * The position of the chart legend.
     */
    legendPosition?: BasicChartSpecLegendPositionEnum;
    /**
     * Gets whether all lines should be rendered smooth or straight by default. Applies to Line charts.
     */
    lineSmoothing?: boolean;
    /**
     * The data this chart is visualizing.
     */
    series?: BasicChartSeries[];
    /**
     * The stacked type for charts that support vertical stacking. Applies to Area, Bar, Column, Combo, and Stepped Area charts.
     */
    stackedType?: BasicChartSpecStackedTypeEnum;
    /**
     * True to make the chart 3D. Applies to Bar and Column charts.
     */
    threeDimensional?: boolean;
    /**
     * Settings for one set of data labels. Data labels are annotations that appear next to a set of data, such as the points on a line chart, and provide additional information about what the data represents, such as a text representation of the value behind that point on the graph.
     */
    totalDataLabel?: DataLabel;
}
