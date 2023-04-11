import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { Link } from "./link";
import { OptionalColor } from "./optionalcolor";
import { WeightedFontFamily } from "./weightedfontfamily";
/**
 * The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field.
 */
export declare enum TextStyleBaselineOffsetEnum {
    BaselineOffsetUnspecified = "BASELINE_OFFSET_UNSPECIFIED",
    None = "NONE",
    Superscript = "SUPERSCRIPT",
    Subscript = "SUBSCRIPT"
}
/**
 * Represents the styling that can be applied to a TextRun. If this text is contained in a shape with a parent placeholder, then these text styles may be inherited from the parent. Which text styles are inherited depend on the nesting level of lists: * A text run in a paragraph that is not in a list will inherit its text style from the the newline character in the paragraph at the 0 nesting level of the list inside the parent placeholder. * A text run in a paragraph that is in a list will inherit its text style from the newline character in the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited text styles are represented as unset fields in this message. If text is contained in a shape without a parent placeholder, unsetting these fields will revert the style to a value matching the defaults in the Slides editor.
 */
export declare class TextStyle extends SpeakeasyBase {
    /**
     * A color that can either be fully opaque or fully transparent.
     */
    backgroundColor?: OptionalColor;
    /**
     * The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field.
     */
    baselineOffset?: TextStyleBaselineOffsetEnum;
    /**
     * Whether or not the text is rendered as bold.
     */
    bold?: boolean;
    /**
     * The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set `bold` value is used.
     */
    fontFamily?: string;
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
     * A hypertext link.
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
     * Represents a font family and weight used to style a TextRun.
     */
    weightedFontFamily?: WeightedFontFamily;
}
