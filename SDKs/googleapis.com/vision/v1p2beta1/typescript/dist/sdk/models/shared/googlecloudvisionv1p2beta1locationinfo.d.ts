import { SpeakeasyBase } from "../../../internal/utils";
import { LatLng } from "./latlng";
/**
 * Detected entity location information.
 */
export declare class GoogleCloudVisionV1p2beta1LocationInfo extends SpeakeasyBase {
    /**
     * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
     */
    latLng?: LatLng;
}
