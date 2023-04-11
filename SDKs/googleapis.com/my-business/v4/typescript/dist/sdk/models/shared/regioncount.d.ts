import { SpeakeasyBase } from "../../../internal/utils";
import { LatLng } from "./latlng";
/**
 * A region with its associated request count.
 */
export declare class RegionCount extends SpeakeasyBase {
    /**
     * Number of driving-direction requests from this region.
     */
    count?: string;
    /**
     * Human-readable label for the region.
     */
    label?: string;
    /**
     * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the WGS84 standard. Values must be within normalized ranges.
     */
    latlng?: LatLng;
}
