import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Basic details about an i18n language, such as language code and human-readable name.
 */
export declare class I18nLanguageSnippet extends SpeakeasyBase {
    /**
     * A short BCP-47 code that uniquely identifies a language.
     */
    hl?: string;
    /**
     * The human-readable name of the language in the language itself.
     */
    name?: string;
}
