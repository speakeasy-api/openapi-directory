import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Search terms for POI targeting options.
 */
export declare class PoiSearchTerms extends SpeakeasyBase {
    /**
     * The search query for the desired POI name, street address, or coordinate of the desired POI. The query can be a prefix, e.g. "Times squar", "40.7505045,-73.99562", "315 W 44th St", etc.
     */
    poiQuery?: string;
}
