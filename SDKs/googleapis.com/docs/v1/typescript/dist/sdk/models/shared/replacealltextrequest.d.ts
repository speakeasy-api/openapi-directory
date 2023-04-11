import { SpeakeasyBase } from "../../../internal/utils";
import { SubstringMatchCriteria } from "./substringmatchcriteria";
/**
 * Replaces all instances of text matching a criteria with replace text.
 */
export declare class ReplaceAllTextRequest extends SpeakeasyBase {
    /**
     * A criteria that matches a specific string of text in the document.
     */
    containsText?: SubstringMatchCriteria;
    /**
     * The text that will replace the matched text.
     */
    replaceText?: string;
}
