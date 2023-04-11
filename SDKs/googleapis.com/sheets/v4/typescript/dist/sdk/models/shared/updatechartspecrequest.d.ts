import { SpeakeasyBase } from "../../../internal/utils";
import { ChartSpec } from "./chartspec";
/**
 * Updates a chart's specifications. (This does not move or resize a chart. To move or resize a chart, use UpdateEmbeddedObjectPositionRequest.)
 */
export declare class UpdateChartSpecRequest extends SpeakeasyBase {
    /**
     * The ID of the chart to update.
     */
    chartId?: number;
    /**
     * The specifications of a chart.
     */
    spec?: ChartSpec;
}
