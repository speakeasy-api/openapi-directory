import { SpeakeasyBase } from "../../../internal/utils";
import { ChartGroupRule } from "./chartgrouprule";
import { ChartSourceRange } from "./chartsourcerange";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
/**
 * The aggregation type for the series of a data source chart. Only supported for data source charts.
 */
export declare enum ChartDataAggregateTypeEnum {
    ChartAggregateTypeUnspecified = "CHART_AGGREGATE_TYPE_UNSPECIFIED",
    Average = "AVERAGE",
    Count = "COUNT",
    Max = "MAX",
    Median = "MEDIAN",
    Min = "MIN",
    Sum = "SUM"
}
/**
 * The data included in a domain or series.
 */
export declare class ChartData extends SpeakeasyBase {
    /**
     * The aggregation type for the series of a data source chart. Only supported for data source charts.
     */
    aggregateType?: ChartDataAggregateTypeEnum;
    /**
     * An unique identifier that references a data source column.
     */
    columnReference?: DataSourceColumnReference;
    /**
     * An optional setting on the ChartData of the domain of a data source chart that defines buckets for the values in the domain rather than breaking out each individual value. For example, when plotting a data source chart, you can specify a histogram rule on the domain (it should only contain numeric values), grouping its values into buckets. Any values of a chart series that fall into the same bucket are aggregated based on the aggregate_type.
     */
    groupRule?: ChartGroupRule;
    /**
     * Source ranges for a chart.
     */
    sourceRange?: ChartSourceRange;
}
