import { SpeakeasyBase } from "../../../internal/utils";
import { ChartAxisViewWindowOptions } from "./chartaxisviewwindowoptions";
import { TextFormat } from "./textformat";
import { TextPosition } from "./textposition";
/**
 * The position of this axis.
 */
export declare enum BasicChartAxisPositionEnum {
    BasicChartAxisPositionUnspecified = "BASIC_CHART_AXIS_POSITION_UNSPECIFIED",
    BottomAxis = "BOTTOM_AXIS",
    LeftAxis = "LEFT_AXIS",
    RightAxis = "RIGHT_AXIS"
}
/**
 * An axis of the chart. A chart may not have more than one axis per axis position.
 */
export declare class BasicChartAxis extends SpeakeasyBase {
    /**
     * The format of a run of text in a cell. Absent values indicate that the field isn't specified.
     */
    format?: TextFormat;
    /**
     * The position of this axis.
     */
    position?: BasicChartAxisPositionEnum;
    /**
     * The title of this axis. If set, this overrides any title inferred from headers of the data.
     */
    title?: string;
    /**
     * Position settings for text.
     */
    titleTextPosition?: TextPosition;
    /**
     * The options that define a "view window" for a chart (such as the visible values in an axis).
     */
    viewWindowOptions?: ChartAxisViewWindowOptions;
}
