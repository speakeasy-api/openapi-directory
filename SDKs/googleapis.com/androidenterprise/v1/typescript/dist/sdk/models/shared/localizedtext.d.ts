import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A localized string with its locale.
 */
export declare class LocalizedText extends SpeakeasyBase {
    /**
     * The BCP47 tag for a locale. (e.g. "en-US", "de").
     */
    locale?: string;
    /**
     * The text localized in the associated locale.
     */
    text?: string;
}
