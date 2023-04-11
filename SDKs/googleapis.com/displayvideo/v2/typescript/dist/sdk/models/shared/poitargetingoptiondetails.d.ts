import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a targetable point of interest(POI). This will be populated in the poi_details field when targeting_type is `TARGETING_TYPE_POI`.
 */
export declare class PoiTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Output only. The display name of a POI(e.g. "Times Square", "Space Needle"), followed by its full address if available.
     */
    displayName?: string;
    /**
     * Output only. Latitude of the POI rounding to 6th decimal place.
     */
    latitude?: number;
    /**
     * Output only. Longitude of the POI rounding to 6th decimal place.
     */
    longitude?: number;
}
