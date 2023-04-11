import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { Link } from "./link";
import { OptionalColor } from "./optionalcolor";
import { WeightedFontFamily } from "./weightedfontfamily";
/**
 * The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. Changes in this field don't affect the `font_size`.
 */
export declare enum TextStyleBaselineOffsetEnum {
    BaselineOffsetUnspecified = "BASELINE_OFFSET_UNSPECIFIED",
    None = "NONE",
    Superscript = "SUPERSCRIPT",
    Subscript = "SUBSCRIPT"
}
/**
 * Represents the styling that can be applied to text. Inherited text styles are represented as unset fields in this message. A text style's parent depends on where the text style is defined: * The TextStyle of text in a Paragraph inherits from the paragraph's corresponding named style type. * The TextStyle on a named style inherits from the normal text named style. * The TextStyle of the normal text named style inherits from the default text style in the Docs editor. * The TextStyle on a Paragraph element that's contained in a table may inherit its text style from the table style. If the text style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.
 */
export declare class TextStyle extends SpeakeasyBase {
    /**
     * A color that can either be fully opaque or fully transparent.
     */
    backgroundColor?: OptionalColor;
    /**
     * The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. Changes in this field don't affect the `font_size`.
     */
    baselineOffset?: TextStyleBaselineOffsetEnum;
    /**
     * Whether or not the text is rendered as bold.
     */
    bold?: boolean;
    /**
     * A magnitude in a single direction in the specified units.
     */
    fontSize?: Dimension;
    /**
     * A color that can either be fully opaque or fully transparent.
     */
    foregroundColor?: OptionalColor;
    /**
     * Whether or not the text is italicized.
     */
    italic?: boolean;
    /**
     * A reference to another portion of a document or an external URL resource.
     */
    link?: Link;
    /**
     * Whether or not the text is in small capital letters.
     */
    smallCaps?: boolean;
    /**
     * Whether or not the text is struck through.
     */
    strikethrough?: boolean;
    /**
     * Whether or not the text is underlined.
     */
    underline?: boolean;
    /**
     * Represents a font family and weight of text.
     */
    weightedFontFamily?: WeightedFontFamily;
}
