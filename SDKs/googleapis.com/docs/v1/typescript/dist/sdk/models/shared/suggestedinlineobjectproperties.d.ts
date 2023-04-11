import { SpeakeasyBase } from "../../../internal/utils";
import { InlineObjectProperties } from "./inlineobjectproperties";
import { InlineObjectPropertiesSuggestionState } from "./inlineobjectpropertiessuggestionstate";
/**
 * A suggested change to InlineObjectProperties.
 */
export declare class SuggestedInlineObjectProperties extends SpeakeasyBase {
    /**
     * Properties of an InlineObject.
     */
    inlineObjectProperties?: InlineObjectProperties;
    /**
     * A mask that indicates which of the fields on the base InlineObjectProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
     */
    inlineObjectPropertiesSuggestionState?: InlineObjectPropertiesSuggestionState;
}
