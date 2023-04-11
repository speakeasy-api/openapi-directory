import { SpeakeasyBase } from "../../../internal/utils";
export declare class V3VehiclePosition extends SpeakeasyBase {
    /**
     * Compass bearing of the vehicle when known, clockwise from True North, i.e., 0 is North and 90 is East. May be null.
     *
     * @remarks
     *             Only available for some bus runs.
     */
    bearing?: number;
    /**
     * Date and time that the vehicle position data was supplied.
     */
    datetimeUtc?: Date;
    /**
     * CIS - Metro Train Vehicle Location Direction
     */
    direction?: string;
    /**
     * CIS - Metro Train Vehicle Location Easting coordinate
     */
    easting?: number;
    /**
     * CIS - Metro Train Vehicle Location data expiry time
     */
    expiryTime?: Date;
    /**
     * Geographic coordinate of latitude of the vehicle when known. May be null.
     *
     * @remarks
     *             Only available for some bus runs.
     */
    latitude?: number;
    /**
     * Geographic coordinate of longitude of the vehicle when known.
     *
     * @remarks
     *             Only available for some bus runs.
     */
    longitude?: number;
    /**
     * CIS - Metro Train Vehicle Location Northing coordinate
     */
    northing?: number;
    /**
     * Supplier of vehicle position data.
     */
    supplier?: string;
}
