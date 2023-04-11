import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents locales that are available for a web property.
 */
export declare class GoogleSearchIdeahubV1alphaAvailableLocale extends SpeakeasyBase {
    /**
     * A string in BCP 47 format, without a resource prefix.
     */
    locale?: string;
    /**
     * A string in BCP 47 format, prefixed with the platform and property name, and "locales/". Format: platforms/{platform}/properties/{property}/locales/{locale}
     */
    name?: string;
}
