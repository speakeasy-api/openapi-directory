import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Spell check result.
 */
export declare class SpellingCorrection extends SpeakeasyBase {
    /**
     * Indicates if the query was corrected by the spell checker.
     */
    corrected?: boolean;
    /**
     * Corrected output with html tags to highlight the corrected words. Corrected words are called out with the "*...*" html tags. For example, the user input query is "software enginear", where the second word, "enginear," is incorrect. It should be "engineer". When spelling correction is enabled, this value is "software *engineer*".
     */
    correctedHtml?: string;
    /**
     * Correction output consisting of the corrected keyword string.
     */
    correctedText?: string;
}
