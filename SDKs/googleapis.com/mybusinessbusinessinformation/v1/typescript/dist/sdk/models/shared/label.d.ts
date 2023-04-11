import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Label to be used when displaying the price list, section, or item.
 */
export declare class Label extends SpeakeasyBase {
    /**
     * Optional. Description of the price list, section, or item.
     */
    description?: string;
    /**
     * Required. Display name for the price list, section, or item.
     */
    displayName?: string;
    /**
     * Optional. The BCP-47 language code that these strings apply for. Only one set of labels may be set per language.
     */
    languageCode?: string;
}
