import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A geographic location that can be associated with a timeline item.
 */
export declare class Location extends SpeakeasyBase {
    /**
     * The accuracy of the location fix in meters.
     */
    accuracy?: number;
    /**
     * The full address of the location.
     */
    address?: string;
    /**
     * The name to be displayed. This may be a business name or a user-defined place, such as "Home".
     */
    displayName?: string;
    /**
     * The ID of the location.
     */
    id?: string;
    /**
     * The type of resource. This is always mirror#location.
     */
    kind?: string;
    /**
     * The latitude, in degrees.
     */
    latitude?: number;
    /**
     * The longitude, in degrees.
     */
    longitude?: number;
    /**
     * The time at which this location was captured, formatted according to RFC 3339.
     */
    timestamp?: Date;
}
