import { SpeakeasyBase } from "../../../internal/utils";
import { GeocodingLocation } from "./geocodinglocation";
/**
 * An array found locations
 */
export declare class GeocodingResponse extends SpeakeasyBase {
    hits?: GeocodingLocation[];
    /**
     * in ms
     */
    took?: number;
}
