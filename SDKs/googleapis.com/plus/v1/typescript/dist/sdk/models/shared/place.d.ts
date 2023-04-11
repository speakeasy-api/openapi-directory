import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The physical address of the place.
 */
export declare class PlaceAddress extends SpeakeasyBase {
    /**
     * The formatted address for display.
     */
    formatted?: string;
}
/**
 * The position of the place.
 */
export declare class PlacePosition extends SpeakeasyBase {
    /**
     * The latitude of this position.
     */
    latitude?: number;
    /**
     * The longitude of this position.
     */
    longitude?: number;
}
export declare class Place extends SpeakeasyBase {
    /**
     * The physical address of the place.
     */
    address?: PlaceAddress;
    /**
     * The display name of the place.
     */
    displayName?: string;
    /**
     * The id of the place.
     */
    id?: string;
    /**
     * Identifies this resource as a place. Value: "plus#place".
     */
    kind?: string;
    /**
     * The position of the place.
     */
    position?: PlacePosition;
}
