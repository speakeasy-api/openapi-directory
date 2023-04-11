import { SpeakeasyBase } from "../../../internal/utils";
import { ChartData } from "./chartdata";
/**
 * Where the legend of the pie chart should be drawn.
 */
export declare enum PieChartSpecLegendPositionEnum {
    PieChartLegendPositionUnspecified = "PIE_CHART_LEGEND_POSITION_UNSPECIFIED",
    BottomLegend = "BOTTOM_LEGEND",
    LeftLegend = "LEFT_LEGEND",
    RightLegend = "RIGHT_LEGEND",
    TopLegend = "TOP_LEGEND",
    NoLegend = "NO_LEGEND",
    LabeledLegend = "LABELED_LEGEND"
}
/**
 * A pie chart.
 */
export declare class PieChartSpec extends SpeakeasyBase {
    /**
     * The data included in a domain or series.
     */
    domain?: ChartData;
    /**
     * Where the legend of the pie chart should be drawn.
     */
    legendPosition?: PieChartSpecLegendPositionEnum;
    /**
     * The size of the hole in the pie chart.
     */
    pieHole?: number;
    /**
     * The data included in a domain or series.
     */
    series?: ChartData;
    /**
     * True if the pie is three dimensional.
     */
    threeDimensional?: boolean;
}
