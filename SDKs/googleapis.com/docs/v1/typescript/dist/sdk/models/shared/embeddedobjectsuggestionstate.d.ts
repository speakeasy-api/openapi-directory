import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedObjectBorderSuggestionState } from "./embeddedobjectbordersuggestionstate";
import { ImagePropertiesSuggestionState } from "./imagepropertiessuggestionstate";
import { LinkedContentReferenceSuggestionState } from "./linkedcontentreferencesuggestionstate";
import { SizeSuggestionState } from "./sizesuggestionstate";
/**
 * A mask that indicates which of the fields on the base EmbeddedObject have been changed in this suggestion. For any field set to true, there's a new suggested value.
 */
export declare class EmbeddedObjectSuggestionState extends SpeakeasyBase {
    /**
     * Indicates if there was a suggested change to description.
     */
    descriptionSuggested?: boolean;
    /**
     * A mask that indicates which of the fields on the base EmbeddedDrawingProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
     */
    embeddedDrawingPropertiesSuggestionState?: Record<string, any>;
    /**
     * A mask that indicates which of the fields on the base EmbeddedObjectBorder have been changed in this suggestion. For any field set to true, there's a new suggested value.
     */
    embeddedObjectBorderSuggestionState?: EmbeddedObjectBorderSuggestionState;
    /**
     * A mask that indicates which of the fields on the base ImageProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
     */
    imagePropertiesSuggestionState?: ImagePropertiesSuggestionState;
    /**
     * A mask that indicates which of the fields on the base LinkedContentReference have been changed in this suggestion. For any field set to true, there's a new suggested value.
     */
    linkedContentReferenceSuggestionState?: LinkedContentReferenceSuggestionState;
    /**
     * Indicates if there was a suggested change to margin_bottom.
     */
    marginBottomSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to margin_left.
     */
    marginLeftSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to margin_right.
     */
    marginRightSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to margin_top.
     */
    marginTopSuggested?: boolean;
    /**
     * A mask that indicates which of the fields on the base Size have been changed in this suggestion. For any field set to true, the Size has a new suggested value.
     */
    sizeSuggestionState?: SizeSuggestionState;
    /**
     * Indicates if there was a suggested change to title.
     */
    titleSuggested?: boolean;
}
