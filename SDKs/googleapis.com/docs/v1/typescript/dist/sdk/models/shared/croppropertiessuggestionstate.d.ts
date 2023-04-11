import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A mask that indicates which of the fields on the base CropProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
 */
export declare class CropPropertiesSuggestionState extends SpeakeasyBase {
    /**
     * Indicates if there was a suggested change to angle.
     */
    angleSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to offset_bottom.
     */
    offsetBottomSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to offset_left.
     */
    offsetLeftSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to offset_right.
     */
    offsetRightSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to offset_top.
     */
    offsetTopSuggested?: boolean;
}
