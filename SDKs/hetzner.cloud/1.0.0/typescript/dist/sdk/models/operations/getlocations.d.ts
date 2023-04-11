import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetLocationsRequest extends SpeakeasyBase {
    /**
     * Can be used to filter Locations by their name. The response will only contain the Location matching the specified name.
     */
    name?: string;
}
export declare class GetLocations200ApplicationJSONLocations extends SpeakeasyBase {
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
 * The `locations` key in the reply contains an array of Location objects with this structure
 */
export declare class GetLocations200ApplicationJSON extends SpeakeasyBase {
    locations: GetLocations200ApplicationJSONLocations[];
}
export declare class GetLocationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `locations` key in the reply contains an array of Location objects with this structure
     */
    getLocations200ApplicationJSONObject?: GetLocations200ApplicationJSON;
}
