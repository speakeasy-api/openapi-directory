import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A mask that indicates which of the fields on the base Size have been changed in this suggestion. For any field set to true, the Size has a new suggested value.
 */
export declare class SizeSuggestionState extends SpeakeasyBase {
    /**
     * Indicates if there was a suggested change to height.
     */
    heightSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to width.
     */
    widthSuggested?: boolean;
}
