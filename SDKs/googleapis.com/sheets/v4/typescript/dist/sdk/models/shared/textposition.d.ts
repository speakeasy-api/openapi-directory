import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Horizontal alignment setting for the piece of text.
 */
export declare enum TextPositionHorizontalAlignmentEnum {
    HorizontalAlignUnspecified = "HORIZONTAL_ALIGN_UNSPECIFIED",
    Left = "LEFT",
    Center = "CENTER",
    Right = "RIGHT"
}
/**
 * Position settings for text.
 */
export declare class TextPosition extends SpeakeasyBase {
    /**
     * Horizontal alignment setting for the piece of text.
     */
    horizontalAlignment?: TextPositionHorizontalAlignmentEnum;
}
