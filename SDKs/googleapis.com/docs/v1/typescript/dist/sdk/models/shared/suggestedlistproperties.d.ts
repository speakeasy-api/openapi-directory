import { SpeakeasyBase } from "../../../internal/utils";
import { ListProperties } from "./listproperties";
import { ListPropertiesSuggestionState } from "./listpropertiessuggestionstate";
/**
 * A suggested change to ListProperties.
 */
export declare class SuggestedListProperties extends SpeakeasyBase {
    /**
     * The properties of a list that describe the look and feel of bullets belonging to paragraphs associated with a list.
     */
    listProperties?: ListProperties;
    /**
     * A mask that indicates which of the fields on the base ListProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
     */
    listPropertiesSuggestionState?: ListPropertiesSuggestionState;
}
