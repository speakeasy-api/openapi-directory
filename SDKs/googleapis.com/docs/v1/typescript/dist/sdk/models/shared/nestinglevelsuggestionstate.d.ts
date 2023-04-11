import { SpeakeasyBase } from "../../../internal/utils";
import { TextStyleSuggestionState } from "./textstylesuggestionstate";
/**
 * A mask that indicates which of the fields on the base NestingLevel have been changed in this suggestion. For any field set to true, there's a new suggested value.
 */
export declare class NestingLevelSuggestionState extends SpeakeasyBase {
    /**
     * Indicates if there was a suggested change to bullet_alignment.
     */
    bulletAlignmentSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to glyph_format.
     */
    glyphFormatSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to glyph_symbol.
     */
    glyphSymbolSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to glyph_type.
     */
    glyphTypeSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to indent_first_line.
     */
    indentFirstLineSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to indent_start.
     */
    indentStartSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to start_number.
     */
    startNumberSuggested?: boolean;
    /**
     * A mask that indicates which of the fields on the base TextStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
     */
    textStyleSuggestionState?: TextStyleSuggestionState;
}
