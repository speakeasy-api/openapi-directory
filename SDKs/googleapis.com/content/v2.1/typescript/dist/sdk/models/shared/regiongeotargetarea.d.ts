import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A list of geotargets that defines the region area.
 */
export declare class RegionGeoTargetArea extends SpeakeasyBase {
    /**
     * Required. A non-empty list of [location IDs](https://developers.google.com/adwords/api/docs/appendix/geotargeting). They must all be of the same location type (e.g., state).
     */
    geotargetCriteriaIds?: string[];
}
