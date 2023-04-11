import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional parameter. Specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. Only supported for motor vehicles and OpenStreetMap.
 */
export declare enum AddressCurbsideEnum {
    Right = "right",
    Left = "left",
    Any = "any"
}
export declare class Address extends SpeakeasyBase {
    /**
     * Optional parameter. Specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. Only supported for motor vehicles and OpenStreetMap.
     */
    curbside?: AddressCurbsideEnum;
    /**
     * Latitude of location.
     */
    lat: number;
    /**
     * Specifies the id of the location.
     */
    locationId: string;
    /**
     * Longitude of location.
     */
    lon: number;
    /**
     * Name of location.
     */
    name?: string;
    /**
     * Optional parameter. Specifies a hint for each address to better snap the coordinates (lon,lat) to road network. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.
     */
    streetHint?: string;
}
