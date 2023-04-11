import { SpeakeasyBase } from "../../../internal/utils";
import { TranslationsResource } from "./translationsresource";
/**
 * The main language translation response message.
 */
export declare class TranslationsListResponse extends SpeakeasyBase {
    /**
     * Translations contains list of translation results of given text
     */
    translations?: TranslationsResource[];
}
