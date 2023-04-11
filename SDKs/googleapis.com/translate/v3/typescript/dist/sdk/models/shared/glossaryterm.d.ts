import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a single glossary term
 */
export declare class GlossaryTerm extends SpeakeasyBase {
    /**
     * The language for this glossary term.
     */
    languageCode?: string;
    /**
     * The text for the glossary term.
     */
    text?: string;
}
