import { SpeakeasyBase } from "../../../internal/utils";
import { I18nRegionSnippet } from "./i18nregionsnippet";
/**
 * A *i18nRegion* resource identifies a region where YouTube is available.
 */
export declare class I18nRegion extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * The ID that YouTube uses to uniquely identify the i18n region.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#i18nRegion".
     */
    kind?: string;
    /**
     * Basic details about an i18n region, such as region code and human-readable name.
     */
    snippet?: I18nRegionSnippet;
}
