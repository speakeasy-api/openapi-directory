import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetweatherRequest extends SpeakeasyBase {
    /**
     * City for weather information
     */
    city: string;
    /**
     * Your Interzoid license API key. Register at www.interzoid.com/register
     */
    license: string;
    /**
     * State for weather information
     */
    state: string;
}
/**
 * Current weather information for a US city
 */
export declare class Getweather200ApplicationJSON extends SpeakeasyBase {
    city?: string;
    code?: string;
    credits?: string;
    relativeHumidity?: string;
    state?: string;
    tempC?: string;
    tempF?: string;
    visibilityMiles?: string;
    weather?: string;
    windDir?: string;
    windMPH?: string;
}
export declare class GetweatherResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Current weather information for a US city
     */
    getweather200ApplicationJSONObject?: Getweather200ApplicationJSON;
}
