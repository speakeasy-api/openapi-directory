import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about a language that can be targeted by ads.
 */
export declare class Language extends SpeakeasyBase {
    /**
     * Language ID of this language. This is the ID used for targeting and generating reports.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#language".
     */
    kind?: string;
    /**
     * Format of language code is an ISO 639 two-letter language code optionally followed by an underscore followed by an ISO 3166 code. Examples are "en" for English or "zh_CN" for Simplified Chinese.
     */
    languageCode?: string;
    /**
     * Name of this language.
     */
    name?: string;
}
