import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { OptionalColor } from "./optionalcolor";
/**
 * The dash style of the border.
 */
export declare enum EmbeddedObjectBorderDashStyleEnum {
    DashStyleUnspecified = "DASH_STYLE_UNSPECIFIED",
    Solid = "SOLID",
    Dot = "DOT",
    Dash = "DASH"
}
/**
 * The property state of the border property.
 */
export declare enum EmbeddedObjectBorderPropertyStateEnum {
    Rendered = "RENDERED",
    NotRendered = "NOT_RENDERED"
}
/**
 * A border around an EmbeddedObject.
 */
export declare class EmbeddedObjectBorder extends SpeakeasyBase {
    /**
     * A color that can either be fully opaque or fully transparent.
     */
    color?: OptionalColor;
    /**
     * The dash style of the border.
     */
    dashStyle?: EmbeddedObjectBorderDashStyleEnum;
    /**
     * The property state of the border property.
     */
    propertyState?: EmbeddedObjectBorderPropertyStateEnum;
    /**
     * A magnitude in a single direction in the specified units.
     */
    width?: Dimension;
}
