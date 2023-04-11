import { SpeakeasyBase } from "../../../internal/utils";
import { CropPropertiesSuggestionState } from "./croppropertiessuggestionstate";
/**
 * A mask that indicates which of the fields on the base ImageProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
 */
export declare class ImagePropertiesSuggestionState extends SpeakeasyBase {
    /**
     * Indicates if there was a suggested change to angle.
     */
    angleSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to brightness.
     */
    brightnessSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to content_uri.
     */
    contentUriSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to contrast.
     */
    contrastSuggested?: boolean;
    /**
     * A mask that indicates which of the fields on the base CropProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
     */
    cropPropertiesSuggestionState?: CropPropertiesSuggestionState;
    /**
     * Indicates if there was a suggested change to source_uri.
     */
    sourceUriSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to transparency.
     */
    transparencySuggested?: boolean;
}
