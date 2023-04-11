import { SpeakeasyBase } from "../../../internal/utils";
import { ChartData } from "./chartdata";
import { DataLabel } from "./datalabel";
import { WaterfallChartColumnStyle } from "./waterfallchartcolumnstyle";
import { WaterfallChartCustomSubtotal } from "./waterfallchartcustomsubtotal";
/**
 * A single series of data for a waterfall chart.
 */
export declare class WaterfallChartSeries extends SpeakeasyBase {
    /**
     * Custom subtotal columns appearing in this series. The order in which subtotals are defined is not significant. Only one subtotal may be defined for each data point.
     */
    customSubtotals?: WaterfallChartCustomSubtotal[];
    /**
     * The data included in a domain or series.
     */
    data?: ChartData;
    /**
     * Settings for one set of data labels. Data labels are annotations that appear next to a set of data, such as the points on a line chart, and provide additional information about what the data represents, such as a text representation of the value behind that point on the graph.
     */
    dataLabel?: DataLabel;
    /**
     * True to hide the subtotal column from the end of the series. By default, a subtotal column will appear at the end of each series. Setting this field to true will hide that subtotal column for this series.
     */
    hideTrailingSubtotal?: boolean;
    /**
     * Styles for a waterfall chart column.
     */
    negativeColumnsStyle?: WaterfallChartColumnStyle;
    /**
     * Styles for a waterfall chart column.
     */
    positiveColumnsStyle?: WaterfallChartColumnStyle;
    /**
     * Styles for a waterfall chart column.
     */
    subtotalColumnsStyle?: WaterfallChartColumnStyle;
}
