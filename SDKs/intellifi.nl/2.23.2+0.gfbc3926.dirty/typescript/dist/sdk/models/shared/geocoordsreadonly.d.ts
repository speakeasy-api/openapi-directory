import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Last known geolocation estimate of this object. Not guaranteed to be included in response.
 */
export declare class GeoCoordsReadOnly extends SpeakeasyBase {
    /**
     * Latitude angle in degrees
     */
    lat?: number;
    /**
     * Longitude angle in degrees
     */
    lng?: number;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was updated.
     */
    timeUpdated?: string;
}
