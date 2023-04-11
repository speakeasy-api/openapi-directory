import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The autofit type of the shape. If the autofit type is AUTOFIT_TYPE_UNSPECIFIED, the autofit type is inherited from a parent placeholder if it exists. The field is automatically set to NONE if a request is made that might affect text fitting within its bounding text box. In this case the font_scale is applied to the font_size and the line_spacing_reduction is applied to the line_spacing. Both properties are also reset to default values.
 */
export declare enum AutofitAutofitTypeEnum {
    AutofitTypeUnspecified = "AUTOFIT_TYPE_UNSPECIFIED",
    None = "NONE",
    TextAutofit = "TEXT_AUTOFIT",
    ShapeAutofit = "SHAPE_AUTOFIT"
}
/**
 * The autofit properties of a Shape.
 */
export declare class Autofit extends SpeakeasyBase {
    /**
     * The autofit type of the shape. If the autofit type is AUTOFIT_TYPE_UNSPECIFIED, the autofit type is inherited from a parent placeholder if it exists. The field is automatically set to NONE if a request is made that might affect text fitting within its bounding text box. In this case the font_scale is applied to the font_size and the line_spacing_reduction is applied to the line_spacing. Both properties are also reset to default values.
     */
    autofitType?: AutofitAutofitTypeEnum;
    /**
     * The font scale applied to the shape. For shapes with autofit_type NONE or SHAPE_AUTOFIT, this value is the default value of 1. For TEXT_AUTOFIT, this value multiplied by the font_size gives the font size that is rendered in the editor. This property is read-only.
     */
    fontScale?: number;
    /**
     * The line spacing reduction applied to the shape. For shapes with autofit_type NONE or SHAPE_AUTOFIT, this value is the default value of 0. For TEXT_AUTOFIT, this value subtracted from the line_spacing gives the line spacing that is rendered in the editor. This property is read-only.
     */
    lineSpacingReduction?: number;
}
