import { SpeakeasyBase } from "../../../internal/utils";
export declare class SpellCheckResponseTokens extends SpeakeasyBase {
    /**
     * The zero-based offset from the beginning of the text query string to the word that is misspelled
     */
    offset?: number;
    /**
     * A word that corrects the spelling error
     */
    suggestion?: string;
    /**
     * The misspelled word
     */
    token?: string;
}
/**
 * OK
 */
export declare class SpellCheckResponse extends SpeakeasyBase {
    /**
     * The corrected text for the entire search term (multiple words/tokens), where misspelled tokens are replaced with the correct texts and html tags <b><i>
     */
    correctedTextHtml: string;
    /**
     * The word in the text query string that is not spelled correctly
     */
    tokens: SpellCheckResponseTokens[];
}
