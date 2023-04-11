import { SpeakeasyBase } from "../../../internal/utils";
import { DataLabel } from "./datalabel";
import { LineStyle } from "./linestyle";
import { WaterfallChartDomain } from "./waterfallchartdomain";
import { WaterfallChartSeries } from "./waterfallchartseries";
/**
 * The stacked type.
 */
export declare enum WaterfallChartSpecStackedTypeEnum {
    WaterfallStackedTypeUnspecified = "WATERFALL_STACKED_TYPE_UNSPECIFIED",
    Stacked = "STACKED",
    Sequential = "SEQUENTIAL"
}
/**
 * A waterfall chart.
 */
export declare class WaterfallChartSpec extends SpeakeasyBase {
    /**
     * Properties that describe the style of a line.
     */
    connectorLineStyle?: LineStyle;
    /**
     * The domain of a waterfall chart.
     */
    domain?: WaterfallChartDomain;
    /**
     * True to interpret the first value as a total.
     */
    firstValueIsTotal?: boolean;
    /**
     * True to hide connector lines between columns.
     */
    hideConnectorLines?: boolean;
    /**
     * The data this waterfall chart is visualizing.
     */
    series?: WaterfallChartSeries[];
    /**
     * The stacked type.
     */
    stackedType?: WaterfallChartSpecStackedTypeEnum;
    /**
     * Settings for one set of data labels. Data labels are annotations that appear next to a set of data, such as the points on a line chart, and provide additional information about what the data represents, such as a text representation of the value behind that point on the graph.
     */
    totalDataLabel?: DataLabel;
}
