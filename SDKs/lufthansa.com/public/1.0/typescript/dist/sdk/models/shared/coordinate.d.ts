import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for coordinates.
 */
export declare class Coordinate extends SpeakeasyBase {
    /**
     * Decimal latitude. Range: -90 (South Pole) to +90 (North Pole), e.g. “51.540”.
     */
    latitude?: number;
    /**
     * Decimal longitude. Range: -180 (West of Prime Meridian) to +180 (East of Prime Meridian).
     */
    longitude?: number;
}
