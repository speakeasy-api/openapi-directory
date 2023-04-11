import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { OutlineFill } from "./outlinefill";
/**
 * The dash style of the outline.
 */
export declare enum OutlineDashStyleEnum {
    DashStyleUnspecified = "DASH_STYLE_UNSPECIFIED",
    Solid = "SOLID",
    Dot = "DOT",
    Dash = "DASH",
    DashDot = "DASH_DOT",
    LongDash = "LONG_DASH",
    LongDashDot = "LONG_DASH_DOT"
}
/**
 * The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored.
 */
export declare enum OutlinePropertyStateEnum {
    Rendered = "RENDERED",
    NotRendered = "NOT_RENDERED",
    Inherit = "INHERIT"
}
/**
 * The outline of a PageElement. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind.
 */
export declare class Outline extends SpeakeasyBase {
    /**
     * The dash style of the outline.
     */
    dashStyle?: OutlineDashStyleEnum;
    /**
     * The fill of the outline.
     */
    outlineFill?: OutlineFill;
    /**
     * The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored.
     */
    propertyState?: OutlinePropertyStateEnum;
    /**
     * A magnitude in a single direction in the specified units.
     */
    weight?: Dimension;
}
