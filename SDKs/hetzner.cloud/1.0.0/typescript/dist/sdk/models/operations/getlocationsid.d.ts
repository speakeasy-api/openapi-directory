import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetLocationsIdRequest extends SpeakeasyBase {
    /**
     * ID of Location
     */
    id: number;
}
export declare class GetLocationsId200ApplicationJSONLocation extends SpeakeasyBase {
    /**
     * City the Location is closest to
     */
    city: string;
    /**
     * ISO 3166-1 alpha-2 code of the country the Location resides in
     */
    country: string;
    /**
     * Description of the Location
     */
    description: string;
    /**
     * ID of the Location
     */
    id: number;
    /**
     * Latitude of the city closest to the Location
     */
    latitude: number;
    /**
     * Longitude of the city closest to the Location
     */
    longitude: number;
    /**
     * Unique identifier of the Location
     */
    name: string;
    /**
     * Name of network zone this Location resides in
     */
    networkZone: string;
}
/**
 * The `location` key in the reply contains a Location object with this structure
 */
export declare class GetLocationsId200ApplicationJSON extends SpeakeasyBase {
    location: GetLocationsId200ApplicationJSONLocation;
}
export declare class GetLocationsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `location` key in the reply contains a Location object with this structure
     */
    getLocationsId200ApplicationJSONObject?: GetLocationsId200ApplicationJSON;
}
