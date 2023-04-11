import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The point shape. If empty or unspecified, a default shape is used.
 */
export declare enum PointStyleShapeEnum {
    PointShapeUnspecified = "POINT_SHAPE_UNSPECIFIED",
    Circle = "CIRCLE",
    Diamond = "DIAMOND",
    Hexagon = "HEXAGON",
    Pentagon = "PENTAGON",
    Square = "SQUARE",
    Star = "STAR",
    Triangle = "TRIANGLE",
    XMark = "X_MARK"
}
/**
 * The style of a point on the chart.
 */
export declare class PointStyle extends SpeakeasyBase {
    /**
     * The point shape. If empty or unspecified, a default shape is used.
     */
    shape?: PointStyleShapeEnum;
    /**
     * The point size. If empty, a default size is used.
     */
    size?: number;
}
