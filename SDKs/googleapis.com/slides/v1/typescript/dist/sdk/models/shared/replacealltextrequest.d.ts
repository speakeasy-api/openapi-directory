import { SpeakeasyBase } from "../../../internal/utils";
import { SubstringMatchCriteria } from "./substringmatchcriteria";
/**
 * Replaces all instances of text matching a criteria with replace text.
 */
export declare class ReplaceAllTextRequest extends SpeakeasyBase {
    /**
     * A criteria that matches a specific string of text in a shape or table.
     */
    containsText?: SubstringMatchCriteria;
    /**
     * If non-empty, limits the matches to page elements only on the given pages. Returns a 400 bad request error if given the page object ID of a notes master, or if a page with that object ID doesn't exist in the presentation.
     */
    pageObjectIds?: string[];
    /**
     * The text that will replace the matched text.
     */
    replaceText?: string;
}
