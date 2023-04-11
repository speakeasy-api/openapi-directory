import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Search terms for geo region targeting options.
 */
export declare class GeoRegionSearchTerms extends SpeakeasyBase {
    /**
     * The search query for the desired geo region. The query can be a prefix, e.g. "New Yor", "Seattle", "USA", etc.
     */
    geoRegionQuery?: string;
}
