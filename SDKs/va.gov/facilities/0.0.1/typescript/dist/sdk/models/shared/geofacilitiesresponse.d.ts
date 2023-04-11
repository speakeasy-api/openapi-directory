import { SpeakeasyBase } from "../../../internal/utils";
import { GeoFacility } from "./geofacility";
export declare enum GeoFacilitiesResponseTypeEnum {
    FeatureCollection = "FeatureCollection"
}
/**
 * Success
 */
export declare class GeoFacilitiesResponse extends SpeakeasyBase {
    features?: GeoFacility[];
    type: GeoFacilitiesResponseTypeEnum;
}
