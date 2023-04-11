import { SpeakeasyBase } from "../../../internal/utils";
import { BaselineValueFormat } from "./baselinevalueformat";
import { ChartCustomNumberFormatOptions } from "./chartcustomnumberformatoptions";
import { ChartData } from "./chartdata";
import { KeyValueFormat } from "./keyvalueformat";
/**
 * The aggregation type for key and baseline chart data in scorecard chart. This field is not supported for data source charts. Use the ChartData.aggregateType field of the key_value_data or baseline_value_data instead for data source charts. This field is optional.
 */
export declare enum ScorecardChartSpecAggregateTypeEnum {
    ChartAggregateTypeUnspecified = "CHART_AGGREGATE_TYPE_UNSPECIFIED",
    Average = "AVERAGE",
    Count = "COUNT",
    Max = "MAX",
    Median = "MEDIAN",
    Min = "MIN",
    Sum = "SUM"
}
/**
 * The number format source used in the scorecard chart. This field is optional.
 */
export declare enum ScorecardChartSpecNumberFormatSourceEnum {
    ChartNumberFormatSourceUndefined = "CHART_NUMBER_FORMAT_SOURCE_UNDEFINED",
    FromData = "FROM_DATA",
    Custom = "CUSTOM"
}
/**
 * A scorecard chart. Scorecard charts are used to highlight key performance indicators, known as KPIs, on the spreadsheet. A scorecard chart can represent things like total sales, average cost, or a top selling item. You can specify a single data value, or aggregate over a range of data. Percentage or absolute difference from a baseline value can be highlighted, like changes over time.
 */
export declare class ScorecardChartSpec extends SpeakeasyBase {
    /**
     * The aggregation type for key and baseline chart data in scorecard chart. This field is not supported for data source charts. Use the ChartData.aggregateType field of the key_value_data or baseline_value_data instead for data source charts. This field is optional.
     */
    aggregateType?: ScorecardChartSpecAggregateTypeEnum;
    /**
     * The data included in a domain or series.
     */
    baselineValueData?: ChartData;
    /**
     * Formatting options for baseline value.
     */
    baselineValueFormat?: BaselineValueFormat;
    /**
     * Custom number formatting options for chart attributes.
     */
    customFormatOptions?: ChartCustomNumberFormatOptions;
    /**
     * The data included in a domain or series.
     */
    keyValueData?: ChartData;
    /**
     * Formatting options for key value.
     */
    keyValueFormat?: KeyValueFormat;
    /**
     * The number format source used in the scorecard chart. This field is optional.
     */
    numberFormatSource?: ScorecardChartSpecNumberFormatSourceEnum;
    /**
     * Value to scale scorecard key and baseline value. For example, a factor of 10 can be used to divide all values in the chart by 10. This field is optional.
     */
    scaleFactor?: number;
}
