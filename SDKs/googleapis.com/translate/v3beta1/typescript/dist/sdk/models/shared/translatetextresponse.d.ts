import { SpeakeasyBase } from "../../../internal/utils";
import { Translation } from "./translation";
/**
 * Successful response
 */
export declare class TranslateTextResponse extends SpeakeasyBase {
    /**
     * Text translation responses if a glossary is provided in the request. This can be the same as `translations` if no terms apply. This field has the same length as `contents`.
     */
    glossaryTranslations?: Translation[];
    /**
     * Text translation responses with no glossary applied. This field has the same length as `contents`.
     */
    translations?: Translation[];
}
