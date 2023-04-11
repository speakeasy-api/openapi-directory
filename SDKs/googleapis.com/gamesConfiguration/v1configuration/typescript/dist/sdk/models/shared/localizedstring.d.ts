import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A localized string resource.
 */
export declare class LocalizedString extends SpeakeasyBase {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#localizedString`.
     */
    kind?: string;
    /**
     * The locale string.
     */
    locale?: string;
    /**
     * The string value.
     */
    value?: string;
}
