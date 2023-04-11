import { SpeakeasyBase } from "../../../internal/utils";
import { SolidFill } from "./solidfill";
/**
 * The background fill property state. Updating the fill on a table cell will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a table cell, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.
 */
export declare enum TableCellBackgroundFillPropertyStateEnum {
    Rendered = "RENDERED",
    NotRendered = "NOT_RENDERED",
    Inherit = "INHERIT"
}
/**
 * The table cell background fill.
 */
export declare class TableCellBackgroundFill extends SpeakeasyBase {
    /**
     * The background fill property state. Updating the fill on a table cell will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a table cell, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.
     */
    propertyState?: TableCellBackgroundFillPropertyStateEnum;
    /**
     * A solid color fill. The page or page element is filled entirely with the specified color value. If any field is unset, its value may be inherited from a parent placeholder if it exists.
     */
    solidFill?: SolidFill;
}
