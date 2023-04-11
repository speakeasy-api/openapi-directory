import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { OptionalColor } from "./optionalcolor";
/**
 * The dash style of the border.
 */
export declare enum ParagraphBorderDashStyleEnum {
    DashStyleUnspecified = "DASH_STYLE_UNSPECIFIED",
    Solid = "SOLID",
    Dot = "DOT",
    Dash = "DASH"
}
/**
 * A border around a paragraph.
 */
export declare class ParagraphBorder extends SpeakeasyBase {
    /**
     * A color that can either be fully opaque or fully transparent.
     */
    color?: OptionalColor;
    /**
     * The dash style of the border.
     */
    dashStyle?: ParagraphBorderDashStyleEnum;
    /**
     * A magnitude in a single direction in the specified units.
     */
    padding?: Dimension;
    /**
     * A magnitude in a single direction in the specified units.
     */
    width?: Dimension;
}
