import { SpeakeasyBase } from "../../../internal/utils";
import { LocalizedString } from "./localizedstring";
/**
 * A localized string bundle resource.
 */
export declare class LocalizedStringBundle extends SpeakeasyBase {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#localizedStringBundle`.
     */
    kind?: string;
    /**
     * The locale strings.
     */
    translations?: LocalizedString[];
}
