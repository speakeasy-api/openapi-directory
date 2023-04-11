import { SpeakeasyBase } from "../../../internal/utils";
import { I18nLanguage } from "./i18nlanguage";
/**
 * Successful response
 */
export declare class I18nLanguageListResponse extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string;
    /**
     * A list of supported i18n languages. In this map, the i18n language ID is the map key, and its value is the corresponding i18nLanguage resource.
     */
    items?: I18nLanguage[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#i18nLanguageListResponse".
     */
    kind?: string;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string;
}
