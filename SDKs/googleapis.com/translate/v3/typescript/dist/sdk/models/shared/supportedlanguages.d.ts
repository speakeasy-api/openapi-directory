import { SpeakeasyBase } from "../../../internal/utils";
import { SupportedLanguage } from "./supportedlanguage";
/**
 * The response message for discovering supported languages.
 */
export declare class SupportedLanguages extends SpeakeasyBase {
    /**
     * A list of supported language responses. This list contains an entry for each language the Translation API supports.
     */
    languages?: SupportedLanguage[];
}
