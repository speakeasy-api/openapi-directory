import { SpeakeasyBase } from "../../../internal/utils";
import { NamedStyleSuggestionState } from "./namedstylesuggestionstate";
/**
 * The suggestion state of a NamedStyles message.
 */
export declare class NamedStylesSuggestionState extends SpeakeasyBase {
    /**
     * A mask that indicates which of the fields on the corresponding NamedStyle in styles have been changed in this suggestion. The order of these named style suggestion states matches the order of the corresponding named style within the named styles suggestion.
     */
    stylesSuggestionStates?: NamedStyleSuggestionState[];
}
