import { SpeakeasyBase } from "../../../internal/utils";
import { SolidFill } from "./solidfill";
import { StretchedPictureFill } from "./stretchedpicturefill";
/**
 * The background fill property state. Updating the fill on a page will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a page, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.
 */
export declare enum PageBackgroundFillPropertyStateEnum {
    Rendered = "RENDERED",
    NotRendered = "NOT_RENDERED",
    Inherit = "INHERIT"
}
/**
 * The page background fill.
 */
export declare class PageBackgroundFill extends SpeakeasyBase {
    /**
     * The background fill property state. Updating the fill on a page will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a page, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored.
     */
    propertyState?: PageBackgroundFillPropertyStateEnum;
    /**
     * A solid color fill. The page or page element is filled entirely with the specified color value. If any field is unset, its value may be inherited from a parent placeholder if it exists.
     */
    solidFill?: SolidFill;
    /**
     * The stretched picture fill. The page or page element is filled entirely with the specified picture. The picture is stretched to fit its container.
     */
    stretchedPictureFill?: StretchedPictureFill;
}
