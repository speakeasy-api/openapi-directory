import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { OptionalColor } from "./optionalcolor";
/**
 * The dash style of the border.
 */
export declare enum TableCellBorderDashStyleEnum {
    DashStyleUnspecified = "DASH_STYLE_UNSPECIFIED",
    Solid = "SOLID",
    Dot = "DOT",
    Dash = "DASH"
}
/**
 * A border around a table cell. Table cell borders cannot be transparent. To hide a table cell border, make its width 0.
 */
export declare class TableCellBorder extends SpeakeasyBase {
    /**
     * A color that can either be fully opaque or fully transparent.
     */
    color?: OptionalColor;
    /**
     * The dash style of the border.
     */
    dashStyle?: TableCellBorderDashStyleEnum;
    /**
     * A magnitude in a single direction in the specified units.
     */
    width?: Dimension;
}
