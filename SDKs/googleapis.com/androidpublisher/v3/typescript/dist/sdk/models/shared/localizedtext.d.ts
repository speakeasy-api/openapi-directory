import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Localized text in given language.
 */
export declare class LocalizedText extends SpeakeasyBase {
    /**
     * Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).
     */
    language?: string;
    /**
     * The text in the given language.
     */
    text?: string;
}
