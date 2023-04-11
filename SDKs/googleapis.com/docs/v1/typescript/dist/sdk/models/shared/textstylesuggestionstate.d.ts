import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A mask that indicates which of the fields on the base TextStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
 */
export declare class TextStyleSuggestionState extends SpeakeasyBase {
    /**
     * Indicates if there was a suggested change to background_color.
     */
    backgroundColorSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to baseline_offset.
     */
    baselineOffsetSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to bold.
     */
    boldSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to font_size.
     */
    fontSizeSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to foreground_color.
     */
    foregroundColorSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to italic.
     */
    italicSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to link.
     */
    linkSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to small_caps.
     */
    smallCapsSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to strikethrough.
     */
    strikethroughSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to underline.
     */
    underlineSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to weighted_font_family.
     */
    weightedFontFamilySuggested?: boolean;
}
