import { SpeakeasyBase } from "../../../internal/utils";
import { PositionedObjectProperties } from "./positionedobjectproperties";
import { PositionedObjectPropertiesSuggestionState } from "./positionedobjectpropertiessuggestionstate";
/**
 * A suggested change to PositionedObjectProperties.
 */
export declare class SuggestedPositionedObjectProperties extends SpeakeasyBase {
    /**
     * Properties of a PositionedObject.
     */
    positionedObjectProperties?: PositionedObjectProperties;
    /**
     * A mask that indicates which of the fields on the base PositionedObjectProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
     */
    positionedObjectPropertiesSuggestionState?: PositionedObjectPropertiesSuggestionState;
}
