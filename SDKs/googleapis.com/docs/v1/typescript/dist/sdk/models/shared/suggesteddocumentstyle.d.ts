import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentStyle } from "./documentstyle";
import { DocumentStyleSuggestionState } from "./documentstylesuggestionstate";
/**
 * A suggested change to the DocumentStyle.
 */
export declare class SuggestedDocumentStyle extends SpeakeasyBase {
    /**
     * The style of the document.
     */
    documentStyle?: DocumentStyle;
    /**
     * A mask that indicates which of the fields on the base DocumentStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
     */
    documentStyleSuggestionState?: DocumentStyleSuggestionState;
}
