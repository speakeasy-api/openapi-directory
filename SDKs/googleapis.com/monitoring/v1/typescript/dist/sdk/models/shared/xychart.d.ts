import { SpeakeasyBase } from "../../../internal/utils";
import { Axis } from "./axis";
import { ChartOptions } from "./chartoptions";
import { DataSet } from "./dataset";
import { Threshold } from "./threshold";
/**
 * A chart that displays data on a 2D (X and Y axes) plane.
 */
export declare class XyChart extends SpeakeasyBase {
    /**
     * Options to control visual rendering of a chart.
     */
    chartOptions?: ChartOptions;
    /**
     * Required. The data displayed in this chart.
     */
    dataSets?: DataSet[];
    /**
     * Threshold lines drawn horizontally across the chart.
     */
    thresholds?: Threshold[];
    /**
     * The duration used to display a comparison chart. A comparison chart simultaneously shows values from two similar-length time periods (e.g., week-over-week metrics). The duration must be positive, and it can only be applied to charts with data sets of LINE plot type.
     */
    timeshiftDuration?: string;
    /**
     * A chart axis.
     */
    xAxis?: Axis;
    /**
     * A chart axis.
     */
    y2Axis?: Axis;
    /**
     * A chart axis.
     */
    yAxis?: Axis;
}
