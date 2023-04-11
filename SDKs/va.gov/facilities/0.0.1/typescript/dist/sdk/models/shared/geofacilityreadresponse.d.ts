import { SpeakeasyBase } from "../../../internal/utils";
import { Geometry } from "./geometry";
import { Properties } from "./properties";
export declare enum GeoFacilityReadResponseTypeEnum {
    Feature = "Feature"
}
/**
 * Success
 */
export declare class GeoFacilityReadResponse extends SpeakeasyBase {
    geometry: Geometry;
    properties: Properties;
    type: GeoFacilityReadResponseTypeEnum;
}
