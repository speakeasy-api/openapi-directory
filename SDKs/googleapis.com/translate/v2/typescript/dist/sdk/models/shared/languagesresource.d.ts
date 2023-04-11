import { SpeakeasyBase } from "../../../internal/utils";
export declare class LanguagesResource extends SpeakeasyBase {
    /**
     * Supported language code, generally consisting of its ISO 639-1
     *
     * @remarks
     * identifier. (E.g. 'en', 'ja'). In certain cases, BCP-47 codes including
     * language + region identifiers are returned (e.g. 'zh-TW' and 'zh-CH')
     */
    language?: string;
    /**
     * Human readable name of the language localized to the target language.
     */
    name?: string;
}
