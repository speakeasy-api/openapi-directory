import { SpeakeasyBase } from "../../../internal/utils";
import { I18nRegion } from "./i18nregion";
/**
 * Successful response
 */
export declare class I18nRegionListResponse extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string;
    /**
     * A list of regions where YouTube is available. In this map, the i18n region ID is the map key, and its value is the corresponding i18nRegion resource.
     */
    items?: I18nRegion[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#i18nRegionListResponse".
     */
    kind?: string;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string;
}
