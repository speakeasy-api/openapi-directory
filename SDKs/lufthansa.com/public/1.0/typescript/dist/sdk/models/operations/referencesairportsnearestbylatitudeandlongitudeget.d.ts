import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest extends SpeakeasyBase {
    /**
     * http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
     */
    accept: string;
    /**
     * 2 letter ISO 3166-1 language code
     */
    lang?: string;
    /**
     * Latitude in decimal format to at most 3 decimal places
     */
    latitude: number;
    /**
     * Longitude in decimal format to at most 3 decimal places
     */
    longitude: number;
}
export declare class ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse extends SpeakeasyBase {
    contentType: string;
    referencesAirportsNearestByLatitudeAndLongitudeGet200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
