import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A mask that indicates which of the fields on the base EmbeddedObjectBorder have been changed in this suggestion. For any field set to true, there's a new suggested value.
 */
export declare class EmbeddedObjectBorderSuggestionState extends SpeakeasyBase {
    /**
     * Indicates if there was a suggested change to color.
     */
    colorSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to dash_style.
     */
    dashStyleSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to property_state.
     */
    propertyStateSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to width.
     */
    widthSuggested?: boolean;
}
