import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. Spell check result.
 */
export declare class SpellingCorrection extends SpeakeasyBase {
    /**
     * Indicates if the query was corrected by the spell checker.
     */
    corrected?: boolean;
    /**
     * Correction output consisting of the corrected keyword string.
     */
    correctedText?: string;
}
