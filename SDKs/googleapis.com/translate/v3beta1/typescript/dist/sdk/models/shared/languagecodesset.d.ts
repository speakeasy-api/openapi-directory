import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Used with equivalent term set glossaries.
 */
export declare class LanguageCodesSet extends SpeakeasyBase {
    /**
     * The BCP-47 language code(s) for terms defined in the glossary. All entries are unique. The list contains at least two entries. Expected to be an exact match for GlossaryTerm.language_code.
     */
    languageCodes?: string[];
}
