import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Localized variant of a text in a particular language.
 */
export declare class GoogleTypeLocalizedText extends SpeakeasyBase {
    /**
     * The text's BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string;
    /**
     * Localized string in the language corresponding to `language_code' below.
     */
    text?: string;
}
