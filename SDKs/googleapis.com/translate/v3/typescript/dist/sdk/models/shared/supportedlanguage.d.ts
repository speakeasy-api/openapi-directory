import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single supported language response corresponds to information related to one supported language.
 */
export declare class SupportedLanguage extends SpeakeasyBase {
    /**
     * Human-readable name of the language localized in the display language specified in the request.
     */
    displayName?: string;
    /**
     * Supported language code, generally consisting of its ISO 639-1 identifier, for example, 'en', 'ja'. In certain cases, ISO-639 codes including language and region identifiers are returned (for example, 'zh-TW' and 'zh-CN').
     */
    languageCode?: string;
    /**
     * Can be used as a source language.
     */
    supportSource?: boolean;
    /**
     * Can be used as a target language.
     */
    supportTarget?: boolean;
}
