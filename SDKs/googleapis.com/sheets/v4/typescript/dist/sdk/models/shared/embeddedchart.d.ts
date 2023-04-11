import { SpeakeasyBase } from "../../../internal/utils";
import { ChartSpec } from "./chartspec";
import { EmbeddedObjectBorder } from "./embeddedobjectborder";
import { EmbeddedObjectPosition } from "./embeddedobjectposition";
/**
 * A chart embedded in a sheet.
 */
export declare class EmbeddedChart extends SpeakeasyBase {
    /**
     * A border along an embedded object.
     */
    border?: EmbeddedObjectBorder;
    /**
     * The ID of the chart.
     */
    chartId?: number;
    /**
     * The position of an embedded object such as a chart.
     */
    position?: EmbeddedObjectPosition;
    /**
     * The specifications of a chart.
     */
    spec?: ChartSpec;
}
