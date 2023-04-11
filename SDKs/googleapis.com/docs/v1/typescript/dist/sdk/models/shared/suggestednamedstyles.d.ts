import { SpeakeasyBase } from "../../../internal/utils";
import { NamedStyles } from "./namedstyles";
import { NamedStylesSuggestionState } from "./namedstylessuggestionstate";
/**
 * A suggested change to the NamedStyles.
 */
export declare class SuggestedNamedStyles extends SpeakeasyBase {
    /**
     * The named styles. Paragraphs in the document can inherit their TextStyle and ParagraphStyle from these named styles.
     */
    namedStyles?: NamedStyles;
    /**
     * The suggestion state of a NamedStyles message.
     */
    namedStylesSuggestionState?: NamedStylesSuggestionState;
}
