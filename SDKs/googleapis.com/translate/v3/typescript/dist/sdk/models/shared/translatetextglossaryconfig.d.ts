import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configures which glossary is used for a specific target language and defines options for applying that glossary.
 */
export declare class TranslateTextGlossaryConfig extends SpeakeasyBase {
    /**
     * Required. The `glossary` to be applied for this translation. The format depends on the glossary: - User-provided custom glossary: `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}`
     */
    glossary?: string;
    /**
     * Optional. Indicates match is case insensitive. The default value is `false` if missing.
     */
    ignoreCase?: boolean;
}
