import { SpeakeasyBase } from "../../../internal/utils";
import { LanguagesResource } from "./languagesresource";
/**
 * Successful response
 */
export declare class LanguagesListResponse extends SpeakeasyBase {
    /**
     * List of source/target languages supported by the translation API. If target parameter is unspecified, the list is sorted by the ASCII code point order of the language code. If target parameter is specified, the list is sorted by the collation order of the language name in the target language.
     */
    languages?: LanguagesResource[];
}
