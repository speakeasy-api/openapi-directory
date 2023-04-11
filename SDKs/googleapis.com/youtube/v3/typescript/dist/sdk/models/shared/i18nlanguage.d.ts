import { SpeakeasyBase } from "../../../internal/utils";
import { I18nLanguageSnippet } from "./i18nlanguagesnippet";
/**
 * An *i18nLanguage* resource identifies a UI language currently supported by YouTube.
 */
export declare class I18nLanguage extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * The ID that YouTube uses to uniquely identify the i18n language.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#i18nLanguage".
     */
    kind?: string;
    /**
     * Basic details about an i18n language, such as language code and human-readable name.
     */
    snippet?: I18nLanguageSnippet;
}
