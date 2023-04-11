import { SpeakeasyBase } from "../../../internal/utils";
import { GlossaryInputConfig } from "./glossaryinputconfig";
import { LanguageCodePair } from "./languagecodepair";
import { LanguageCodesSet } from "./languagecodesset";
/**
 * Represents a glossary built from user-provided data.
 */
export declare class Glossary extends SpeakeasyBase {
    /**
     * Optional. The display name of the glossary.
     */
    displayName?: string;
    /**
     * Output only. When the glossary creation was finished.
     */
    endTime?: string;
    /**
     * Output only. The number of entries defined in the glossary.
     */
    entryCount?: number;
    /**
     * Input configuration for glossaries.
     */
    inputConfig?: GlossaryInputConfig;
    /**
     * Used with equivalent term set glossaries.
     */
    languageCodesSet?: LanguageCodesSet;
    /**
     * Used with unidirectional glossaries.
     */
    languagePair?: LanguageCodePair;
    /**
     * Required. The resource name of the glossary. Glossary names have the form `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}`.
     */
    name?: string;
    /**
     * Output only. When CreateGlossary was called.
     */
    submitTime?: string;
}
/**
 * Represents a glossary built from user-provided data.
 */
export declare class GlossaryInput extends SpeakeasyBase {
    /**
     * Optional. The display name of the glossary.
     */
    displayName?: string;
    /**
     * Input configuration for glossaries.
     */
    inputConfig?: GlossaryInputConfig;
    /**
     * Used with equivalent term set glossaries.
     */
    languageCodesSet?: LanguageCodesSet;
    /**
     * Used with unidirectional glossaries.
     */
    languagePair?: LanguageCodePair;
    /**
     * Required. The resource name of the glossary. Glossary names have the form `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}`.
     */
    name?: string;
}
